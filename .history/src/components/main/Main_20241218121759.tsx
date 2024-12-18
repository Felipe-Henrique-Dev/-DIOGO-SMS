import React from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container max-w-screen-2xl mx-auto flex pt-2 gap-2 items-start ">
      {children}
    </main>
  );
}