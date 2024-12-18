/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
import { getAllServices } from "@/functions/servicos";
import { getAllCountry } from "@/functions/pais";
import { ListServer } from "../sub/WebApp/ListServer";

// interface ListProps {
//     filter: string;
//     favorites: string[];
//     setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
//     setSelect: React.Dispatch<React.SetStateAction<string[]>>;
//     listLoading: string
// }

export const PageWebApp = () => {
  
  return (
    <WebApp />
  );
}
