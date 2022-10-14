import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function powerOutrage2DetailPage(props: any) {
  const { countryList } = props;
  const { results } = props;

  const API_ENDPOINT =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  let powerOutrageId = router.query.powerOutrageId;

  // const results = items.filter((obj, i) => {
  //   return obj[i].district === powerOutrageId;
  // });

  return (
    <section className="dark:bg-gray-600 h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl uppercase py-8 text-center">
          {powerOutrageId} outrages
        </h1>
        {/* {isLoading && (
          <div className="text-gray-300 text-xl text-center pt-8">
            Loading...
          </div>
        )} */}
        <div className="flex justify-center items-center flex-wrap dark:bg-gray-600 pb-8">
          {results[0] &&
            results[0]
              .slice(0)
              .reverse()
              .slice(0, 20)
              .map(
                (
                  value: { district: string; from: string; to: string },
                  i: Key
                ) => (
                  <div
                    key={i}
                    className="p-6 m-1 bg-gray-200 dark:bg-gray-400 inline-block rounded-lg text-gray-900 dark:text-gray-900 md:w-auto w-[260px]"
                  >
                    <div>
                      <h2 className="uppercase font-medium">
                        {value.district}
                      </h2>
                      <div>
                        <span className="font-medium">from </span>(
                        {new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(value.from))}{" "}
                        )
                      </div>
                      <div>
                        <span className="font-medium">To </span> (
                        {new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(value.to))}
                        )
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>
      </div>
    </section>
  );
}

async function getData() {
  const API_ENDPOINT =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";
  const res = await fetch(API_ENDPOINT);
  const countryList = await res.json();

  return countryList;
}

export async function getStaticProps() {
  const router = useRouter();
  let powerOutrageId = router.query.powerOutrageId;
  const countryList = await getData();

  // key : "Values"
  // Get array values
  const items = Object.values(countryList).map((value) => {
    return value;
  });

  // Get array keys
  const itemsKeys = Object.keys(countryList).map((key) => {
    return key;
  });

  const results = items.find((obj, i) => {
    return obj[i].district === powerOutrageId;
  });

  console.log("items -", items);

  return {
    props: {
      countryList,
      results,
    },
  };
}

export async function getStaticPaths() {
  const countryList = await getData();

  console.log(countryList);

  return {
    paths: [{ params: {} }],
    fallback: false,
  };
}

export default powerOutrage2DetailPage;
