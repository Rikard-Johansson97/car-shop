import Banner from "@/components/Banner/Banner";
import { urlFor } from "@/lib/imageBuilder";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../lib/sanity.client";

interface Car {}

const query = groq`*[_type == "car"]`;

export default async function Home() {
  const car = await client.fetch(query);
  console.log();
  return (
    <main>
      <div></div>
    </main>
  );
}
