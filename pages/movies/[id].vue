<template>
    <div>
   <MovieDetail 
   :title="movie.original_title" 
   :releaseDate="movie.release_date"
    :details="movie.overview"
   :revenue="movie.revenue"
   :poster="movie.poster_path"
   :trailer="trailer"
   />
    </div>
</template>

<script setup>
import {  computed } from 'vue'
definePageMeta({
    layout:['custom']
})

const route= useRoute()

const {data:movie} = await useFetch(`/api/movies/${route.params.id}`)

// fetch movie trailer
const {data:videos} = await useFetch(`/api/trailer/${route.params.id}`)

const allVedios= toRaw(videos.value.results)
 
console.log("allvedios ",allVedios)
const trailer=computed(()=>{
    let trailer=[]
    for (let index = 0; index < allVedios.length; index++) {
      if(allVedios[index].type === 'Trailer') {
        trailer.push(allVedios[index]);
      } 
    }
    return trailer[0].key
});

</script>

<style lang="scss" scoped>

</style>