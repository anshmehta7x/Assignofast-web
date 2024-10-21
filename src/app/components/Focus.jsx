import Image from "next/image";
import { Noto_Sans_Georgian } from "next/font/google";

const abyssinica = Noto_Sans_Georgian({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Noto_Sans_Georgian({
  weight: '400',
  subsets: ['latin'],
});

export default function What() {
  return (
    <section className="bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Focus on What Matters</h1>

      <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2"> {/* Image div */}
          <Image
            src="./focus.svg"
            alt="focus"
            height={800}
            width={800}
            className="w-full max-h-[30rem] md:max-h-full" // Ensuring the image is responsive
          />
        </div>

        <div className="p-8 w-full md:w-1/2 order-2 md:order-1"> {/* Content div - stays in order */}
          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Title</h2>
            <p className="text-sm md:text-base">
              Venenatis blandit habitasse nunc, sapien enim elit in. 
              Arcu, pharetra, et cursus sit senectus in blandit. Aliquet 
              enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt 
              vitae arcu bibendum malesuada lorem sapien volutpat.
            </p>
          </div>

          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Title</h2>
            <p className="text-sm md:text-base">
              Venenatis blandit habitasse nunc, sapien enim elit in. 
              Arcu, pharetra, et cursus sit senectus in blandit. Aliquet 
              enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt 
              vitae arcu bibendum malesuada lorem sapien volutpat.
            </p>
          </div>

          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Title</h2>
            <p className="text-sm md:text-base">
              Venenatis blandit habitasse nunc, sapien enim elit in. 
              Arcu, pharetra, et cursus sit senectus in blandit. Aliquet 
              enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt 
              vitae arcu bibendum malesuada lorem sapien volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
