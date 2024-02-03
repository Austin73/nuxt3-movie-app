<template>
   <div class="container mx-auto p-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3">
        <img :src="movie.poster" :alt="movie.title" class="w-full h-auto rounded-lg mb-4">
      </div>
      <div class="md:w-2/3 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">{{ movie.title }}</h1>
        <p class="text-gray-600 mb-4">{{ movie.details }}</p>
        <p class="text-green-600 font-bold mb-4">Revenue: ${{ movie.revenue }}</p>
        <div class="flex space-x-4">
          <NuxtLink to="https://www.youtube.com/watch?v=0UEhu4uWUAM" target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</NuxtLink>
          <NuxtLink class="bg-yellow-500 text-white px-4 py-2 rounded">Watch Trailer</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const movie=ref({
    title:'Maneesh',
    revenue:23323,
    details:`This is a long detailed description of the movie Maneesh which is about to be
    released in cinemas and it's going to be huge!`,
    poster:'mposter hai'
})

</script>

<style lang="scss" scoped>

</style>