/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Suspense } from "react";
import { WebApp } from "./WebApp";
export const PageWebApp = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <WebApp />
    </Suspense>
  );
}
