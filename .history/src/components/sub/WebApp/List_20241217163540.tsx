/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";
import React, { use, useMemo } from "react";

interface ListProps {
    filter: string;
    favorites: string[];
    setFavorites?: React.Dispatch<React.SetStateAction<string[]>>;
    setSelect?: React.Dispatch<React.SetStateAction<string[]>>;
    listLoading: Promise<any> | any;
}

export const List = ({ filter, favorites, setFavorites, setSelect, listLoading }: ListProps) => {
    const list = use(listLoading) as any;

    return (<></>)

    // const setFavoriteInStorage = (itemId: string) => {
    //     if (!itemId) return;
    //     setFavorites?.((prevFavorites:any) => {
    //         const newFavorites = prevFavorites.includes(itemId)
    //             ? prevFavorites.filter((fav:any) => fav !== itemId)
    //             : [...prevFavorites, itemId];
    //         localStorage.setItem("favorites", JSON.stringify(newFavorites));
    //         return newFavorites;
    //     });
    // }

    // const filteredAndSortedList = useMemo(() => {
    //     if (!list.filter) return [];
    //     return list
    //         .filter((item: { title: string; }) => item.title.toLowerCase().includes(filter.toLowerCase()))
    //         .sort((a: { id: string; }, b: { id: string; }) => {
    //             const aFav = favorites.includes(a.id);
    //             const bFav = favorites.includes(b.id);
    //             if (aFav && !bFav) return -1;
    //             if (!aFav && bFav) return 1;
    //             return 0;
    //         });
    // }, [list, filter, favorites]);

    // return (
    //     <>
    //         {filteredAndSortedList.map((item: any) => (
    //             <div className="w-full flex items-center justify-start gap-2" key={item.id}>
    //                 <Stars
    //                     stars={favorites.includes(item.id)}
    //                     setFavorite={() => setFavoriteInStorage(item.id)}
    //                 />
    //                 <button 
    //                     className="flex flex-col font-black" 
    //                     onClick={() => setSelect?.(item)}
    //                     aria-label={`Selecionar ${item.title}`}
    //                 >
    //                     <span className="text-lg font-bold w-full text-center">{item.title}</span>
    //                 </button>
    //             </div>
    //         ))}
    //     </>
    // );
}

interface StarsProps {
    stars: boolean;
    setFavorite: () => void;
}

const Stars: React.FC<StarsProps> = ({ stars, setFavorite }) => {
    return (
        <svg 
            width="20" 
            height="20" 
            viewBox="0 0 13 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            onClick={setFavorite} 
            className="cursor-pointer" 
            aria-label={stars ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
            <path 
                d="M6.49956 9.51326L9.26623 11.1866C9.77289 11.4933 10.3929 11.0399 10.2596 10.4666L9.52623 7.31992L11.9729 5.19993C12.4196 4.81326 12.1796 4.07993 11.5929 4.03326L8.37289 3.75993L7.11289 0.786592C6.88623 0.246592 6.11289 0.246592 5.88623 0.786592L4.62623 3.75326L1.40623 4.02659C0.81956 4.07326 0.57956 4.80659 1.02623 5.19326L3.47289 7.31326L2.73956 10.4599C2.60623 11.0333 3.22623 11.4866 3.73289 11.1799L6.49956 9.51326Z" 
                fill={stars ? "#EFC900" : "none"} 
                stroke="#EFC900" 
                strokeWidth="0.5"
            />
        </svg>
    );
}
