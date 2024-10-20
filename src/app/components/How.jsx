import Image from "next/image";

export default function How() {
  return (
    <section className="bg-black text-white p-4 mb-16 md:p-16">
      <h1 className="text-center text-3xl font-bold mb-8 md:text-5xl md:mb-16">How Assignofast Works?</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
        <div className="relative w-[80%] md:w-[40%]"> {/* Decrease width for mobile view */}
          <div className="absolute left-20 inset-0 bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-[8rem] opacity-80"></div>
          <Image
            src="./how.svg"
            alt="how"
            layout="responsive"
            width={700} 
            height={400} 
            className="relative z-10"
          />
        </div>
        <div className="w-full md:w-[50%] p-4 text-center md:text-left md:p-12"> {/* Center content for mobile view and left for laptop view */}
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Assignofast Extension</h2>
          <p className="text-base leading-relaxed md:text-lg">
            IEEE Computer Society, VIT, is an eminent Student Branch belonging to the Madras Section of IEEE Region 10.
            Formed in February of 2012, we aim to solve modern-day problems by understanding and harnessing cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
