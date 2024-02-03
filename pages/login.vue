<template>
    <div class="bg-white p-8 rounded shadow-md">
        <div class="bg-white p-8 m-auto rounded shadow-md w-96 flex flex-col items-center">

<h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

<!-- Username input -->
<div class="mb-4">
    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
    <input type="text" id="username" name="username" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your username">
</div>

<!-- Password input -->
<div class="mb-6">
    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your password">
</div>

<!-- Login button -->
<button class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600 transition duration-300" type="button">Login</button>
</div>
</div>
</template>

<script setup>
definePageMeta({
    layout:"custom"
})
</script>

<style lang="scss" scoped>

</style>