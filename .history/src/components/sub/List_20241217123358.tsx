/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useMemo , use } from "react";
import { getAllServices } from "@/functions/servicos";
import { getAllCountry } from "@/functions/pais";
interface ListProps {
    type: 'servicos' | 'paises' | 'operadora'
    filter: string;
    list: { title: string; valor: number; numberDispobilize: number; id: string }[];
    favorites: string[];
    setFavorites: any
    setSelect: (item: { title: string; valor: number; numberDispobilize: number; id: string }) => void;
}

const getList = async (type: string) => {
    switch(type){
        case 'servicos': return await getAllServices()
        case 'paises': return await getAllCountry()
    }
}

export const List = ({ type, filter, favorites, setFavorites, setSelect }: ListProps) => {
    const list = use(getList(type))
    console.log(list)
    const setFavoriteInStorage = (item: string) => {
        const newFavorites = favorites.includes(item)
          ? favorites.filter(favorite => favorite !== item)
          : [...favorites, item];
    
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    
      // Primeiro filtrar e ordenar a lista antes do map
    const filteredAndSortedList = useMemo(() => {
        return list
          .filter((item:any) => item.title.toLowerCase().includes(filter))
          .sort((a:any, b:any) => {
            const aFav = favorites.includes(a.id);
            const bFav = favorites.includes(b.id);
            if (aFav && !bFav) return -1;
            if (!aFav && bFav) return 1;
            return 0;
          });
    }, [list, filter, favorites]);


    return (
        <>
            {filteredAndSortedList.map((item:any) => (
                <div className="w-full flex items-center justify-start gap-2" key={item.id}>
                <Stars
                    stars={favorites.includes(item.id)}
                    setFavorite={() => setFavoriteInStorage(item.id)}
                />
                <button className="flex flex-col font-black" onClick={() => setSelect(item)}>
                    <span className="text-lg font-bold w-full text-center">{item.title}</span>
                </button>
                </div>
            ))}
        </>
    );
}


const Stars = ({stars, setFavorite} : {stars: boolean, setFavorite: () => void}) => {
    return (
        <>
            {
                !stars?
                <svg width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setFavorite} className="cursor-pointer" >
                    <path d="M6.49956 9.51326L9.26623 11.1866C9.77289 11.4933 10.3929 11.0399 10.2596 10.4666L9.52623 7.31992L11.9729 5.19993C12.4196 4.81326 12.1796 4.07993 11.5929 4.03326L8.37289 3.75993L7.11289 0.786592C6.88623 0.246592 6.11289 0.246592 5.88623 0.786592L4.62623 3.75326L1.40623 4.02659C0.81956 4.07326 0.57956 4.80659 1.02623 5.19326L3.47289 7.31326L2.73956 10.4599C2.60623 11.0333 3.22623 11.4866 3.73289 11.1799L6.49956 9.51326Z" fill="none" stroke="#EFC900" strokeWidth="0.5"/>
                </svg>
                : 
                <svg width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setFavorite} className="cursor-pointer">
                    <path d="M6.49956 9.51326L9.26623 11.1866C9.77289 11.4933 10.3929 11.0399 10.2596 10.4666L9.52623 7.31992L11.9729 5.19993C12.4196 4.81326 12.1796 4.07993 11.5929 4.03326L8.37289 3.75993L7.11289 0.786592C6.88623 0.246592 6.11289 0.246592 5.88623 0.786592L4.62623 3.75326L1.40623 4.02659C0.81956 4.07326 0.57956 4.80659 1.02623 5.19326L3.47289 7.31326L2.73956 10.4599C2.60623 11.0333 3.22623 11.4866 3.73289 11.1799L6.49956 9.51326Z" fill="#EFC900"/>
                </svg>
            }
        </>
    );
  }