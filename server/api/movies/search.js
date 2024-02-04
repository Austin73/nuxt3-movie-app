export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const { searchInput } = getQuery(event);
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&page=1`,
      {
        headers: {
          authorization: `Bearer ${movieKey}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
