/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";
import React, { use, useMemo } from "react";
import Image from "next/image";
interface ListProps {
    filter: string;
    favorites: string[];
    setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
    setSelect: React.Dispatch<React.SetStateAction<string[]>>;
    type: any
    service: any
    filterSelect: any
}

export const List = ({ filter, favorites, setFavorites, setSelect, type, service, filterSelect}: ListProps) => {
    const serviceList = use(service) as any
    const list = serviceList.services
    const serviços = list.map((item: any) =>  item.services).flat()
    const baseUrl = 'https://virtuasms.com'
    // console.log('serviços', serviços)
    // console.log('loadingList', serviceList)
    console.log('filterSelect', filterSelect)
    const setFavoriteInStorage = (itemId: string) => {
        if (!itemId) return;
        setFavorites((prevFavorites:any) => {
            const newFavorites = prevFavorites.includes(itemId)
                ? prevFavorites.filter((fav:any) => fav !== itemId)
                : [...prevFavorites, itemId];
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            return newFavorites;
        });
    }

    const filteredAndSortedList = useMemo(() => {
        if (!list) return [];
        if (type === 'service') {
            // console.log('filterSelect service', filterSelect)
            // Remover itens duplicados com base em 'name'
            let uniqueServices = serviços.filter((item: any, index: number, self: any[]) => {
                return index === self.findIndex((t) => t.name === item.name);
            });

            if(filterSelect) {
                console.log('filteredAndSortedList service filterSelect', filterSelect)
                uniqueServices = uniqueServices.filter((item: any) => {
                    console.log('filteredAndSortedList service item', item)
                    return item.services.map((service: any) => service.name).includes(filterSelect.name)
                })
            }
        
            return uniqueServices
                .filter((item: any) => {
                    return item.name.toLowerCase().includes(filter.toLowerCase());
                })
                .sort((a: { name: string }, b: { name: string }) => {
                    const aFav = favorites.includes(a.name);
                    const bFav = favorites.includes(b.name);
        
                    if (aFav && !bFav) return -1; // a é favorito e b não é
                    if (!aFav && bFav) return 1;  // b é favorito e a não é
        
                    // Se ambos forem iguais em relação a favoritos, ordena alfabeticamente
                    return a.name.localeCompare(b.name);
                });
        }
        
        if (type === 'country') {
            console.log('filterSelect country', filterSelect)
            let uniqueCountries = list
            if(filterSelect) {
                uniqueCountries = list.filter((item: any) => {
                    console.log('filteredAndSortedList country item', item) 
                    return item.services.map((service: any) => service.name).includes(filterSelect.name)
                })
            }


            return uniqueCountries
                .filter((item: any) =>
                    item.country_name.toLowerCase().includes(filter.toLowerCase())
                )
                .sort((a: { country_name: string }, b: { country_name: string }) => {
                    const aFav = favorites.includes(a.country_name);
                    const bFav = favorites.includes(b.country_name);
        
                    if (aFav && !bFav) return -1; // a é favorito e b não é
                    if (!aFav && bFav) return 1;  // b é favorito e a não é
        
                    // Se ambos forem iguais em relação a favoritos, ordena alfabeticamente
                    return a.country_name.localeCompare(b.country_name);
                });
        }
    }, [list, type, serviços, filterSelect, filter, favorites]);

    return (
        <>  

            {
                type === 'service' && 
                    filteredAndSortedList.map((item: any, index:number) => (
                        <div className="w-full flex items-center justify-start gap-2 bg-background px-1 py-2 rounded-lg cursor-pointer " onClick={() => setSelect(item)} key={item.name+index}>
                            <Stars
                                stars={favorites.includes(item.name)}
                                setFavorite={() => setFavoriteInStorage(item.name)}
                            />
                            <Image src={`${baseUrl}${item.logo}`} alt={item.name} width={30} height={30} className="rounded-full shadow-md shadow-black min-w-8 h-8 " />
                            <span className="text-lg font-bold w-full text-start text-tertiary ">{item.name}</span>
                        </div>
                    ))
            }

            {
                type === 'country' && 
                    filteredAndSortedList.map((item: any, index:number) => {
                        // console.log('item', item)
                        return (
                            <div className="w-full flex items-center justify-start gap-2 bg-background px-1 py-2 rounded-lg cursor-pointer " onClick={() => setSelect(item)} key={item.country_name + index}>
                                <Stars
                                    stars={favorites.includes(item.country_name)}
                                    setFavorite={() => setFavoriteInStorage(item.country_name)}
                                />
                                <Image src={`${baseUrl}${item.country_flag}`} alt={item.country_name} width={30} height={30}  className="rounded-full shadow-md shadow-black min-w-8 h-8 " />
                                <span className="text-lg font-bold w-full text-start text-tertiary ">{item.country_name}</span>
                                
                            </div>
                        )
                    })
            }
        </>
    );
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
