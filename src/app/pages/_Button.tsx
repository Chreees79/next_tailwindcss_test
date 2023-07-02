import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export const Button = ({ initialData }: { initialData: Pokemon[] }) => {
  const [data, setData] = useState<Pokemon[]>(initialData);

    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/");
        const newData = await response.json();
        setData(newData.results);
        console.log(data);
    };

    const deleteAll = () => {
        setData([]);
    };
      
  return (
    <>
        <div className="flex-row">
            <button className="border-solid border-2 border-sky-500 py-1 px-4 hover:animate-pulse mt-5 mr-5 rounded-3xl" onClick={fetchData}>API</button>
            <button className="border-solid border-2 border-sky-500 py-1 px-4 hover:animate-pulse mt-5 rounded-3xl" onClick={deleteAll}>DELETE ALL</button>
        </div>
      <div className="mt-10 text-center">
        {data && data.map((item, index) => 
<a key={index} href={item.url} className="block max-w-sm p-14 mb-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pokemon n. {index + 1}</h5>
    <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-400">{item.name}</p>
</a>
        )}
      </div>
    </>
  )
}
