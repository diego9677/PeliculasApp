import { useEffect, useState } from "react";
import { movieDB } from "../api/movieDB";
import { Cast, Credits } from "../interfaces/creditsInterfaces";
import { MovieFull } from "../interfaces/movieInterfaces";

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull,
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({ isLoading: true, movieFull: undefined, cast: [] });

  const getMovieDetails = async () => {
    try {
      const [movieFullResponse, creditsResponse] = await Promise.all([
        movieDB.get<MovieFull>(`/${movieId}`),
        movieDB.get<Credits>(`/${movieId}/credits`)
      ]);
      setState({
        isLoading: false,
        movieFull: movieFullResponse.data,
        cast: creditsResponse.data.cast
      });
    } catch (error) {
      console.log(error);
    } finally {
      setState((prevValues) => ({ ...prevValues, isLoading: false }));
    }
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...state
  }
}