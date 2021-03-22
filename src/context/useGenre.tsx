import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenereContextData{
    selectedGenreId: number;
    setSelectedGenreId(id:number): void;
    selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

const GenreContext = createContext<GenereContextData>({} as GenereContextData)

export const GenereProvider: React.FC = ({children}) => {
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    return (
        <GenreContext.Provider value={{selectedGenreId, setSelectedGenreId, selectedGenre}}>
            {children}
        </GenreContext.Provider>
)}

export function useGenre(){
    const context = useContext(GenreContext)

    return context
}
        