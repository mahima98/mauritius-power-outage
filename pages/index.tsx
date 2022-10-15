import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import myPic from "../public/mypic.png";
import design1 from "../public/img-1.jpg";
import design2 from "../public/img-2.jpg";
import design3 from "../public/img-3.jpg";
import design4 from "../public/img-4.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <head>
        <title>Mahima Ramgolam</title>
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/og"
        />
      </head>
      <main className="w-full px-8 dark:bg-gray-600">
        <section className="flex flex-col items-center justify-center mx-auto max-w-7xl">
          <div className="p-10 prose text-center ">
            <h2 className="mb-4 text-4xl font-medium tracking-tight text-teal-600 dark:text-black md:mb-2">
              Mahima Ramgolam
            </h2>
            <h3 className="md:text-xl ">Frontend Developer.</h3>
            <p className="pt-0 leading-6 text-gray-800 dark:text-black md:pt-4">
              Coding for fun and work. Building websites as I learn new tech to
              keep up with the trend and updates.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12 py-10 text-5xl text-gray-600 dark:text-black">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative flex items-center justify-center mx-auto mt-12 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 to-teal-50 w-60 md:w-80 h-60 md:h-80">
            <Image
              src={myPic}
              alt="profile pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl">
          <div className="py-12 prose service-offer dark:text-black">
            <h3 className="text-3xl tracking-tight text-gray-600 dark:text-black">
              Service I offer
            </h3>
            <p>
              Since the beginning of my journey, I started developing as a
              freelancer. Then joined{" "}
              <span className="text-teal-500">companies</span> to get the start
              off properly and collaborated with talented people to create
              digital products.
            </p>

            <p>
              Also in my free time, I contribute to Open source projects. Team
              member of{" "}
              <span className="text-teal-500">Front-end Coders Mauritius</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center w-full gap-8 py-10 ">
            <div className="flex flex-col items-center justify-center px-6 py-10 prose text-center rounded shadow-lg dark:bg-white">
              <BsFillMoonStarsFill className="text-2xl text-center cursor-pointer" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-sm text-teal-500">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 prose text-center rounded shadow-lg dark:bg-white">
              <BsFillMoonStarsFill className="text-2xl text-center cursor-pointer" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-sm text-teal-500">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-10 prose text-center rounded shadow-lg dark:bg-white">
              <BsFillMoonStarsFill className="text-2xl text-center cursor-pointer" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-sm text-teal-500">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
          </div>
        </section>

        <section className="py-16 mx-auto max-w-7xl">
          <div className="prose dark:text-black">
            <h3 className="text-3xl tracking-tight text-gray-600 dark:text-black">
              Portfolio
            </h3>
            <p>
              Since the beginning of my journey, I started developing as a
              freelancer. Then joined{" "}
              <span className="text-teal-500">companies</span> to get the start
              off properly and collaborated with talented people to create
              digital products.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
            <div className="flex-1 basis-1/3 md:basis-1/4">
              <Image
                src={design1}
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="flex-1 basis-1/3 md:basis-1/4">
              <Image
                src={design2}
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="flex-1 basis-1/3 md:basis-1/4">
              <Image
                src={design3}
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="flex-1 basis-1/3 md:basis-1/4">
              <Image
                src={design4}
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="flex-1 basis-1/3 md:basis-1/4">
              <Image
                src={design4}
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
