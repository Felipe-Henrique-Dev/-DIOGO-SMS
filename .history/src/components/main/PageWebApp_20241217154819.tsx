import React, { Suspense } from "react";
import { WebApp } from "./WebApp";

export const PageWebApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebApp  />
    </Suspense>
  );
}
