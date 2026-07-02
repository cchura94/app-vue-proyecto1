<template>
  <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <!-- Logo o Nombre del Sitio -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="text-xl font-black tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors">
            MI TIENDA
          </RouterLink>
        </div>

        <!-- Enlaces de Navegación (Escritorio) -->
        <div class="hidden md:flex space-x-8 items-center">
          <RouterLink 
            to="/" 
            class="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors py-2 px-1"
            active-class="text-indigo-600 border-b-2 border-indigo-600"
            exact-active-class="text-indigo-600 border-b-2 border-indigo-600"
          >
            INICIO
          </RouterLink>
          
          <RouterLink 
            to="/producto" 
            class="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors py-2 px-1"
            active-class="text-indigo-600 border-b-2 border-indigo-600"
          >
            PRODUCTOS
          </RouterLink>

          <RouterLink 
            to="/blog" 
            class="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors py-2 px-1"
            active-class="text-indigo-600 border-b-2 border-indigo-600"
          >
            BLOG
          </RouterLink>
        </div>

        <!-- Botón de Acción (Ingresar) -->
        <div class="hidden md:flex items-center">
          <RouterLink 
            to="/login" 
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all duration-200"
          >
            INGRESAR
          </RouterLink>
        </div>

        <!-- Menú Móvil (Simple / Enlaces rápidos abajo en pantallas chicas) -->
        <div class="flex md:hidden space-x-4">
          <RouterLink to="/" class="text-xs font-bold text-gray-600" active-class="text-indigo-600">INICIO</RouterLink>
          <RouterLink to="/producto" class="text-xs font-bold text-gray-600" active-class="text-indigo-600">PRODUCTOS</RouterLink>
          <RouterLink to="/blog" class="text-xs font-bold text-gray-600" active-class="text-indigo-600">BLOG</RouterLink>
          <RouterLink to="/login" class="text-xs font-bold text-indigo-600">LOG IN</RouterLink>
        </div>

      </div>
    </nav>
  </header>

  <!-- Contenido de las vistas (Se renderiza aquí abajo) -->
  <main class="min-h-screen bg-gray-50/50">
    <RouterView />
  </main>
</template>