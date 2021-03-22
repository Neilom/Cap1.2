import { useEffect, useState } from "react";
import { useGenre } from "../context/useGenre";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";


interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


export function Content() {
  const {selectedGenreId} = useGenre();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);

  return (
    <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
              key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
            ))}
          </div>
        </main>
  )
}