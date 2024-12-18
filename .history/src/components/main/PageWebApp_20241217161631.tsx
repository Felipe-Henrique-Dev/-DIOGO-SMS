/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
import { getAllServices } from "@/functions/servicos";
import { getAllCountry } from "@/functions/pais";

export const PageWebApp = () => {
  
  return (
    
    <WebApp />
  );
}
