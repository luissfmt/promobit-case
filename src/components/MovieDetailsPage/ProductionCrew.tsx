import { Producer } from "../../types/production";

interface Props {
    crew: Producer[]
};

export const ProductionCrew: React.FC<Props> = ({ crew }) => {
    const crewMembers = crew && {
        producer: crew.filter((member: any) => member.department === "Production")[0],
        writer: crew.filter((member: any) => member.department === "Writing")[0],
        director: crew.filter((member: any) => member.job === "Director")[0],
        designer: crew.filter((member: any) => member.department === "Art")[0],
        sound: crew.filter((member: any) => member.department === "Sound")[0]
    };

    return (
        <>{ crewMembers &&
            <div className="grid grid-cols-3 gap-x-0 gap-y-6 w-4/5">
                <div>
                    <p className="font-bold">{crewMembers.producer ? `${crewMembers.producer.name}` : "Produtor desconhecido"}</p>
                    <p className="text-sm">{crewMembers.producer?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.writer ? `${crewMembers.writer.name}` : "Roteirista desconhecido"}</p>
                    <p className="text-sm">{crewMembers.writer?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.director ? `${crewMembers.director.name}` : "Diretor desconhecido" }</p>
                    <p className="text-sm">{crewMembers.director?.job}</p>
                </div>
                
                <div>
                    <p className="font-bold">{crewMembers.designer ? `${crewMembers.designer.name}` : "Designer desconhecido" }</p>
                    <p className="text-sm">{crewMembers.designer?.job}</p>
                </div>

                <div>
                    <p className="font-bold">{crewMembers.sound ? `${crewMembers.sound.name}` : "Produtor de som desconhecido" }</p>
                    <p className="text-sm">{crewMembers.sound?.job}</p>
                </div>
            </div>
        }</>
    );
}; 