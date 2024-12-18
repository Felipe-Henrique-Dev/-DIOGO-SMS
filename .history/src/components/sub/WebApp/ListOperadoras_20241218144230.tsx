/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";
import React, { use, useMemo } from "react";
import Image from "next/image";
interface ListOperadorasProps {
    filter: string;
    operatorItems: any
    operator: any
}

export const ListOperadoras = ({ filter, operatorItems, operator}: ListOperadorasProps) => {
    const serviceList = operatorItems
    const list = serviceList.operators[operator.selectService.short]
    const baseUrl = 'https://virtuasms.com'
    console.log('ListOperadoras V1', list)
    

    const filteredAndSortedList = useMemo(() => {
        if (!list) return [];

        return list
            .filter((item: any) => {
                return item.name.toLowerCase().includes(filter.toLowerCase());
            })
            .sort((a: { name: string }, b: { name: string }) => {
                // Se ambos forem iguais em relação a favoritos, ordena alfabeticamente
                return a.name.localeCompare(b.name);
            });
                
       
    }, [list, filter]);

    return (
        <>  

            {
                    filteredAndSortedList.map((item: any, index:number) => {
                        console.log('ListOperadoras', item)
                        return (
                            <div className="w-full flex items-center justify-start gap-2  px-2 py-2 rounded-lg shadow-sm shadow-black border-t border-2 border-black hover:bg-secondary transition-all duration-300"  key={item.country_name + index}>
 
                            </div>
                        )
                    })
            }
        </>
    );
}
