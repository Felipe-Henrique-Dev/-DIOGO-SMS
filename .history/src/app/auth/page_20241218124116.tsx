/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Button } from "@/components/main/Button";
import { Input } from "@/components/main/Input";
import Section from "@/components/main/Section";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  const [sectionSelected, setSectionSelected] = useState("login");
  return (
    <Section className="flex flex-col items-center justify-start pt-40 h-[90svh] px-60 gap-10 sticky top-[4.5rem] ">
      <div 
        className="text-sm absolute bottom-5 right-5 cursor-pointer " 
        onClick={() => {
          setSectionSelected(sectionSelected === "login" ? "register" : "login");
        }}
      >
        {
          sectionSelected === 'login' ? 
            "Não tem uma conta? Click aqui" :
            "Já tem uma conta? Click aqui"
        }
        {
          sectionSelected === 'login' ? 
            <b className="text-blue-500 hover:scale-110 hover:border-b-[1px] border-blue-500 cursor-pointer "> Registrar</b> :
            <b className="text-blue-500 hover:scale-110"> Entrar</b>
        }
      </div>

      <h1 className="text-4xl font-bold text-center">
        {
          sectionSelected === "login" ? "Entrar" : "Registrar"
        }
      </h1>
      {
        sectionSelected === "login" ? <Login /> : <Register />
      }
      <div className="flex justify-center items-center gap-2 w-full">
        <hr className="w-1/2 h-px border-black rounded-full " />
        <span>OU</span>
        <hr className="w-1/2 h-px border-black rounded-full" />
      </div>
      <Button
        type="button"
        onClick={() => {
          setSectionSelected("register");
        }}
        size="sm"
        isLoading={false}
        className="flex items-center justify-center gap-5"
        bgColor="none"
      >
        <Image className="size-6" src="/icons/icon-google.svg" alt="Google" width={20} height={20} />
        Entrar com Google
      </Button>

    </Section>
  );
}





const Register = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  gap-5 ">
      <Input
        type="email"
        placeholder="Email"
        bgColor="none"
        />
      <Input
        type="password"
        placeholder="Senha"
        bgColor="none"
        />
      <Input
        type="password"
        placeholder="Confirmar Senha"
        bgColor="none"
        />
      <Button
          type="submit"
          onClick={() => {}}
          size="md"
          isLoading={false}
        >
        Registrar
      </Button>
      <span className="text-xs w-1/2 text-center">
        Se Registrando você concorda com nossa <b className="text-blue-500 hover:scale-110 hover:border-b-[1px] border-blue-500 cursor-pointer ">Política de Dados</b> e <b className="text-blue-500 hover:scale-110 hover:border-b-[1px] border-blue-500 cursor-pointer ">Política de Cookies</b>.
      </span>
    </div>
  );
};


const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  gap-5 ">
      <Input
        type="email"
        placeholder="Email"
        bgColor="none"
        />
      <Input
        type="password"
        placeholder="Senha"
        bgColor="none"
        />
      <Button
          type="submit"
          onClick={() => {}}
          size="sm"
          isLoading={false}
        >
        Entrar
      </Button>
      <span className="text-xs w-1/2 text-center">
        Esqueceu sua senha? <b className="text-blue-500 hover:scale-110 hover:border-b-[1px] border-blue-500 cursor-pointer ">Recuperar Senha</b>
      </span>
    </div>
  );
};