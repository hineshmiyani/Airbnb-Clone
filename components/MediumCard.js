import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointor hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[17.24rem] w-[17.24rem]">
        <Image src={img} layout="fill" className="rounded-xl"></Image>
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
