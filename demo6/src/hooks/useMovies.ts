import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie | null>(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
  
    const loadMovies = async () => {
      setLoading(true);
      try {
        const movies = await FilmAdapter.getMovies({ route: FilmAdapter.ROUTES.nowPlaying, page });
        if (movies) {
          setNowPlaying((prevState) => ({
            ...movies,
            movies: deduplicateMovies([...(prevState?.movies || []), ...movies.movies]),
          }));
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error cargando películas:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      loadMovies();
    }, []);
  
    return {
      nowPlaying,
      loading,
      loadMovies,
    };
  };

  const deduplicateMovies = (movies: Movie[]) => {
    return movies.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );
  };