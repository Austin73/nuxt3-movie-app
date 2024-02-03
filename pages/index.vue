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
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const {data:movies} =useFetch(url,{
    onRequest({ request, options }) {
    // Set the request headers
    options.headers = options.headers || {}
    options.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmUxN2U0YzQyMDgxNjdkNDE2N2Q2NjYyNzEwYjExNyIsInN1YiI6IjY1YmUwNDZmOTMxZWExMDE3YzlhYTI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q5lNz5hm59oPjyXkWvx2dFae9UFnk_fx49HhgvKPniI'
  },
}
)


</script>

<style scoped>

</style>