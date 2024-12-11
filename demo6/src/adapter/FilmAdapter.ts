
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpError } from "./http/HttpError";
import { resultMovieMapper } from "../config/mapper/resultMovieMapper";
import ResultMovie from "../config/entities/ResultMovie";

interface DataMovieRequest {
    total?: number;
    page?: number;
    route?: string;
  }
  
  export class FilmAdapter {
    static ROUTES = {
      nowPlaying: "/now_playing"
    };
  
    static async getMovies({ route = this.ROUTES.nowPlaying, page = 1, total }: DataMovieRequest): Promise<ResultMovie | null> {
      const http = HttpFactory2.build();
  
      if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
  
      const movies = await http.getFilms(route, page);
  
      if (movies instanceof HttpError) return null;
      const dataMovies = resultMovieMapper(movies);
      return dataMovies;
    }
  }