/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { use } from "react";
import { Input } from "@/components/main/Input";
import { useForm } from "react-hook-form"
import {  IconAlertHexagon, IconX } from '@tabler/icons-react';
import { List } from "@/components/sub/WebApp/List";
import { getAllCountry } from "@/functions/pais";
import { getAllServices } from "@/functions/servicos";
import { ListServer } from "./ListServer";




export const Container = ({
    list,
    subTitle,
    select,
    setSelect,
    operator
  }: {
    subTitle: string;
    select?: { title: string; valor: number; numberDispobilize: number; id: string } | null;
    setSelect: React.Dispatch<React.SetStateAction<any>>
    list: any;
    operator?: any
  }) => {
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
              <button className="flex items-center justify-center gap-2 h-8 min-w-8 rounded-xl border-red-500 border-[1px] text-black">
                 <IconAlertHexagon className="w-5 h-5" />
              </button>
              <span className="text-lg font-bold min-w-8 h-8 rounded-full text-center bg-white ">I</span>
              <span className="text-lg font-bold w-auto text-center text-black font-roboto ">
                Selecione um pais e um serviço
              </span>
          </div>
        </div>
      )
    }
  
    return (
      <div className="flex flex-col gap-2  ">
        <span className="text-2xl w-full text-start px-5 text-black font-ubuntu ">{subTitle}</span>
        { 
          select ?
            <div className="flex w-full bg-light rounded-lg h-10 items-center justify-start px-5 gap-5 ">
              <button onClick={() => setSelect(null)} className="flex items-center justify-center gap-2 h-8 min-w-8 rounded-xl border-red-500 border-[1px] text-black">
                 <IconX className="w-5 h-5" />
              </button>
              <span className="text-lg font-bold min-w-8 h-8 rounded-full text-center bg-white ">I</span>
              <span className="text-lg font-bold w-auto text-center text-black font-roboto ">{select.title}</span>
            </div>
          :
          <>
            <Input type="text" placeholder="Pesquisar" size="lg" classNameInput="w-full h-9" register={register("filter")} />
            <div className="h-96 shadow-inner shadow-black py-2 w-full my-2 overflow-x-auto scroll-smooth rounded-lg p-1 text-black font-ubuntu flex flex-col gap-4 ">
                <ListServer listLoading={list} filter={filter} favorites={favorites} setFavorites={setFavorites} setSelect={setSelect} />
            </div>
          </>
        }
      </div>
    );
  };
  