import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function What() {
  return (
    <section
      className={`bg-background max-w-screen h-screen flex flex-col md:flex-row md:justify-evenly ${poppins.className}`}
    >
      <div className="w-1/2 border-borderGreen border-r-2 border-t-2 border-b-2 hidden md:flex justify-center items-center">
        <Image src="laptop.svg" alt="laptop" width={650} height={650} />
      </div>
      <div className="w-full h-full md:w-1/2 border-borderGreen md:border-l-2 md:border-t-2 md:border-b-2 flex flex-col md:flex-row md:justify-start md:items-center md:pr-[7.5vw]">
        <div className="flex flex-col mx-[7.5vw] md:ml-[5vw] md:mx-0">
          <h1 className="text-lightGreen text-2xl text-center md:text-left md:text-6xl my-6 font-bold ">
            WHAT'S <span className="hidden md:inline-block">{"\n"}</span>
            <span className="text-[#E9FAC1]">ASSIGNOFAST ?</span>
          </h1>
          <p className="text-sm md:text-2xl uppercase text-justify md:text-left leading-6">
            <span className="text-lightGreen">Assignofast</span> is more than
            just a regular reminder app. It taps into the digital world of
            assignments posted by your faculty, automatically loading them into
            the app so you don't have to worry about missing anything. You'll
            get timely notifications before deadlines, and we've made sure that
            when deadlines are looming, especially under 48 hours, the
            notifications come even more frequently, ensuring you stay on top of
            your work.
          </p>
        </div>
        <div className="md:hidden flex-grow flex items-center justify-center">
          <div className="relative w-full h-full mx-8">
            <Image
              src="phone.svg"
              alt="phone"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
