import { cn } from "@/lib/utils";
import React from "react";


export const H1 = ({ children, className }: { children: string, className?:string }) => {
  return (
    <h1 className={cn("text-5xl font-bold", className)}>
        {children}
    </h1>
  );
}