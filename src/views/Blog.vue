<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">
      Mis Publicaciones
    </h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      <div 
        v-for="publi in publicaciones" 
        :key="publi.id" 
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
      >
        <div class="w-full h-48 bg-gray-100 overflow-hidden">
          <img 
            :src="publi.cover_image" 
            :alt="publi.title" 
            class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
          >
        </div>

        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h2 class="text-lg font-bold text-gray-900 line-clamp-2 mb-2">
              {{ publi.title }}
            </h2>
          </div>
          
          <div class="mt-4 flex items-center justify-between">
            <span class="text-2xl font-black text-indigo-600">
              ${{ publi.precio }}
            </span>
            
            <button class="bg-indigo-50 px-3 py-1.5 rounded-lg text-sm font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
              Ver más
            </button>
          </div>
        </div>

      </div>
      </div>
  </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const publicaciones = ref([]);

     onMounted(() => {
        obtenerDatosApiBackend()
     });

     function obtenerDatosApiBackend(){
        fetch('https://dev.to/api/articles')
        .then(response => response.json())
        .then(json => {
            publicaciones.value = json
        })
        }
</script>