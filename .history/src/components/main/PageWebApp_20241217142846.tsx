/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
import { getAllServices } from "@/functions/servicos";
export const PageWebApp = () => {
  const services =  getAllServices()
  
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WebApp services={services} />
    </Suspense>
  );
}
