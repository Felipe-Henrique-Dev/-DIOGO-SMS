import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main/Header";
import Main from "@/components/main/Main";
import WebApp from "@/components/main/WebApp";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        <Main>
          <Suspense fallback={<div>Carregando...</div>}>
            <WebApp />
          </Suspense>
          {children}
        </Main>
      </body>
    </html>
  );
}
