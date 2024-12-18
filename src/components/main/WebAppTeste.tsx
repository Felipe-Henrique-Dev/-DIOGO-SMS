/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense, use, useEffect, useMemo } from "react";


export const WebAppTeste = ({services , countries} : {services: any, countries: any}) => {
  const useServices = use(services)
  const useCountries = use(countries)
  console.log(useServices, useCountries)
  
  return (
    <>
      
    </>
  )
}
