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
        <title>Power Outages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="power-outrage dark:bg-gray-600 ">
        <div className="flex flex-col  mx-auto max-w-7xl">
           <h1
            className="py-12 font-medium text-3xl text-center  text-black underline  decoration-4 underline-offset-8 decoration-red-400"
          >
            Power Outage Mauritius
          </h1>
        <p className="text-lg text-black font-medium text-center pb-12">Pick a region:</p>

            <div className="flex flex-wrap items-center justify-center gap-6">
            {Object.keys(countryList).map((key, i: Key) => (
              <div
                key={i}
              >
                <Link href={`/powerOutrageSsr/${key}`}>
                  <div className="p-4 bg-gray-100 dark:bg-gray-400 rounded-lg flex items-center gap-4 cursor-pointer ">
                    <ImPower />
                    <div className="font-bold text-xl uppercase tracking-wide">
                      {key}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
