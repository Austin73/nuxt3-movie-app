<template>
    <div>
   <MovieDetail 
   :title="movie.original_title" 
   :releaseDate="movie.release_date"
    :details="movie.overview"
   :revenue="movie.revenue"
   :poster="movie.poster_path"

   />
    </div>
</template>

<script setup>
definePageMeta({
    layout:['custom']
})

const route= useRoute()

const {data:movie} = await useFetch(`/api/movies/${route.params.id}`)
console.log(movie)
</script>

<style lang="scss" scoped>

</style>