import { reactive, watchEffect } from 'vue';
  const ALL_TV_SHOWS = 'All'

  const state = reactive({
    query: '',
    movies: [],
    genres: [],
    genreCollection: {},
    selectedGenre: ALL_TV_SHOWS,
    filterByGender: () => {
      const allMovies = state.createGenreCollection(state.movies);

      if (state.selectedGenre === ALL_TV_SHOWS) {
        state.genreCollection = allMovies;
        return;
      }
      const key = state.selectedGenre;
      state.genreCollection = {[key]: allMovies[state.selectedGenre]};
    },
    createGenreCollection: (movies) => {
      if(!movies) {
        return
      }

      const genreMap = {};

      movies.forEach(movie => {
        movie.genres.forEach(genre => {
          if (!genreMap[genre]) {
            genreMap[genre] = [];
          }
          genreMap[genre].push(movie);
        });
      });

      state.createAvailableGenres(genreMap)
      state.sortTvShowsByRating(genreMap);

      return genreMap;
    },
    sortTvShowsByRating : (collection) => {
      if(!collection) {
        return;
      }

      const collectionKey =  Object.keys(collection);
      for (const key of collectionKey) {
        collection[key].sort((a, b) => b.rating.average - a.rating.average);
      }

    },
    createAvailableGenres: (collection) => {
      if (!collection) {
        return;
      }
      state.genres =  [state.selectedGenre,...Object.keys(collection)];
    }
  });

watchEffect(() => {
    const MOVIE_API_URL = `https://api.tvmaze.com/shows`;
    const MOVIE_API_SEARCH = `https://api.tvmaze.com/search/shows?q=:${state.query}`;

    fetch(state.query.length ? MOVIE_API_SEARCH: MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        if(state.query.length) {
          state.movies = jsonResponse.map(shows => shows.show);
        } else {
          state.movies = jsonResponse;
        }
      });
  });
export const tvmazeApiState = () => {
  return state;
};