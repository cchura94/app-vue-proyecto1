<template>
  <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">
      Gestión de Nuestros Productos
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
        <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span class="w-2.5 h-5 bg-indigo-600 rounded-full inline-block"></span>
          {{ producto.id ? 'Editar Producto' : 'Nuevo Producto' }}
        </h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Nombre del Producto</label>
            <input 
              type="text" 
              v-model="producto.nombre" 
              placeholder="Ej. Laptop Gamer"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Stock</label>
              <input 
                type="number" 
                v-model="producto.stock" 
                placeholder="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
              >
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Precio ($)</label>
              <input 
                type="number" 
                v-model="producto.precio" 
                placeholder="0.00"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">URL de la Imagen</label>
            <input 
              type="text" 
              v-model="producto.imagen" 
              placeholder="https://ejemplo.com/imagen.jpg"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
            >
          </div>

          <button 
            @click="funGuardarProducto()" 
            class="w-full mt-2 bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 text-sm"
          >
            Guardar Producto
          </button>
        </div>
      </div>

      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h2 class="text-lg font-bold text-gray-800">Lista de Productos Existentes</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th class="px-6 py-3">Imagen</th>
                <th class="px-6 py-3">Nombre</th>
                <th class="px-6 py-3">Stock</th>
                <th class="px-6 py-3">Precio</th>
                <th class="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-sm text-gray-700">
              <tr 
                v-for="(prod, posicion) in productos" 
                :key="posicion"
                class="hover:bg-gray-50/70 transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                    <img :src="prod.imagen" alt="Producto" class="w-full h-full object-cover">
                  </div>
                </td>
                
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {{ prod.nombre }}
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <span 
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    :class="prod.stock > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'"
                  >
                    {{ prod.stock }} u.
                  </span>
                </td>
                
                <td class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                  ${{ prod.precio }}
                </td>
                
                <td class="px-6 py-4 text-right whitespace-nowrap space-x-2">
                  <button 
                    @click="funEditar(prod)" 
                    class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-semibold rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                  >
                    Editar
                  </button>
                  <button 
                    @click="funEliminar(posicion)" 
                    class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr v-if="!productos || productos.length === 0">
                <td colspan="5" class="px-6 py-10 text-center text-gray-400 italic">
                  No hay productos registrados actualmente.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    
    const productos = ref([]);
    const producto = ref({});
    const edicion = ref(false)

    onMounted(() => {
        // alert("Cargando Producto...")
        funListar()
    });

    function funListar(){
        const datos = localStorage.getItem("productos") || "[]";
        productos.value = JSON.parse(datos);
    }

    function funGuardarProducto(){
        if(edicion.value){
            producto.value = {}
            edicion.value = false;
        }else{
            const nuevoProd = producto.value
            productos.value.push(nuevoProd);
            producto.value = {}

        }
        localStorage.setItem("productos", JSON.stringify(productos.value))
        
    }

    function funEditar(prod){
        edicion.value = true;
        producto.value = prod;
        
    }

    function funEliminar(posicion){
        productos.value.splice(posicion, 1);
    }


</script>