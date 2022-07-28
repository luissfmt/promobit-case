import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={ <MainPage />} />
                <Route path="/details/:id" element={ <MovieDetailsPage /> } />
                
            </Routes>
        </BrowserRouter>
    );
};