import { useRouter } from "next/router";
import { useEffect, useState, Key } from "react";
import AlarmSVG from "../../components/AlarmSVG";
import DateSVG from "../../components/DateSVG";
import LocationSVG from "../../components/LocationSVG";
export default function powerOutrageDetailPage() {
  const router = useRouter();
  const powerOutrageId = router.query.powerOutrageId;

  const API_ENDPOINT =
    "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedOutrages, setLoadedOutrages] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(currentMonth);
  const [selectedYear, setSelectedYear] = useState<number | null>(currentYear);

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
  console.log("loadedOutrages:", loadedOutrages);
  console.log("items:", items);

  const results = items.filter((obj: any) => {
    // obj is an array of outages for a district
    return obj.some((outage: any) => outage.district === powerOutrageId);
  });

  // Extract available months from results
  const availableMonths = Array.from(
    new Set(
      results[0]?.map((outage: any) => {
        const date = new Date(outage.from);
        return date.getMonth(); // 0-11
      }) || []
    )
  ).sort((a, b) => a - b);

  // Extract available years from results
  const availableYears = Array.from(
    new Set(
      results[0]?.map((outage: any) => {
        const date = new Date(outage.from);
        return date.getFullYear();
      }) || []
    )
  ).sort((a, b) => a - b);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  console.log("selectedMonth:", selectedMonth);
  console.log("selectedYear:", selectedYear);
  console.log("availableMonths:", availableMonths);
  console.log("availableYears:", availableYears);
  console.log("results before filter:", results);

  const matchesSelectedFilters = (item: any) => {
    const itemDate = new Date(item.from);
    const itemMonth = itemDate.getMonth();
    const itemYear = itemDate.getFullYear();

    const monthMatch = selectedMonth === null || itemMonth === selectedMonth;
    const yearMatch = selectedYear === null || itemYear === selectedYear;

    return monthMatch && yearMatch;
  };

  const getFilteredResults = () => {
    return results[0]?.filter(matchesSelectedFilters) || [];
  };

  const isOutageToday = (outageDate: string) => {
    return new Date(outageDate).toDateString() === currentDate.toDateString();
  };

  return (
    <section className="h-screen dark:bg-gray-600">
      <div className="mx-auto max-w-7xl">
        <h1 className="py-12   text-3xl font-bold text-center uppercase">
          {powerOutrageId} outages
        </h1>
        {isLoading && (
          <div className="pt-8 text-xl text-center text-gray-300">
            Loading...
          </div>
        )}
        <div className="flex justify-center gap-12 pb-12 flex-col items-center">
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
            {availableMonths.map((monthIndex: number) => (
              <button key={monthIndex}
                onClick={() => setSelectedMonth(selectedMonth === monthIndex ? null : monthIndex)}
                className={`px-4 py-2 rounded-lg font-medium transition ${selectedMonth === monthIndex
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-400"
                  }`}
              >
                {monthNames[monthIndex]}
              </button>
            ))}
          </div>

         <div className="flex gap-12 ">
           <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
            {availableYears.map((year: number) => (
              <button
                key={year}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className={`px-4 py-2 rounded-lg font-medium transition ${selectedYear === year
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-400"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>

          {(selectedMonth !== null || selectedYear !== null) && (
            <button
              onClick={() => {
                setSelectedMonth(null);
                setSelectedYear(null);
              }}
              className=" px-4 py-2 bg-yellow-400 border-1 text-black rounded-lg hover:bg-red-600 transition"
            >
              Clear All Filters
            </button>
          )}
         </div>
           
            <div className="w-full text-teal-500 dark:text-white font-medium text-center">
            Found {getFilteredResults().length} outages {selectedMonth !== null && `in ${monthNames[selectedMonth]}`} {selectedYear !== null && `of ${selectedYear}`}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-right pb-8 dark:bg-gray-600">
       
          {results[0] &&
            getFilteredResults()
              .sort((a: any, b: any) => new Date(b.from).getTime() - new Date(a.from).getTime())
              .slice(0, 20)
              .map(
                (
                  value: { district: string; from: string; to: string },
                  i: Key
                ) => (
                    <div
                      key={i}
                      className={`p-6 rounded-lg inline-block md:w-auto w-[300px] ${isOutageToday(value.from)
                          ? "bg-blue-100 dark:bg-blue-400 text-gray-900 dark:text-gray-900"
                          : "bg-gray-200 dark:bg-gray-400 text-gray-900 dark:text-gray-900"
                        }`}
                    >
                      <div>
                       
                        <div className="flex flex-col gap-2">
                         <div  className="flex gap-1">
                           <DateSVG /> 
                         <span>
                           {new Intl.DateTimeFormat("en-GB", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                          }).format(new Date(value.from))}{" "}
                         </span>
                         </div>
                          <div className="flex items-center gap-1">
                              <AlarmSVG />
                            <span  >
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
                            </span>
                          </div>
                          <div className="flex items-center gap-1 ">
                             <LocationSVG />
                            <span className="max-w-[250px] line-clamp-1">  {value.streets}</span>
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
