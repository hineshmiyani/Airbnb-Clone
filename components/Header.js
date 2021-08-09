import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
// import Link from "next/link";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  // Next JS  Routing: https://nextjs.org/docs/api-reference/next/router
  const router = useRouter();

  const handleSet = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // console.log(searchInput);
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* Left */}
      <div
        onClick={(e) => {
          e.preventDefault();
          // https://github.com/vercel/next.js/issues/5947#issuecomment-466628232
          router.push("/error", "/");
          console.log("route to Home page");
        }}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" //maintain default aspect ratio
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          value={searchInput}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-grey-600 placeholder-gray-400"
          placeholder={placeholder ? placeholder : "Start your search"}
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 mr-2 cursor-pointer  md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center  space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4 width:40%  ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSet}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />

            <input
              onChange={(event) => setNoOfGuests(event.target.value)}
              min={1}
              value={noOfGuests}
              type="number"
              className="w-12 pl-3 outline-none  text-lg text-red-400"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>

            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
