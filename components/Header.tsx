import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Header({ darkMode, setDarkMode }: any) {
  const routes = [
    {
      name: "Power outrage",
      path: "/powerOutrage",
    },
    {
      name: "Power outrage",
      path: "/powerOutrage",
    },
    {
      name: "Events",
      path: "/events",
    },
  ];
  return (
    <nav className=" dark:bg-gray-600">
      <div className="flex flex-col justify-between gap-4 px-4 py-6 mx-auto border-gray-500 md:flex-row md:gap-0 max-w-7xl dark:border-b">
        <Link href="/">
          <h1 className="flex items-center justify-center text-xl font-semibold cursor-pointer rsor-pointer font-burtons">
            developedByMahi
          </h1>
        </Link>
        <ul className="flex items-center justify-center gap-2">
          <li className="px-2 py-2 rounded md:px-2 hover:bg-gray-100">
            <Link href="/powerOutrage">
              <a className="text-xs font-semibold md:text-sm">Power outrage</a>
            </Link>
          </li>
          <li className="px-2 py-2 rounded md:px-2 hover:bg-gray-100">
            <Link href="/powerOutrageSsr">
              <a className="text-xs font-semibold md:text-sm">
                Power outrage(SSR)
              </a>
            </Link>
          </li>
          <li className="px-2 py-2 rounded md:px-2 hover:bg-gray-100">
            <Link href="/events">
              <a className="text-xs font-semibold md:text-sm">Events(ISR)</a>
            </Link>
          </li>
          {!darkMode && (
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="ml-8 text-2xl cursor-pointer"
              />
            </li>
          )}
          {darkMode && (
            <li className="ml-8 dark:text-white">
              <HiOutlineLightBulb
                onClick={() => setDarkMode(!darkMode)}
                className="text-lg cursor-pointer md:text-3xl"
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
