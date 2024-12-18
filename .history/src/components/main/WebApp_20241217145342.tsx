/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense, use, useEffect, useMemo } from "react";
import { Input } from "./Input";
import { useForm } from "react-hook-form"
import Image from "next/image";
import {  IconAlertHexagon, IconX } from '@tabler/icons-react';
import { List } from "../sub/List";
import { getAllServices } from "@/functions/servicos";
import { SkeletonList } from "../sub/Skeleton_list";
import { getAllCountry } from "@/functions/pais";


export const WebApp = () => {
  const services =  getAllServices()
  const countries =  getAllCountry()
  const [selectService, setSelectService] = React.useState(null) as any;
  const [selectCountry, setSelectCountry] = React.useState(null) as any;
  const [selectOperator, setSelectOperator] = React.useState(null) as any;
  const [operatorFilter, setOperatorFilter] = React.useState('none') as any;

  console.log(selectService, selectCountry, selectOperator);

  useEffect(() => {
    if (selectService && selectCountry) {
      setOperatorFilter({
        selectCountry: selectCountry,
        selectService: selectService
      })
    }
  }, [selectService, selectCountry])


  return (
    <aside className="min-w-[25rem] min-h-[90svh] shadow-lg shadow-black bg-background_secondary text-pri sticky left-0 top-[4.5rem] rounded-lg flex flex-col p-2 gap-5  pt-14 z-[999]">
      <Image src="/logo.webp" alt="Logo" width={110} height={110} className="rounded-2xl absolute -top-16 transform -translate-x-1/2 left-1/2 z-[99] border-4 border-background " />
      <Container subTitle="1. Selecione o serviço" select={selectService} setSelect={setSelectService} list={countries} />
      <Container subTitle="2. Selecione o pais" select={selectCountry} setSelect={setSelectCountry} list={services} />
      <Container subTitle="3. Selecione a operadora" select={selectOperator} setSelect={setSelectOperator} list={operatorFilter} operator={operatorFilter} />
    </aside>
  );
}


const Container = ({
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
          <div className="h-96 shadow-inner shadow-black py-2 w-full my-2 overflow-x-auto scroll-smooth rounded-lg p-1 text-black font-ubuntu ">
            <Suspense fallback={<SkeletonList />}>
              <List list={list} filter={filter} favorites={favorites} setFavorites={setFavorites} setSelect={setSelect} />
            </Suspense>
          </div>
        </>
      }
    </div>
  );
};

