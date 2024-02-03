<template>
   <div class="bg-white p-8 rounded shadow-md w-96 m-auto">

<h2 class="text-2xl font-bold mb-4 ">Register</h2>

<!-- Email input -->
<div class="mb-4 w-full">
    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your email">
</div>

<!-- username input -->
<div class="mb-4 w-full">
    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">userName</label>
    <input type="username" id="username" name="username" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your username">
</div>

<!-- Password input -->
<div class="mb-6 w-full">
    <label for="new-password" class="block text-gray-700 text-sm font-bold mb-2">New Password</label>
    <input type="password" id="new-password" name="new-password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your new password">
</div>

<!-- Register button -->
<button class="bg-green-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-green hover:bg-green-600 transition duration-300" type="button">Register</button>

</div>
</template>

<script setup>
definePageMeta({
    layout:"custom"
})
</script>

<style lang="scss" scoped>

</style>