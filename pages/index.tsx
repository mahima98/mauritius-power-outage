import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import myPic from "../public/mypic.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mahima ramgolam Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between px-2">
            <h1 className="text-xl font-semibold font-burtons">
              developedByMahi
            </h1>
            <ul className="flex items-center gap-8">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 py-2 rounded"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center prose">
            <h2 className="text-4xl text-teal-600">Mahima Ramgolam</h2>
            <h3>Frontend Developer.</h3>
            <p className="text-gray-800">
              Coding for fun and work. Building websites as I learn new tech to
              keep up with the trend and updates.
            </p>
          </div>
          <div className="text-5xl flex gap-12 justify-center items-center text-gray-800">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto mt-12 bg-gradient-to-b from-teal-500 to-teal-50 rounded-full w-60 h-60 flex justify-center items-center overflow-hidden">
            <Image
              src={myPic}
              alt="profile pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div className="prose py-12">
            <h3 className="text-3xl tracking-tight">Service I offer</h3>
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

            <div className="rounded px-6 py-10 text-center prose shadow-lg flex flex-col justify-center items-center">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl text-center" />
              <h3>Designing tool</h3>
              <p>Creating elegants design</p>
              <h4 className="text-teal-400">Design tools : use</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
