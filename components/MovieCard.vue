<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <NuxtLink to="/">
      <img src="./public/profile.jpeg" alt="movie" class="w-full h-48 object-cover">
    </NuxtLink>
    
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ releaseDate }}</p>
      
      <NuxtLink :to="`movies/${movieId}`" class="text-indigo-600 hover:underline">View Details</NuxtLink>
    </div>
  </div>
</template>

<script setup>


defineProps(["movieId","title","releaseDate","poster"])
</script>

<style lang="scss" scoped>

</style>