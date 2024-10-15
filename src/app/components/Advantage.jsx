import Image from "next/image";
import { Abyssinica_SIL } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

export default function Advantage({ imageSrc, iconSrc, title, content, reverse }) {
  return (
    <>
      {/* Desktop and Tablet View */}
      <div className={`hidden md:flex relative p-12 justify-between ${reverse ? "flex-row-reverse" : ""} h-[80vh] -mt-32`}>
        <div className="text-white lg:w-[40%] md:w-[45%] flex flex-col justify-center">
          <div className="flex mb-2 items-center">
            <Image src={iconSrc} alt={`${title} icon`} height={1200} width={30} className="m-1" />
            <h2 className="lg:text-2xl md:text-xl m-1">{title}</h2>
          </div>
          <p className={`text-sm md:text-base ${abyssinica.className}`}>
            {content}
          </p>
        </div>
        <div className="flex items-center lg:w-[50%] md:w-[45%]">
          <Image src={imageSrc} alt={`${title} image`} height={1200} width={700} className="object-contain" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-start p-4">
        <div className="flex items-start mb-4">
          <Image src={iconSrc} alt={`${title} icon`} height={50} width={30} className="mr-2" />
          <h2 className="text-xl text-white font-semibold">{title}</h2>
        </div>
        <p className={`text-white text-left ${abyssinica.className}`}>
          {content}
        </p>
        {/* <Image src={imageSrc} alt={`${title} mobile image`} height={600} width={300} /> */}
      </div>
    </>
  );
}
