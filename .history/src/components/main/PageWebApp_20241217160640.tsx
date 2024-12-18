/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
import { getAllServices } from "@/functions/servicos";
import { getAllCountry } from "@/functions/pais";
import { WebAppTeste } from "./WebAppTeste";

export const PageWebApp = () => {
  
  const services =  getAllServices()
  const countries =  getAllCountry()
  return (
    // <WebApp  />
    <Suspense fallback={<div>Carregando...</div>}>
      <WebAppTeste services={services} countries={countries} />
    </Suspense>
  );
}
