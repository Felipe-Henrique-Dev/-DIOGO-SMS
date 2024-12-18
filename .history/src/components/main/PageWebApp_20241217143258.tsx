/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
import { getAllServices } from "@/functions/servicos";
import { getAllCountry } from "@/functions/pais";
export const PageWebApp = () => {
  const services =  getAllServices()
  const countries =  getAllCountry()
  
  return (
    <WebApp services={services} countries={countries} />
  );
}
