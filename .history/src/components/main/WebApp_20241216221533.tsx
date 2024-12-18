'use client'
import React from "react";
import { Input } from "./Input";
import { useForm } from "react-hook-form"
import Image from "next/image";
export default function WebApp() {
  const [selectService, setSelectService] = React.useState<{ title: string; valor: number; numberDispobilize: number; id: string } | null>(null);
  const [selectCountry, setSelectCountry] = React.useState<{ title: string; valor: number; numberDispobilize: number; id: string } | null>(null);
  const [selectOperator, setSelectOperator] = React.useState<{ title: string; valor: number; numberDispobilize: number; id: string } | null>(null);

  return (
    <aside className="min-w-[25rem] min-h-[90svh] bg-background_secondary text-pri sticky left-0 top-[4.5rem] z-50 rounded-lg flex flex-col p-2 gap-5  pt-16">
      <Image src="/logo.webp" alt="Logo" width={100} height={100} className="rounded-2xl absolute top-0 transform -translate-x-1/2 left-1/2" />
      <Container subTitle="1. Selecione o serviço" list={list} select={selectService} setSelect={setSelectService} />
      <Container subTitle="2. Selecione o pais" list={list} select={selectCountry} setSelect={setSelectCountry} />
      <Container subTitle="3. Selecione a operadora" list={list} select={selectOperator} setSelect={setSelectOperator} />
    </aside>
  );
}


const Container = ({
  list,
  subTitle,
  select,
  setSelect
}: {
  subTitle: string;
  select?: { title: string; valor: number; numberDispobilize: number; id: string } | null;
  setSelect: React.Dispatch<React.SetStateAction<{ title: string; valor: number; numberDispobilize: number; id: string } | null>>;
  list: { title: string; valor: number; numberDispobilize: number; id: string }[];
}) => {
  const { register, watch } = useForm();
  const filter = (watch("filter") || "").toLowerCase();
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
    setLoading(false);
  }, []);

  const setFavoriteInStorage = (item: string) => {
    const newFavorites = favorites.includes(item)
      ? favorites.filter(favorite => favorite !== item)
      : [...favorites, item];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  // Primeiro filtrar e ordenar a lista antes do map
  const filteredAndSortedList = React.useMemo(() => {
    return list
      .filter(item => item.title.toLowerCase().includes(filter))
      .sort((a, b) => {
        const aFav = favorites.includes(a.id);
        const bFav = favorites.includes(b.id);
        if (aFav && !bFav) return -1;
        if (!aFav && bFav) return 1;
        return 0;
      });
  }, [list, filter, favorites]);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col gap-2  ">
      <span className="text-lg font-bold w-full text-start px-5">{subTitle}</span>
      { 
        select ?
          <div className="flex w-full bg-slate-300 rounded-lg h-10 items-center justify-start px-5 gap-5 ">
            <button onClick={() => setSelect(null)} className="flex items-center justify-center gap-2 h-8 min-w-8 rounded-xl border-red-500 border-[1px] text-black">X</button>
            <span className="text-lg font-bold min-w-8 h-8 rounded-full text-center bg-white ">I</span>
            <span className="text-lg font-bold w-auto text-center">{select.title}</span>
          </div>
        :
        <>
          <Input type="text" placeholder="Pesquisar" size="lg" register={register("filter")} />
          <div className="h-96 bg-gray-500 w-full my-2 overflow-x-auto scroll-smooth rounded-lg p-1 ">
            {filteredAndSortedList.map((item) => (
              <div className="bg-gray-500 w-full flex items-center justify-start gap-2" key={item.id}>
                <Stars
                  stars={favorites.includes(item.id)}
                  setFavorite={() => setFavoriteInStorage(item.id)}
                />
                <button className="flex flex-col" onClick={() => setSelect(item)}>
                  <span className="text-lg font-bold w-full text-center">{item.title}</span>
                </button>
              </div>
            ))}
          </div>
        </>
      }
    </div>
  );
};



const list = [
  {
    id: "1",
    title: "Serviço 1",
    valor: 10.00,
    numberDispobilize: 6000,
  },
  {
    id: "2",
    title: "Serviço 2",
    valor: 20.00,
    numberDispobilize: 5000,
  },
  {
    id: "3",
    title: "Serviço 3",
    valor: 30.00,
    numberDispobilize: 4000,
  },
  {
    id: "4",
    title: "Serviço 4",
    valor: 40.00,
    numberDispobilize: 3000,
  },
  {
    id: "5",
    title: "Serviço 5",
    valor: 50.00,
    numberDispobilize: 2000,
  },
  {
    id: "6",
    title: "Serviço 6",
    valor: 60.00,
    numberDispobilize: 1000,
  },
  {
    id: "7",
    title: "Serviço 7",
    valor: 70.00,
    numberDispobilize: 900,
  },
  {
    id: "8",
    title: "Serviço 8",
    valor: 80.00,
    numberDispobilize: 800,
  },
  {
    id: "9",
    title: "Serviço 9",
    valor: 90.00,
    numberDispobilize: 700,
  },
  {
    id: "10",
    title: "Serviço 10",
    valor: 100.00,
    numberDispobilize: 600,
  },
  {
    id: "11",
    title: "Serviço 11",
    valor: 110.00,
    numberDispobilize: 500,
  },
  {
    id: "12",
    title: "Serviço 12",
    valor: 120.00,
    numberDispobilize: 400,
  },
  {
    id: "13",
    title: "Serviço 13",
    valor: 130.00,
    numberDispobilize: 300,
  },
  {
    id: "14",
    title: "Serviço 14",
    valor: 140.00,
    numberDispobilize: 200,
  },
  {
    id: "15",
    title: "Serviço 15",
    valor: 150.00,
    numberDispobilize: 100,
  }
];

const Stars = ({stars, setFavorite} : {stars: boolean, setFavorite: () => void}) => {
  return (
      <>
          {
              !stars?
              <svg width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setFavorite} className="cursor-pointer" >
                  <path d="M6.49956 9.51326L9.26623 11.1866C9.77289 11.4933 10.3929 11.0399 10.2596 10.4666L9.52623 7.31992L11.9729 5.19993C12.4196 4.81326 12.1796 4.07993 11.5929 4.03326L8.37289 3.75993L7.11289 0.786592C6.88623 0.246592 6.11289 0.246592 5.88623 0.786592L4.62623 3.75326L1.40623 4.02659C0.81956 4.07326 0.57956 4.80659 1.02623 5.19326L3.47289 7.31326L2.73956 10.4599C2.60623 11.0333 3.22623 11.4866 3.73289 11.1799L6.49956 9.51326Z" fill="none" stroke="#EFC900" strokeWidth="0.5"/>
              </svg>
              : 
              <svg width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setFavorite} className="cursor-pointer">
                  <path d="M6.49956 9.51326L9.26623 11.1866C9.77289 11.4933 10.3929 11.0399 10.2596 10.4666L9.52623 7.31992L11.9729 5.19993C12.4196 4.81326 12.1796 4.07993 11.5929 4.03326L8.37289 3.75993L7.11289 0.786592C6.88623 0.246592 6.11289 0.246592 5.88623 0.786592L4.62623 3.75326L1.40623 4.02659C0.81956 4.07326 0.57956 4.80659 1.02623 5.19326L3.47289 7.31326L2.73956 10.4599C2.60623 11.0333 3.22623 11.4866 3.73289 11.1799L6.49956 9.51326Z" fill="#EFC900"/>
              </svg>
          }
      </>
  );
}