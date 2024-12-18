import { cn } from "@/lib/utils";
import React from "react";

export default function Section({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={cn(
      "p-5 flex flex-col min-h-[90svh] bg-background_secondary w-full text-tertinary items-start justify-start rounded-lg shadow-lg shadow-black",
      className
    )}>
      {children}
    </section>
  );
}