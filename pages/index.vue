<template>
    <div>

<SearchBar @search-movie="searchMovie" 
 :searchError="searchError"/>
 <div class="flex flex-wrap -mx-4
 ">
 <div v-for="movie in movies.results" :key="movie.id">
 <!-- {{ movie }} -->
<MovieCard 
  :poster="movie.poster_path"
  :title="movie.original_title " 
  :details="movie.overview"
  :releaseDate="movie.release_date"
   :movieId="movie.id" />
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
const {data:movies} =await useFetch("/api/movies")


</script>

<style scoped>

</style>