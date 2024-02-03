<template>
    <div>

<SearchBar @search-movie="searchMovie" 
 :searchError="searchError"/>
 <div class="grid md:cols-4 sm:grid-cols-1
  justify-items-center bg-cyan-50
 ">
 <div v-for="n in 3">
<MovieCard :title="title" :releaseDate="releaseDate" :movieId="movieId" :poster="poster"/>
</div>
</div>
    
    </div>
</template>

<script setup>
const searchError = ref(false)

const searchMovie=(searchInput)=>{
    // console.log("search text " ,searchInput)
    if(searchInput === '') {
        searchError.value=true
    }
    if(searchInput !== '') {
        searchError.value=false
    }
}
const movieId = ref(123)
const title=ref("Batman Pro")
const releaseDate =ref("20-01-2023")
const poster=ref()
</script>

<style scoped>

</style>