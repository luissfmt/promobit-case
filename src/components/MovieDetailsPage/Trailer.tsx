import { useRequestData } from "../../hooks/useRequestData";
import { Video, VideoDTO } from "../../types/movie";

interface Props {
    id: string
};

export const Trailer: React.FC<Props> = ({ id }) => {
    const videos = useRequestData({}, `/movie/${id}/videos`);
    const videosList = videos.data.data && videos.data.data.results;

    const trailer_key: string | undefined = videosList && videosList.filter((video: VideoDTO) => {
        return video.type === "Trailer" && video.official === true || video.type === "Trailer";
    }).map((video: Video) => {
        return video.key;
    })[0];

    return (
        <>{ trailer_key ? 
            <iframe width="907" height="510" src={`https://www.youtube.com/embed/${ trailer_key }`}
             title="YouTube video player" 
             allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
             className="mb-14"
            /> :
            <p className="text-lg italic font-semibold">Trailer indisponível</p>
        }</>
    );
};