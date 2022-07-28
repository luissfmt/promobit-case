import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

import { GenreButton } from "../components/MainPage/GenreButton";
import { MovieCard } from "../components/MainPage/MovieCard";

import { Movie, MovieDTO } from "../types/movie";
import { Header } from "../components/Header";

export const MainPage: React.FC = () => {
    const [selectedGenreId, setSelectedGenreId] = useState<{[key: number]: Boolean}>({});
    const navigate = useNavigate();

    const { data, getData } = useRequestData([], "/movie/popular");
    const movies: MovieDTO[] = data.data && data.data.results;

    // ---- depois de remover filtro selecionado, a lista de todos filmes não aparece novamente ----
    const moviesList = movies && movies.filter((movie: MovieDTO) => {
        return Object.keys(selectedGenreId).length === 0 || movie.genre_ids.some((genre: any) => selectedGenreId[genre]);
    }).map((movie: Movie) => {
        return (
                <MovieCard key={movie.id}
                 id={movie.id}
                 poster_path={movie.poster_path}
                 title={movie.title}
                 release_date={movie.release_date}
                 navigate={navigate}
                />
            );
    });

    return (
        <>
            <Header navigate={navigate} />
            
            <div className="font-sans text-white w-screen">
                <main className="flex flex-col justify-center items-center bg-dark_purple">

                    <h1 className="text-5xl text-center mt-14 font-bold">
                        Milhões de filmes, séries e pesssoas <br /> para descobrir. Explore já.
                    </h1>

                    <p className="uppercase text-xs font-bold mt-8 p-4">Filtre por:</p>

                    <div className="w-3/5 flex flex-wrap justify-center mb-14">
                        <GenreButton selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} />
                    </div>

                    <div className="bg-white flex justify-center w-full">
                        <div className="flex flex-wrap justify-center w-4/5 gap-8 m-8">
                            {moviesList}
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
};