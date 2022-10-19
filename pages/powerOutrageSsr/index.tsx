import Head from "next/head";
import Link from "next/link";
import { Key } from "react";
import { ImPower } from "react-icons/im";

export interface product {
  id: string;
  brand: string;
  category: string;
}

export interface Countries {
  id: string;
  date?: string;
  district: string;
  from: string;
  to: string;
}

export default function powerOutrage2(props: any) {
  const { countryList } = props;

  return (
    <>
      <Head>
        <title>Power Outrages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="power-outrage dark:bg-gray-600 md:pt-4">
        <div className="flex flex-col gap-4 p-6 mx-auto max-w-7xl">
          <h1
            className="pb-8 text-3xl font-medium text-center text-white md:text-4xl md:pb-4"
            style={{ textShadow: "#30D5C8 1px 0 8px" }}
          >
            Power Outrage Mauritius
          </h1>
          {/* {isLoading && (
            <div className="pt-20 text-xl text-center text-gray-300">
              Loading...
            </div>
          )} */}
          {Object.keys(countryList).map((key, i: Key) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-400 "
            >
              <div className="flex items-center gap-4">
                <Link href={`/powerOutrageSsr/${key}`}>
                  <div className="text-xl font-bold tracking-wide uppercase cursor-pointer">
                    {key}
                  </div>
                </Link>
                <ImPower />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// it prepares a prop for the component as named get static props
// never visible on the client side
export async function getStaticProps() {
  const API_ENDPOINT =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

  const res = await fetch(API_ENDPOINT);
  const countryList = await res.json();

  if (!countryList) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      notFound: true,
    };
  }

  // key : "Values"
  // Get array values
  const items = Object.values(countryList).map((value) => {
    return value;
  });

  // Get array keys
  const itemsKeys = Object.keys(countryList).map((key) => {
    return key;
  });

  console.log("items -", items);

  return {
    props: {
      countryList,
    },
  };
}
