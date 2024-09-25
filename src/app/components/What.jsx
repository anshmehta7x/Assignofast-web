import Image from "next/image";

export default function What() {
  return (
    <section className="bg-background max-w-screen h-screen flex flex-col md:flex-row md:justify-evenly">
      <div className="w-1/2 border-borderGreen border-r-2 border-t-2 border-b-2  hidden md:flex justify-center items-center">
        <Image src="laptop.svg" alt="laptop" width={650} height={650} />
      </div>
      <div className="w-full h-full md:w-1/2 border-borderGreen md:border-l-2 md:border-t-2 md:border-b-2 flex justify-start md:items-center md:pr-[10vw]">
        <div className="flex flex-col mx-[7.5vw] md:ml-[5vw] md:mx-0">
          <h1 className="text-lightGreen text-2xl text-center md:text-5xl my-6">
            WHAT'S <span className="hidden md:inline-block">{"\n"}</span>
            <span className="text-[#E9FAC1]">ASSIGNOFAST?</span>
          </h1>
          <p className=" text-sm md:text-2xl uppercase text-justify md:text-left">
            <span className="text-lightGreen">Assignofast</span> is more than
            just a regular reminder app. It taps into the digital world of
            assignments posted by your faculty, automatically loading them into
            the app so you don't have to worry about missing anything. You'll
            get timely notifications before deadlines, and weve made sure that
            when deadlines are looming, especially under 48 hours, the
            notifications come even more frequently, ensuring you stay on top of
            your work.
          </p>
          <div className=" md:hidden w-full flex items-center justify-center border-red-800 border-2">
            <Image src="phone.svg" alt="laptop" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
