<template>
  <div class="p-4 m-4">
    <NuxtLink to="/">
      <img :src="`https://image.tmdb.org/t/p/w300/`+poster" alt="movie" class="w-full h-48 object-cover">
    </NuxtLink>
    
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ releaseDate }}</p>
      
      <NuxtLink :to="`movies/${movieId}`" class="text-indigo-600 hover:underline">View Details</NuxtLink>
    </div>
  </div>
</template>

<script setup>


defineProps(["movieId","title","releaseDate","poster","overview"])
</script>

<style lang="scss" scoped>

</style>