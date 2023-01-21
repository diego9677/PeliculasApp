import { useEffect, useState } from 'react';
import { movieDB } from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/MovieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLodaing] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const [responseNowPlaying, responsePopular, responseTopRated, responseUpcoming] = await Promise.all([
          movieDB.get<MovieDBResponse>('/now_playing'),
          movieDB.get<MovieDBResponse>('/popular'),
          movieDB.get<MovieDBResponse>('/top_rated'),
          movieDB.get<MovieDBResponse>('/upcoming'),
      ]);
      const nowPlaying = responseNowPlaying.data.results;
      const popular = responsePopular.data.results;
      const topRated = responseTopRated.data.results;
      const upcoming = responseUpcoming.data.results;
      setMoviesState({nowPlaying, popular, topRated, upcoming});
    } catch (error) {
      console.log(error);
    } finally {
      setIsLodaing(false);
    }
  };

  return { ...moviesState, isLoading };
};
