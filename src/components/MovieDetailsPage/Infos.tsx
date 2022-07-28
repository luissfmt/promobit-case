import ratingStarIcon from "../../assets/ratingStarIcon.png";

import { useRequestData } from "../../hooks/useRequestData";

import { GeneralInfo } from "../../types/movie";

interface Props {
    id: string,
    title: string,
    genres: Array<any>,
    runtime: number,
    vote_average: string,
    overview: string
};

export const Infos: React.FC<Props> = ({
    id,
    title,
    genres,
    runtime,
    vote_average,
    overview
}) => {
    const { data } = useRequestData({}, `/movie/${id}/release_dates`);
    const infosList: GeneralInfo[] = data.data && data.data.results;

    const filteredInfoByCountry: GeneralInfo = infosList && infosList.filter((info: GeneralInfo) => {
        return info.iso_3166_1 === "BR" || info.iso_3166_1 === "US";
    })[0];

    const certification = filteredInfoByCountry && {
        country: filteredInfoByCountry.iso_3166_1,
        release_year: filteredInfoByCountry.release_dates[0].release_date.split("-").at(0),
        classification: filteredInfoByCountry.release_dates[0].certification,
        release_date: filteredInfoByCountry.release_dates[0].release_date.substring(0, 10).split("-").reverse().join("/"),
    };

    const genresListToString = genres.map((genre: any) => genre.name).join(", ");

    const minToHours = (min: number): string => {
        const hours = min / 60;
        const intHours = Math.floor(hours);

        const minutes = (hours - intHours) * 60;
        const intMinutes = Math.round(minutes);

        return `${intHours}hr ${intMinutes}m`;
    };

    const onlyNumbers = (str: string) => /\d/.test(str);

    return (
        <>{ certification &&
            <div> 
                <h2 className="text-3xl font-semibold">{ title } ({ certification.release_year })</h2>

                <p className="text-lg my-2">
                    { certification.country === "BR" && onlyNumbers(certification.classification) ? `${certification.classification} anos` : "Classificação indisponível" } • { certification.release_date } ({certification.country}) • { genresListToString !== "" ? genresListToString : "Desconhecido" } • { minToHours(runtime) }
                </p>

                <div className="flex flex-col w-fit items-center mb-6">
                    <img className="w-6" src={ ratingStarIcon } alt="Star" />

                    <div>
                        <span className="text-2xl">{ vote_average.substring(0, 3) }</span>
                        <span>/10</span>
                    </div>
                </div>

                <p className="text-xl font-bold">Sinopse</p>
                <p className={`mt-2 mb-8 ${!overview && `italic`}`}>{ overview ? overview : "Sinópse indisponível." }</p>
            </div>
        }</>
    );
};