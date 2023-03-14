import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function powerOutrageDetailPage() {
  const router = useRouter();
  const powerOutrageId = router.query.powerOutrageId;

  const API_ENDPOINT =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

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

  const items = Object.values(loadedOutrages).map((value) => {
    return value;
  });

  const itemsKey = Object.keys(loadedOutrages).map((key) => {
    return key;
  });

  console.log("keys", itemsKey);

  const results = items.filter((obj, i) => {
    return obj[i].district === powerOutrageId;
  });

  return (
    <section className="h-screen dark:bg-gray-600">
      <div className="mx-auto max-w-7xl">
        <h1 className="py-8 text-3xl font-bold text-center uppercase">
          {powerOutrageId} outages
        </h1>
        {isLoading && (
          <div className="pt-8 text-xl text-center text-gray-300">
            Loading...
          </div>
        )}
        <div className="flex flex-wrap items-center justify-right pb-8 dark:bg-gray-600">
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
                      <h2 className="font-medium uppercase">
                        {value.district}
                      </h2>
                      <div>
                        <span className="font-medium">Date: </span>
                        {new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(value.from))}{" "}
                        <div>
                          <span className="font-medium">Time: </span>
                          {new Intl.DateTimeFormat("en-GB", {
                            hour: "2-digit",
                            dayPeriod: "short",
                            minute: "2-digit",
                          }).format(new Date(value.from))}
                          <span className="px-1">-</span>
                          {new Intl.DateTimeFormat("en-GB", {
                            hour: "2-digit",
                            dayPeriod: "short",
                            minute: "2-digit",
                          }).format(new Date(value.to))}
                        </div>
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
