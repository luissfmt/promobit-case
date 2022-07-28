import { NavigateFunction } from "react-router-dom";

import { BASE_URL_IMAGE } from "../../constants/api";

import { goToMovieDetailsPage } from "../../routes/coordinator";

interface Props {
    id: number,
    poster_path: string,
    title: string,
    release_date: string,
    navigate: NavigateFunction
};

export const MovieCard: React.FC<Props> = ({
    id,
    poster_path,
    title,
    release_date,
    navigate
}) => {
    const convertDate = (releaseDate: string): string => {
        let [year, month, day] = releaseDate.split("-");

        switch(month) {
            case "01":
                month = "JAN";
                break;
            case "02":
                month = "FEV";
                break;
            case "03":
                month = "MAR";
                break;
            case "04":
                month = "ABR";
                break;
            case "05":
                month = "MAI";
                break;
            case "06":
                month = "JUN";
                break;
            case "07":
                month = "JUL";
                break;
            case "08":
                month = "AGO";
                break;
            case "09":
                month = "SET";
                break;
            case "10":
                month = "OUT";
                break;
            case "11":
                month = "NOV";
                break;
            case "12":
                month = "DEZ";
                break;
        };

        return `${day} ${month} ${year}`;
    };

    return (
        <div className="flex flex-col w-64">
            <img className="border-transparent rounded h-96 hover:border cursor-pointer"
            src={`${BASE_URL_IMAGE}${poster_path}`} 
            alt={`${title} poster`}
            onClick={ () => goToMovieDetailsPage(navigate, id) }
            />

            <p className="text-black font-bold my-1">{title}</p>

            <p className="text-sm text-light_grey font-bold">{convertDate(release_date)}</p>
        </div>
    );
};