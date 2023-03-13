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
    <nav className=" dark:bg-gray-600 h-[10vh]">
      <div className="flex flex-col justify-between gap-4 px-4 py-6 mx-auto border-gray-500 md:flex-row md:gap-0 max-w-7xl dark:border-b">
        <Link href="/">
          {/* <h1 className="flex items-center justify-center text-xl font-semibold cursor-pointer rsor-pointer font-burtons">
            developedByMahi
          </h1> */}

          <div className="rotate-90 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M13.07 26.285c.962 1.176 3.41 5.533 3.93 7.715h14c.52-2.18 2.965-6.537 3.927-7.712a13.568 13.568 0 0 0 2.982-7.015a13.47 13.47 0 0 0-1.289-7.495a13.813 13.813 0 0 0-5.164-5.671A14.215 14.215 0 0 0 24.002 4c-2.637 0-5.221.73-7.454 2.105a13.814 13.814 0 0 0-5.166 5.67a13.47 13.47 0 0 0-1.292 7.493c.299 2.567 1.332 5 2.98 7.017ZM25 12l-6 9h4v6l6-9h-4v-6Z"
                  clip-rule="evenodd"
                />
                <path d="M17 37a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1Zm14 3H17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2Z" />
              </g>
            </svg>
          </div>
        </Link>
        <ul className="flex items-center justify-center md:gap-2">
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
                className="ml-8 text-lg cursor-pointer md:text-2xl"
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
