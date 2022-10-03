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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mahima ramgolam Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 w-full dark:bg-gray-600">
        <section className="flex flex-col justify-center items-center max-w-7xl mx-auto">
          <nav className="py-10 mb-12 md:mb-6 flex justify-between px-2 w-full">
            <h1 className="text-xl font-semibold font-burtons">
              developedByMahi
            </h1>
            <ul className="flex items-center gap-8">
              {!darkMode && (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
              )}
              {darkMode && (
                <li className="dark:text-white">
                  <HiOutlineLightBulb
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl"
                  />
                </li>
              )}

              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white dark:text-gray-800 px-4 py-2 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center prose ">
            <h2 className="text-4xl text-teal-600 dark:text-black font-medium tracking-tight mb-4 md:mb-2">
              Mahima Ramgolam
            </h2>
            <h3 className="md:text-xl ">Frontend Developer.</h3>
            <p className="text-gray-800 dark:text-black leading-6 pt-0 md:pt-4">
              Coding for fun and work. Building websites as I learn new tech to
              keep up with the trend and updates.
            </p>
          </div>
          <div className="text-5xl flex gap-12 py-10 justify-center items-center text-gray-600 dark:text-black">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto mt-12 bg-gradient-to-b from-teal-500 to-teal-50 rounded-full w-60 md:w-80 h-60 md:h-80 flex justify-center items-center overflow-hidden">
            <Image
              src={myPic}
              alt="profile pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="service-offer prose py-12  dark:text-black">
            <h3 className="text-3xl text-gray-600  dark:text-black tracking-tight">
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

          <div className="flex flex-wrap gap-8 justify-center items-center w-full py-10 ">
            <div className="rounded px-6 py-10 text-center prose shadow-lg flex flex-col justify-center items-center dark:bg-white">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl text-center" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-teal-500 text-sm">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
            <div className="rounded px-6 py-10 text-center prose shadow-lg flex flex-col justify-center items-center dark:bg-white">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl text-center" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-teal-500 text-sm">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
            <div className="rounded px-6 py-10 text-center prose shadow-lg flex flex-col justify-center items-center dark:bg-white">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl text-center" />
              <h3>Designing tool</h3>
              <p className="m-0 text-sm text-gray-800 font-medium max-w-[350px]">
                Creating elegants design suited for for your needs following
                core design theory
              </p>
              <h4 className="text-teal-500 text-sm">Design tools | use</h4>
              <p className="m-0">Figma</p>
              <p className="m-0">Photoshop</p>
              <p className="m-0">Adobe XD</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16">
          <div className="prose  dark:text-black">
            <h3 className="text-3xl text-gray-600  dark:text-black tracking-tight">
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
            <div className="basis-1/3 md:basis-1/4 flex-1">
              <Image
                src={design1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 md:basis-1/4 flex-1">
              <Image
                src={design2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 md:basis-1/4 flex-1">
              <Image
                src={design3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 md:basis-1/4 flex-1">
              <Image
                src={design4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 md:basis-1/4 flex-1">
              <Image
                src={design4}
                className="rounded-lg object-cover"
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
    </div>
  );
};

export default Home;
