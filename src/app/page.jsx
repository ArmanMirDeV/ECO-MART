import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen max-w-7xl mx-auto items-center justify-center bg-zinc-50 font-sans rounded-2xl mt-2 ">

      <Banner />
      <Features />
    </div>
  );
}
