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
      "p-5 flex flex-col min-h-[90svh] w-full text-tertinary items-start justify-start rounded-lg",
      className
    )}>
      {children}
    </section>
  );
}