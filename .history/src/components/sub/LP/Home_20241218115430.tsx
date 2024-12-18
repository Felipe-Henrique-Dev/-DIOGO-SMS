import { H1 } from "@/components/main/H1";
import Section from "@/components/main/Section";
import React from "react";

export const Home = () => {
  return (
    <Section className=" text-black items-center py-20 gap-20" >
        <H1>Conecte-se Sem Fronteiras com Números Virtuais</H1>
        <div className="flex gap-8">
            <span className="text-lg">SMS Instantâneos</span>
            <span className="text-lg border-x-2 px-5 ">Privacidade Total</span>
            <span className="text-lg">Sem Complicações</span>
        </div>
        <p>
            Dê o primeiro passo para uma comunicação ilimitada. Nosso serviço de números virtuais facilita a verificação das suas contas de maneira rápida e segura. Seja para WhatsApp, Telegram ou qualquer outra plataforma, disponibilizamos uma ampla variedade de números internacionais. Simples de usar, seguro e sempre sob seu controle.
        </p>
    </Section>
  );
};
