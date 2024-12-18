/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, use }  from "react";
import { Input } from "@/components/main/Input";
import { useForm } from "react-hook-form"
import {  IconAlertHexagon, IconX } from '@tabler/icons-react';
import { ListServer } from "./ListServer";
import { List } from "./List";
import { SkeletonList } from "./Skeleton_list";
import Image from "next/image";



export const Container = ({
    type,
    subTitle,
    select,
    setSelect,
    operator,
    country,
    service
}: {
    subTitle: string;
    select?: any;
    setSelect: React.Dispatch<React.SetStateAction<any>>
    type?: 'country' | 'service' | 'operator';
    operator?: any
    country: any;
    service: any;
}) => {
    const baseUrl = 'https://virtuasms.com'

    const { register, watch } = useForm();
    const filter = (watch("filter") || "").toLowerCase();
    const [favorites, setFavorites] = React.useState<string[]>([]);
    React.useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);
    
    
    
    if (operator === 'none') {
      return (
        <div className="flex flex-col gap-2  ">
          <span className="text-2xl w-full text-start px-5 text-black font-ubuntu ">{subTitle}</span>
          <div className="flex w-full bg-light rounded-lg h-10 items-center justify-start px-5 gap-5 ">
              <button className="flex items-center justify-center gap-2 h-8 min-w-8 rounded-xl text-red-500">
                 <IconAlertHexagon className="size-full" stroke={1} />
              </button>
              <span className="text-sm font-bold w-auto text-center text-black font-roboto ">
                Selecione um pais e um serviço
              </span>
          </div>
        </div>
      )
    }
  
    return (
      <div className="flex flex-col gap-2  ">
        <span className="text-2xl w-full text-start px-5 text-tertiary font-ubuntu ">{subTitle}</span>
        { 
          select ?
            <div className="flex w-full bg-light rounded-lg h-10 items-center justify-start px-5 gap-5 py-1 ">
              <button onClick={() => setSelect(null)} className="flex items-center justify-center gap-2 h-8 min-w-8 rounded-xl border-red-500 border-[1px] text-black">
                 <IconX className="w-5 h-5" />
              </button>
              <Image src={`${baseUrl}${select.country_flag || select.logo }`} alt={select.country_name || select.logo} width={30} height={30}  className="rounded-full shadow-md shadow-black min-w-8 h-8 " />
              <span className="text-lg font-bold w-auto text-center text-black font-roboto ">{select.name || select.country_name}</span>
            </div>
          :
          <>
            <Input type="text" placeholder="Pesquisar" size="lg" classNameInput="w-full h-9 " register={register("filter")} />
            <div className="max-h-96 shadow-inner shadow-black py-2 w-full my-2 overflow-x-auto scroll-smooth rounded-lg px-2 text-black font-ubuntu flex flex-col gap-2 ">
                <Suspense fallback={<SkeletonList />}>
                  <List type={type} filter={filter} favorites={favorites} setFavorites={setFavorites} setSelect={setSelect} service={service} />
                </Suspense>
                {/* {
                  type === 'operator' &&
                  <Operadora operator={operator} country={country} />
                } */}
            </div>
          </>
        }
      </div>
    );
};
  