'use client'
import { useState, useEffect } from "react";
import  Image  from "next/image";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  stats:{
    HP: string;
  }
}

export const Button = () => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20");
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteAll = () => {
    setData([]);
  };

  return (
    <>
      <div className="flex">
        <button className=" bg-sky-500 hover:bg-sky-700 py-1 px-4  mt-5 mr-5 rounded-3xl" onClick={deleteAll}>
          DELETE ALL
        </button>
        <button className=" bg-sky-500 hover:bg-sky-700 py-1 px-4  mt-5 rounded-3xl" onClick={fetchData}>
          POKEMON LIST
        </button>
      </div>
      <div className="mt-10 text-center flex flex-wrap justify-center">
        {data.map((item) => (
          <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 hover:scale-110">
            <Image src={item.image} alt="" width={300} height={200} className="rounded-t-lg" />
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nom de Pokémon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.name}</p>
                  <p className="mb-3 font-normal text-gray-600 dark:text-gray-300">Statistiques</p>
                  <p className="mb-3 font-normal text-gray-600 dark:text-gray-300">HP: {item.stats.HP}</p>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

