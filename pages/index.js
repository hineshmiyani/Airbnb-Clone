import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ explorerData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main Section */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Cards */}

        <section className="pt-14">
          <h2 className="text-4xl font-semibold pb-5">Explorer Nearby</h2>

          {/* Pull some data from  server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explorerData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Cards */}

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -mx-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Cards */}

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greates Outdooors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
}

// static side rendering  using nextjs
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
  const explorerData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      explorerData: explorerData,
      cardsData: cardsData,
    },
  };
}
