import Image from "next/image";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Landing() {
  return (
    <div className={`h-[100%] w-[100%] bg-black lg:flex overflow-hidden relative font-alexandria ${alexandria.className}`}>
      <Image
        src="landing-overlay.svg"
        alt="Overlay Image"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        width={100}
        height={100}
      />
      <div className="text-[3vh] lg:text-[7vh] relative z-10 w-[100vw] h-[38vh] lg:h-full lg:w-[45vw] mt-[10vh] lg:mt-[20vh] ml-[10vw] text-white">
          <p>
            Automate <span className="opacity-50">Tracking</span>
          </p>
          <p>
            your DA's <span className="opacity-50">with</span>
          </p>
          <p className="text-[#B8F80C]">Assignofast</p>
          <p className="w-[60%] lg:w-[70%] text-[1.5vh] lg:text-[2.5vh] mt-[3vh] lg:mt-[5vh]">
            Assignofast - a smart companion designed to ease the stress of
            keeping track of your tasks and assignments.
          </p>
          <button className="bg-[#b8f80c] mt-[3vh] lg:mt-[5vh] text-black p-2 lg:p-4 text-[1.5vh] lg:text-[3vh] ">
            <span className="block lg:hidden ">Coming Very Soon !!</span>
            <span className="hidden lg:block ">Coming Very Soon !!</span>
            </button>
        </div>
      
<div className="relative z-0 lg:flex h-[50vh] lg:h-[90vh] lg:w-[70vw] lg:mt-[10vh]">
  <Image
    src="landing-mobile.svg"
    alt="Mobile Image"
    layout="fill"
    objectFit="contain"  
    className="lg:absolute lg:inset-0"
  />
</div>

    </div>
  );
}
