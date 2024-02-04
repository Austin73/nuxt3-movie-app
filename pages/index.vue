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
const movies= ref([])
const searchMovie=async (searchInput)=>{
    // console.log("search text " ,searchInput)
    if(searchInput === '') {
        searchError.value=true
    }
    if(searchInput !== '') {
        searchError.value=false
        const {data} =await useFetch(`/api/movies/search?searchInput=${searchInput}`)
        movies.value=data.value
    }
   

}
const {data} =await useFetch("/api/movies")

movies.value=data.value
</script>

<style scoped>

</style>