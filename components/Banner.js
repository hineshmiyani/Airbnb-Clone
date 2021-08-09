import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        layout="fill"
        src="https://links.papareact.com/0fm"
        objectFit="cover"
      />

      <div className="absolute  top-1/2 w-full text-center animate-bounce">
        <p className="text-sm sm:text-2xl font-semibold ">
          Not sure where to go? Perfect.
        </p>

        <button className="px-10 py-4 rounded-full bg-white shadow-md my-3  font-bold text-purple-500 hover:shadow-xl active:scale-110 transition duration-150 ">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
