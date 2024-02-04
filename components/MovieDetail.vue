<template>
   <div class="container mx-auto p-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3">
        <img :src="`https://image.tmdb.org/t/p/w300/` +poster" :alt="title" class="w-full h-auto rounded-lg mb-4">
      </div>
      <div class="md:w-2/3 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
        <p class="text-gray-600 mb-4">{{ details }}</p>
        <p class="text-green-600 font-bold mb-4">Revenue: ${{ revenue }}</p>
        <div class="flex space-x-4">
          <NuxtLink :to="`https://www.youtube.com/watch?v=${trailer}`" target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded">Watch Trailer</NuxtLink>
          <NuxtLink class="bg-yellow-500 text-white px-4 py-2 rounded">Buy Now</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(["details","title","poster","releaseDate","revenue","trailer"])

</script>

<style lang="scss" scoped>

</style>