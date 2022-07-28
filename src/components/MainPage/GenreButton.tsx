import { useRequestData } from "../../hooks/useRequestData";

import closeIcon from "../../assets/closeIcon.png";

interface Props {
    selectedGenreId: any,
    setSelectedGenreId: any
}

export const GenreButton: React.FC<Props> = ({
    selectedGenreId, 
    setSelectedGenreId
}) => {
    const genres = useRequestData([], "/genre/movie/list");
    const genresList = genres.data.data && genres.data.data.genres;

    const selectGenre = (genreId: number) => {
        const selectedGenre = {...selectedGenreId, [genreId]: true};
        
        setSelectedGenreId(selectedGenre);
    };

    // ---- quando um gênero é removido, todos são removidos junto
    const removeGenre = (genreId: number) => {
        const genreIndex = Object.keys(selectedGenreId).findIndex((genre) => genre === genreId.toString());

        const newSelectedGenreList = Object.keys(selectedGenreId).splice(genreIndex, 1);

        setSelectedGenreId(newSelectedGenreList);
    };
    
    const isGenreSelected = (id: number) => Object.keys(selectedGenreId).find((genreId: string) => genreId === id.toString()) ? true : false;    

    return (
            <>{ genresList && genresList.map((genre: any) => {
                if (!isGenreSelected(genre.id)) {
                    return (
                        <button className={`rounded py-2 px-4 font-bold text-dark_grey mb-3 mr-3 bg-white hover:bg-orange-100`} key={genre.id}
                         onClick={ () => selectGenre(genre.id) }>
                            {genre.name}
                        </button>
                    )
                } else {
                    return (
                        <button className={`flex items-center rounded py-2 px-4 font-bold text-dark_grey mb-3 mr-3 bg-strong_yellow`}>
                            {genre.name}
                            <img className="ml-2"
                             src={closeIcon} onClick={ () => removeGenre(genre.id) }/>
                        </button>
                    )
                };
            }) }</>
    );
};