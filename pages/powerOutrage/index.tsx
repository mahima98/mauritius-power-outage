import Head from "next/head";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
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

const API_ENDPOINT =
  "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

function powerOutrage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedOutrages, setLoadedOutrages] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedOutrages(data);
      });
  }, []);

  const countryList = loadedOutrages;

  console.log("countryList", countryList);

  // key : "Values"
  // Get array values
  const items = Object.values(countryList).map((value) => {
    console.log(countryList[value]);
    return value;
  });

  // Get array keys
  const itemsKeys = Object.keys(countryList).map((key) => {
    return key;
  });

  console.log(itemsKeys);

  return (
    <>
      <Head>
        <title>Power Outages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="power-outrage dark:bg-gray-600 ">
        <div className=" flex flex-col  max-w-7xl mx-auto">
          <h1
            className="py-12 font-medium text-3xl text-center  text-black underline  decoration-4 underline-offset-8 decoration-yellow-400"
          >
            Power Outage Mauritius
          </h1>
        <p className="text-lg text-black font-medium text-center pb-12">Pick a region:</p>

          {isLoading && (
            <div className="text-center text-xl text-gray-300 pt-20">
              Loading...
            </div>
          )}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {Object.keys(countryList).map((key, i: Key) => (
              <div
                key={i}
              >
                <Link href={`/powerOutrage/${key}`}>
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

export default powerOutrage;
