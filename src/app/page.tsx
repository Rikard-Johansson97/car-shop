import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm";
import EngineSpecs from "@/components/EngineSpecs";
import FeatureLayout from "@/components/Features/FeatureLayout";
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
      <FeatureLayout car={car[0]} />
      <EngineSpecs engine={car[0].engine} />
      <ContactForm />
    </main>
  );
}
