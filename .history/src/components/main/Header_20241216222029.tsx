import React from "react";
import { Button } from "./Button";


export default function Header() {
  return (
    <header className="h-16 bg-blue-800 max-w-screen-2xl m-auto sticky top-0 items-center justify-between  flex rounded-b-lg px-5 z-[9999] ">
        <span className="text-white text-lg font-bold"></span>
        <nav className="flex gap-4">
            <a href="#" className="text-white">Inicio</a>
            <a href="#" className="text-white">FAQ</a>
            <a href="#" className="text-white">Contato</a>
        </nav>
        <div className="container flex justify-between items-center w-1/4 gap-5">
            <Button type="button" size="sm" className="text-white" isLoading={false} bgColor="none">Login</Button>
            <Button type="button" size="sm" className="text-white" isLoading={false} bgColor="primary">
                Register
            </Button>
        </div>
    </header>
  );
}