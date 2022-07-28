import { NavigateFunction } from "react-router-dom";
import { goToMainPage } from "../routes/coordinator";

interface Props {
    navigate: NavigateFunction
};

export const Header: React.FC<Props> = ({ navigate }) => {
    return (
        <header className="border-transparent bg-light_purple flex items-center w-screen p-2">

            <div className="relative left-20 flex items-center">
                <p className="text-white text-3xl font-bold tracking-widest hover: cursor-pointer" onClick={ () => goToMainPage(navigate) }>TMDB</p>

                <div className="bg-white rounded-full p-2 w-12 ml-1" />
            </div>
            
        </header>
    );
};