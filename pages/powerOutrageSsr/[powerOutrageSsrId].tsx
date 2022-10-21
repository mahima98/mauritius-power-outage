import { useRouter } from "next/router";
import { Key } from "react";

var API_ENDPOINT =
  "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

// pre-render all the paths specified
export const getStaticPaths = async () => {
  const res = await fetch(API_ENDPOINT);
  const countryList = await res.json();

  // Get array keys
  const paths = Object.keys(countryList).map((key, i) => {
    return {
      params: { powerOutrageSsrId: key.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  var id = context.params.powerOutrageSsrId;
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return {
    props: {
      countryList: data[id],
    },
  };
}

export default function powerOutrage2DetailPage(props: any) {
  const { countryList } = props;
  const router = useRouter();
  const countryName = router.query.id;

  const itemsValue = Object.values(countryList).map((value, i) => {
    return value;
  });

  return (
    <section className="h-screen dark:bg-gray-600">
      <div className="mx-auto max-w-7xl">
        <h1 className="py-8 text-3xl font-bold text-center uppercase">
          {countryName} outrages
        </h1>
        <div className="flex flex-wrap items-center justify-center pb-8 dark:bg-gray-600">
          {itemsValue &&
            itemsValue
              .slice(0)
              .reverse()
              .slice(0, 20)
              .map((value, i) => (
                <div
                  key={i}
                  className="p-6 m-1 bg-gray-200 dark:bg-gray-400 inline-block rounded-lg text-gray-900 dark:text-gray-900 md:w-auto w-[260px]"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="font-medium uppercase">{value.district}</h2>
                    <div>
                      <span className="font-medium">from </span>(
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(value.from))}{" "}
                      )
                    </div>
                    <div className="max-w-[250px] line-clamp-1">
                      <span className="font-medium ">Streets: </span>
                      {value.streets}
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
              ))}
        </div>
      </div>
    </section>
  );
}
