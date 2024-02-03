export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieId = event.context.params.id;
  try {
    const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        authorization: `Bearer ${movieKey}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
