import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search({ searchData }) {
  const router = useRouter();

  // ES6 object destructuring
  //Fetching data from the current url in searchbar
  const { location, startDate, endDate, noOfGuests } = router.query;

  // console.log(startDate);
  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex max-w-7xl mx-auto">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap  ">
            {/* Below in className ".button" is custom tailwind css  */}
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Room and Beds</button>
            <button className="button">More filters</button>
          </div>

          <div className="flex flex-col">
            {searchData.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// server side rendering  using nextjs
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps() {
  const searchData = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchData: searchData,
    },
  };
}
