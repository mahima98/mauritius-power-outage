import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Header({ darkMode, setDarkMode }: any) {
  return (
    <nav className=" dark:bg-gray-600 ">
      <div className="py-6 px-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between max-w-7xl mx-auto dark:border-b border-gray-500">
        <Link href="/">
          <h1 className="flex justify-center items-center rsor-pointer text-xl font-semibold font-burtons cursor-pointer">
            developedByMahi
          </h1>
        </Link>
        <ul className="flex justify-center items-center gap-8">
          <li className="md:px-4 px-2 py-2 rounded hover:bg-gray-100">
            <Link href="/powerOutrage">
              <a className="font-semibold text-sm">Power outrage</a>
            </Link>
          </li>
          <li className="md:px-4 px-2 py-2 rounded hover:bg-gray-100">
            <Link href="/powerOutrage2">
              <a className="font-semibold text-sm">Power outrage (SSR)</a>
            </Link>
          </li>
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
                className="cursor-pointer text-lg md:text-3xl"
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
      </div>
    </nav>
  );
}
