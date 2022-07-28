import { useNavigate } from "react-router-dom";

import { useRequestData } from "../../hooks/useRequestData";

import { Movie } from "../../types/movie";

import { MovieCard } from "../MainPage/MovieCard";


interface Props {
    id: string
};

export const Recommendations: React.FC<Props> = ({ id }) => {
    const recommendations = useRequestData({}, `/movie/${id}/recommendations`);
    const navigate = useNavigate();

    const recommendationsList: Movie[] = recommendations.data.data && recommendations.data.data.results;

    return (
        <>{ recommendationsList && 
            <div className="flex w-full justify-between">

                { recommendationsList.filter((movie: Movie) => {
                    return movie.poster_path !== null;
                }).map((movie: Movie) => {
                    return (
                        <MovieCard key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        release_date={movie.release_date}
                        navigate={navigate}
                        />
                  )}).slice(0, 5) }

            </div>
        }</>
    );
};