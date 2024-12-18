/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense, use, useEffect, useMemo } from "react";
import { Input } from "./Input";
import { set, useForm } from "react-hook-form"
import Image from "next/image";
import {  IconAlertHexagon, IconX } from '@tabler/icons-react';
import { List } from "../sub/WebApp/List";
import { getAllServices } from "@/functions/servicos";
import { SkeletonList } from "../sub/WebApp/Skeleton_list";
import { getAllCountry } from "@/functions/pais";
import { Container } from "../sub/WebApp/Container";

export const WebApp = ( { country, service }: { country: any, service: any }) => {
  
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
    <aside className="min-w-[25rem] min-h-[90svh] shadow-sm shadow-black  text-pri sticky backdrop-blur-sm left-0 top-[4.5rem] rounded-lg flex flex-col p-2 gap-5  pt-14 z-[999]">
      <span className="bg-background_secondary size-full -z-10 absolute top-0 left-0 right-0 opacity-80 rounded-lg "></span>
      <Image src="/logo.webp" alt="Logo" width={110} height={110} className="rounded-2xl absolute -top-16 transform -translate-x-1/2 left-1/2 z-[99] border-4 border-background_secondary shadow-inner shadow-black p-1 " />
      <Container subTitle="1. Selecione o serviço" select={selectService} setSelect={setSelectService} type={'service'} country={country} service={service} filterSelect={selectCountry} />
      <Container subTitle="2. Selecione o pais" select={selectCountry} setSelect={setSelectCountry} type={'country'} country={country} service={service} filterSelect={selectService} />
      <Container subTitle="3. Selecione a operadora" select={selectOperator} setSelect={setSelectOperator} type={'operator'} country={country} service={service} operator={operatorFilter} />
    
    </aside>
  );
}


