import Banner from "@/components/Banner/Banner";
import Slider from "@/components/Slider";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const query = groq`*[_type == "car"]`;

export default async function Home() {
  const car: Car[] = await client.fetch(query);

  return (
    <main className='max-w-[1720px] mx-auto'>
      <Banner image={car[0].image} />
      <Slider images={car[0].showcase} />
    </main>
  );
}
