import Section from "@/components/main/Section";
import Image from "next/image";

export default function Home() {
  return (
    <Section>
      <h1 className="text-4xl font-bold text-center">Welcome to Next.js!</h1>
      <p className="text-center">
        Get started by editing <code>pages/index.js</code>
      </p>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </Section>
  );
}
