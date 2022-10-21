export default function events({ events }) {
  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Events
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
            <p className="text-xl text-gray-500">
              Events i attended in Mauritius
            </p>
          </div>
        </div>
        <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {events.map((event) => (
            <div
              key={event.title}
              className="p-4 bg-gray-100 rounded hover:bg-gray-200"
            >
              <p className="text-sm text-gray-500">
                {/* <time dateTime={event.datetime}>{event.date}</time> */}
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {event.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {event.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href="/"
                  className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/events");
  const events = await res.json();

  return {
    props: {
      events,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
