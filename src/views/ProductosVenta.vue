<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-center mb-8">
      🛍️ Tienda
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">

      <!-- PRODUCTOS -->
      <section class="lg:col-span-3">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
  v-for="prod in productos"
  :key="prod.nombre"
  class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
>
  <!-- Imagen -->
  <img
    :src="prod.imagen"
    :alt="prod.nombre"
    class="w-full h-52 object-cover"
  >

  <!-- Contenido -->
  <div class="p-5">
    <h2 class="text-xl font-bold text-gray-800">
      {{ prod.nombre }}
    </h2>

    <p class="text-gray-500 mt-1">
      {{ prod.descripcion }}
    </p>

    <div class="flex justify-between items-center mt-5">
      <span class="text-2xl font-bold text-green-600">
        ${{ prod.precio }}
      </span>

      <button
        @click="agregarCarrito(prod)"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        Añadir
      </button>
    </div>
  </div>
</div>
        </div>
      </section>

      <!-- SIDEBAR DEL CARRITO -->
      <aside
        class="bg-white rounded-xl shadow-lg p-5 h-fit sticky top-5"
      >
        <h2 class="text-2xl font-bold mb-5 border-b pb-3">
          🛒 Carrito
        </h2>

        <div v-if="carrito.length == 0" class="text-gray-500 text-center">
          No hay productos
        </div>

        <div
          v-for="(item,index) in carrito"
          :key="index"
          class="border-b py-3"
        >
          <div class="flex justify-between">
            <span class="font-semibold">
              {{ item.nombre }}
            </span>

            <span class="font-bold text-green-600">
              ${{ item.precio }}
            </span>
          </div>

          <p class="text-sm text-gray-500">
            Cantidad: {{ item.cantidad }}
          </p>
        </div>

        <div
          v-if="carrito.length"
          class="mt-6 border-t pt-4 flex justify-between text-lg font-bold"
        >
          <span>Total</span>
          <span>${{ total }}</span>
        </div>

        <button
          v-if="carrito.length"
          class="w-full mt-5 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2"
        >
          Finalizar compra
        </button>
      </aside>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const productos = ref([]);
const carrito = ref([]);

onMounted(() => {
  productos.value = JSON.parse(localStorage.getItem("productos") || "[]");
});

function agregarCarrito(prod) {
  const existe = carrito.value.find((p) => p.nombre === prod.nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.value.push({
      nombre: prod.nombre,
      cantidad: 1,
      precio: prod.precio,
    });
  }
}

const total = computed(() =>
  carrito.value.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  )
);
</script>