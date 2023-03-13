import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import illustrationElectricity from "../public/svg/electricity.svg";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // const myPic = ({ src, width, quality }) => {
  //   return `https://mahima-portfolio.vercel.app/${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <>
      <Head>
        <title>Mahima Ramgolam</title>
        <meta
          property="og:image"
          content="https://mahima-portfolio.vercel.app/api/og"
        />
      </Head>
      <main className="flex flex-col gap-24 justify-center items-center w-full h-[90vh]  px-8 dark:bg-gray-600">
        <h1 className="text-4xl font-medium">Mauritius power outrages</h1>

        <div className="w-96 h-96">
          <Image
            src={illustrationElectricity}
            className="object-cover rounded-lg w-64 h-64"
            width={1839}
            height={1839}
            layout="responsive"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
