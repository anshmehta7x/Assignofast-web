import Image from "next/image";

export default function What() {
  return (
    <section className="bg-background max-w-screen h-screen flex flex-row justify-evenly">
      <div className="w-1/2 border-borderGreen border-r-2 border-t-2 border-b-2  flex justify-center items-center">
        <Image src="laptop.svg" alt="laptop" width={650} height={650} />
      </div>
      <div className="w-1/2 border-borderGreen border-l-2 border-t-2 border-b-2 flex justify-start items-center pr-[10vw]">
        <div className="flex flex-col ml-[5vw]">
          <h1 className="text-lightGreen text-5xl my-6">
            WHAT'S{" "}
            <span className="text-[#E9FAC1]">
              <br></br>ASSIGNOFAST?
            </span>
          </h1>
          <p className="text-2xl uppercase">
            <span className="text-lightGreen">Assignofast</span> is more than
            just a regular reminder app. It taps into the digital world of
            assignments posted by your faculty, automatically loading them into
            the app so you don't have to worry about missing anything. You'll
            get timely notifications before deadlines, and weve made sure that
            when deadlines are looming, especially under 48 hours, the
            notifications come even more frequently, ensuring you stay on top of
            your work.
          </p>
        </div>
      </div>
    </section>
  );
}
