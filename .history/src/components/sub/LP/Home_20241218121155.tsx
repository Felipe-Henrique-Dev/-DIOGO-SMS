import { Button } from "@/components/main/Button";
import { H1 } from "@/components/main/H1";
import Section from "@/components/main/Section";
import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <Section className=" text-black items-center py-20 flex-row gap-5 relative justify-end" >
        <Image src="/mochups/header-img.png" width={600} height={600} alt="hero" className="absolute -left-14 " />
        <div className="flex flex-col items-center w-3/5 z-10 backdrop-blur-sm relative p-2 py-5 rounded-xl overflow-hidden">
            <span className="absolute top-0 left-0 right-0 bg-gradient-to-r h-full w-1/2 from-background_secondary to-transparent to-90% -z-10"></span>
            <H1 className="text-secondary" >Conecte-se Sem Fronteiras com Números Virtuais</H1>
            <div className="flex gap-4 mt-8">
                <span className="text-lg">SMS Instantâneos</span>
                <span className="text-lg border-x-2 border-secondary px-5 ">Privacidade Total</span>
                <span className="text-lg">Sem Complicações</span>
            </div>
            <p className="mt-8 text-base">
                Dê o primeiro passo para uma comunicação ilimitada. Nosso serviço de números virtuais facilita a verificação das suas contas de maneira rápida e segura. Seja para WhatsApp, Telegram ou qualquer outra plataforma, disponibilizamos uma ampla variedade de números internacionais. Simples de usar, seguro e sempre sob seu controle.
            </p>
            <Button className="mt-8" type={"button"} isLoading={false} >
                Comece Agora
            </Button>
        </div>
    </Section>
  );
};
