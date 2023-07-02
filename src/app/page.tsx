'use client'
import Home from "./pages";

interface Pokemon {
  name: string;
  url: string;
}

interface HomeProps {
  initialData: Pokemon[];
}
export default function Page({ initialData }: HomeProps) {
  return (
    <Home initialData={[]} />
  )
}
