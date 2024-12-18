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

export const WebApp = () => {

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
      <Suspense fallback={<SkeletonList />}>
        <Container subTitle="1. Selecione o serviço" select={selectService} setSelect={setSelectService} list={'countries'} />
      </Suspense>
      {/* <Container subTitle="2. Selecione o pais" select={selectCountry} setSelect={setSelectCountry} list={'services'} />
      <Container subTitle="3. Selecione a operadora" select={selectOperator} setSelect={setSelectOperator} list={operatorFilter} operator={operatorFilter} /> */}
    
    </aside>
  );
}


