import { BASE_URL_IMAGE } from "../../constants/api";

import { Actor } from "../../types/production";

interface Props {
    cast: Actor[]
};

export const CastCarousel: React.FC<Props> = ({ cast }) => {
    return (
        <div className="flex overflow-x-scroll h-auto max-w-full cast-scrollbar">
            { cast && cast.filter((actor: Actor) => {
                return actor.profile_path !== null;
            }).map((actor: Actor) => {
                return (                    
                    <div key={actor.name} className="h-auto p-2 my-5 mx-2 shadow-[0_4px_4px_0_#00000040]">
                        <div className="w-44">
                            <img className="rounded max-w-full"
                            src={`${BASE_URL_IMAGE}${actor.profile_path}`} alt={`Foto de ${actor.name}`} />
                        </div>

                            <p className="font-bold mt-4 mb-2">{actor.name}</p>
                        
                            <p className="flex flex-wrap text-sm">{actor.character}</p>
                    </div>
                );
            }) }
        </div>
    );
};