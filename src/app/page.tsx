import Banner from "@/components/Banner/Banner";
import Slider from "@/components/Slider";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const query = groq`*[_type == "car"]`;

export default async function Home() {
  const car: Car[] = await client.fetch(query);

  return (
    <main className='max-w-[1400px] mx-auto'>
      <Banner car={car[0]} />
      <Slider images={car[0].showcase} />
    </main>
  );
}
