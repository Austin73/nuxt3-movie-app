export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  try {
    const data = await $fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          authorization: `Bearer ${movieKey}`,
        },
      }
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
