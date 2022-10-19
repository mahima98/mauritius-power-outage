import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Header({ darkMode, setDarkMode }: any) {
  return (
    <nav className=" dark:bg-gray-600">
      <div className="flex flex-col justify-between gap-4 px-4 py-6 mx-auto border-gray-500 md:flex-row md:gap-0 max-w-7xl dark:border-b">
        <Link href="/">
          <h1 className="flex items-center justify-center text-xl font-semibold cursor-pointer rsor-pointer font-burtons">
            developedByMahi
          </h1>
        </Link>
        <ul className="flex items-center justify-center gap-8">
          <li className="px-2 py-2 rounded md:px-4 hover:bg-gray-100">
            <Link href="/powerOutrage">
              <a className="text-sm font-semibold">Power outrage</a>
            </Link>
          </li>
          <li className="px-2 py-2 rounded md:px-4 hover:bg-gray-100">
            <Link href="/powerOutrageSsr">
              <a className="text-sm font-semibold">Power outrage (SSR)</a>
            </Link>
          </li>
          {!darkMode && (
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="text-2xl cursor-pointer"
              />
            </li>
          )}
          {darkMode && (
            <li className="dark:text-white">
              <HiOutlineLightBulb
                onClick={() => setDarkMode(!darkMode)}
                className="text-lg cursor-pointer md:text-3xl"
              />
            </li>
          )}

          <li>
            <a
              href="#"
              className="px-4 py-2 text-white rounded bg-gradient-to-r from-cyan-500 to-teal-200 dark:text-gray-800"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
