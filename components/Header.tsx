import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Header({ darkMode, setDarkMode }: any) {
  return (
    <nav className="py-10 mb-12 md:mb-6 flex justify-between px-2 max-w-7xl  mx-auto">
      <Link href="/">
        <h1 className="cursor-pointer text-xl font-semibold font-burtons">
          developedByMahi
        </h1>
      </Link>
      <ul className="flex items-center gap-8">
        <li className="px-4 py-2 rounded hover:bg-gray-100">
          <Link href="/powerOutrage">
            <a className="font-semibold">Power outrage</a>
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
  );
}
