/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";
import React, { use, useMemo } from "react";
import Image from "next/image";
interface ListOperadorasProps {
    operatorItems: any
    operator: any
}

export const ListOperadoras = ({ operatorItems, operator}: ListOperadorasProps) => {
    const list = operatorItems.operators[operator.selectService.short]
    const baseUrl = 'https://virtuasms.com'
    console.log('ListOperadoras', list)

    return (
        <>  

            {
                    list.map((item: any, index:number) => {
                        console.log('item ListOperadoras', item)
                        return (
                            <div className="w-full flex items-center justify-start gap-2  px-2 py-2 rounded-lg shadow-sm shadow-black border-t border-2 border-black hover:bg-secondary transition-all duration-300"  key={item.country_name + index}>

                            </div>
                        )
                    })
            }
        </>
    );
}
