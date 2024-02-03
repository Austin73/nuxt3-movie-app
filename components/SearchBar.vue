<template>
    <div class="max-w-md mx-auto mt-2">
    <form class="relative" onsubmit="return false">
      <input v-model.lazy="searchInput" type="text" placeholder="Search..." class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:border-indigo-500">
      <button type="submit" class="absolute right-0 top-0  bg-indigo-500
       text-white p-2 rounded-full hover:bg-indigo-700
        focus:outline-none focus:shadow-outline-indigo
         active:bg-indigo-500"
         @click="$emit('searchMovie',searchInput)">
   Search Movies
      </button>

      <div>

        <span v-if="searchError" class="text-red 700-px-4 py-3" role="alert">
             This field is required
        </span>
      </div>
    </form>
  </div>
</template>

<script setup>
const searchInput=ref("");

defineProps(["searchError"])
</script>

<style lang="scss" scoped>

</style>