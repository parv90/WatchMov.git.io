const api = {
  key: "940da2dc42bfb4d16785a521c04cee06",
  base: "https://api.themoviedb.org/3",
};

const requests = {
  fetchTrendingAll: `${api.base}/trending/all/week?api_key=${api.key}&language=en-US`,
  fetchTopRatedMovies: `${api.base}/movie/top_rated?api_key=${api.key}&language=en-US`,
  fetchTopRatedTvShows: `${api.base}/tv/top_rated?api_key=${api.key}&language=en-US`,
  fetchActionMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=28`,
  fetchActionTvShows: `${api.base}/discover/movie?api_key=${api.key}&with_genres=28`,
  fetchComedyMovies: `${api.base}/discover/tv?api_key=${api.key}&with_genres=35`,
  fetchComedyTvShows: `${api.base}/discover/tv?api_key=${api.key}&with_genres=35`,
  fetchHorrorMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=27`,
  fetchSoapTvShows: `${api.base}/discover/tv?api_key=${api.key}&with_genres=10766`,
  fetchRomanceMovies: `${api.base}/discover/movie?api_key=${api.key}&with_genres=10749`,
  fetchDocumentaries: `${api.base}/discover/movie?api_key=${api.key}&with_genres=99`,
};

export default requests;