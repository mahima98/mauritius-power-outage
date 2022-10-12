import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function powerOutrageDetailPage() {
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

  const results = items.filter((obj, i) => {
    if (obj.length === 0) {
      return [];
    }
    return obj[i].district === powerOutrageId;
  });

  return (
    <section className="dark:bg-gray-600 h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl uppercase py-8 text-center">
          {powerOutrageId} outrages
        </h1>
        {isLoading && <div>{isLoading}</div>}
        <div className="flex justify-center items-center flex-wrap">
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
                    className="p-4 m-1 bg-gray-200 dark:bg-gray-500 inline-block rounded-lg text-gray-900 dark:text-gray-900"
                  >
                    <div className="font-medium">{value.district}</div>
                    <div>
                      from (
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(value.from))}
                      )
                    </div>
                  </div>
                )
              )}
        </div>
      </div>
    </section>
  );
}

export default powerOutrageDetailPage;
