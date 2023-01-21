import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'bfae3c6f442bfa1857a52091906bf91e',
    language: 'es-ES',
  },
});
