import { Button } from "./_Button";

interface Pokemon {
  name: string;
  url: string;
}

interface HomeProps {
  initialData: Pokemon[];
}
export default function Home({ initialData }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-pink-300 hover:text-pink-600">Je suis un essai avec une API externe</p>
      <Button initialData={initialData} />
    </main>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/");
  const initialData = await response.json();

    return {
    props: {
        initialData: initialData.results
        }
    };
}
