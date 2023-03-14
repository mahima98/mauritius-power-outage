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
      <div className="power-outrage dark:bg-gray-600 pt-6 md:pt-4">
        <div className="p-6 flex flex-col gap-4 max-w-7xl mx-auto">
          <h1
            className="font-medium md:text-4xl text-3xl text-center pb-8 md:pb-4 text-white"
            style={{ textShadow: "#30D5C8 1px 0 8px" }}
          >
            Power Outage Mauritius
          </h1>
          {isLoading && (
            <div className="text-center text-xl text-gray-300 pt-20">
              Loading...
            </div>
          )}
          {Object.keys(countryList).map((key, i: Key) => (
            <div
              key={i}
              className="p-4 bg-gray-100 dark:bg-gray-400 rounded-lg flex flex-col gap-4 "
            >
              <div className="flex items-center gap-4">
                <Link href={`/powerOutrage/${key}`}>
                  <div className="cursor-pointer font-bold text-xl uppercase tracking-wide">
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

export default powerOutrage;
