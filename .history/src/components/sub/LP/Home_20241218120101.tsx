import { H1 } from "@/components/main/H1";
import Section from "@/components/main/Section";
import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <Section className=" text-black items-center py-20 flex-row gap-5 relative" >
        <Image src="/mochups/header-img.png" width={500} height={500} alt="hero" className="absolute -left-14 " />
        <div className="flex flex-col items-center">
            <H1>Conecte-se Sem Fronteiras com Números Virtuais</H1>
            <div className="flex gap-8 mt-8">
                <span className="text-lg">SMS Instantâneos</span>
                <span className="text-lg border-x-2 px-5 ">Privacidade Total</span>
                <span className="text-lg">Sem Complicações</span>
            </div>
            <p className="mt-8 text-base">
                Dê o primeiro passo para uma comunicação ilimitada. Nosso serviço de números virtuais facilita a verificação das suas contas de maneira rápida e segura. Seja para WhatsApp, Telegram ou qualquer outra plataforma, disponibilizamos uma ampla variedade de números internacionais. Simples de usar, seguro e sempre sob seu controle.
            </p>
            <button className="mt-8 bg-primary text-white py-2 px-4 rounded-lg">Comece Agora</button>
        </div>
    </Section>
  );
};
