import React, { Suspense } from "react";
import { List } from "./List";

interface ListProps {
    filter: string;
    favorites: string[];
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setSelect: React.Dispatch<React.SetStateAction<string[]>>;
    listLoading: string
}

export const ListServer = ({ filter, favorites, setFavorites, setSelect, listLoading }: ListProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <List filter={filter} favorites={favorites} setFavorites={setFavorites} setSelect={setSelect} listLoading={listLoading} />
    </Suspense>
  );
}