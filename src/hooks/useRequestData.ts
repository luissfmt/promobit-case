import axios from "axios";
import { useEffect, useState } from "react";

import { API_KEY_AND_LANGUAGE, BASE_URL } from "../constants/api";

export function useRequestData(initialState: any, endpoint: string) {
    const [data, setData] = useState(initialState);

    const getData = async (): Promise<any> => {
        try {
            const response = await axios.get(`${BASE_URL}${endpoint}${API_KEY_AND_LANGUAGE}`);
            
            setData(response);

        } catch (error: any) {
            alert("Ocorreu um erro na requisição");
            console.log(error);
        }
    };

    useEffect(() => {getData(), [endpoint]});

    return { data, getData };
};