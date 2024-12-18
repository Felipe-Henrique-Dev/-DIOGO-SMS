/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Suspense } from "react";
import { List } from "./List";
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";

interface ListProps {
    filter: string;
    favorites: string[];
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setSelect: React.Dispatch<React.SetStateAction<string[]>>;
    listLoading: string
}

export const ListServer = ({ filter, favorites, setFavorites, setSelect, listLoading }: ListProps) => {
    const list = listLoading === 'pais' ? getAllCountry() : getAllServices() 
    
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <List filter={filter} favorites={favorites} setFavorites={setFavorites} setSelect={setSelect} listLoading={list} />
        </Suspense>
    );
}