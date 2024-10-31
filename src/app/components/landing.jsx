"use client";

import { useCallback } from 'react';import Image from "next/image";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  const handleApp = useCallback(() => {
    window.open('https://apps.apple.com/in/app/assignofast/id6736854512', '_blank');
  }, []);
  const handlePlay = useCallback(() => {
    window.open('https://play.google.com/store/apps/details?id=com.aryanjain.assignofast', '_blank');
  }, []);
  const handleChrome = useCallback(() => {
    window.open('https://chromewebstore.google.com/detail/assignofast/oenbdnejpfjgonicapclmcnhiglacaem', '_blank');
  }, []);
  return (
    <div className={`h-[115vh] lg:h-[105vh] w-[100%] overflow-hidden bg-black font-alexandria ${alexandria.className}`}>
      <div className="flex flex-col relative mt-[10vh] lg:mt-[30vh] text-[8vh] lg:text-[12vh]">
        <p className="px-[5vw]">WE ARE</p>
        <p className="px-[5vw] self-end text-right lg:self-start lg:text-left lg:text-[10vh]">IEEE-CS</p>
        <p className="text-[0vh] lg:text-[10vh] mr-[5vw] lg:self-end lg:text-right text-center -mt-[30vh]">Assignofast</p>
        <p className="w-1/3 z-10 lg:w-1/4 ml-2 text-left text-[1.2vh] lg:mr-[5vw] mt-[43vh] lg:mt-[0vh] lg:text-[2.5vh] lg:self-end lg:text-right">
          Your personal shield against deadline dread - Assignofast keeps you always ahead
        </p>
        <div className="flex flex-row items-center justify-between mt-[35vh] lg:mt-[10vh]">
          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 ml-[10vw] lg:ml-[5vw] w-[80vw] lg:w-[25vw]">
            <button onClick={handleChrome} className="h-[10vh] w-full bg-[#144c11] flex items-center gap-4 p-4">
              <Image src="/chrome-web.svg" width={45} height={45} alt="Chrome Icon" className="h-full" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[1.5vh] lg:text-[2vh]">Available in the</span>
                <span className="text-[2.3vh] lg:text-[3vh] font-bold">Chrome Web Store</span>
              </div>
            </button>

            <div className="flex flex-row gap-4 w-full">
              <button onClick={handleApp} className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
              <Image
  src="/apple.svg"
  alt="Apple Icon"
  width={45}
  height={45}
  className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
/>

<div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Download on the</span>
                  <span className="text-[1.5vh] lg:text-[2vh] font-bold">App Store</span>
                </div>
              </button>

              <button onClick={handlePlay} className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
              <Image
  src="/google-play.svg"
  alt="Play Icon"
  width={45}
  height={45}
  className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
/>
<div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Get it on</span>
                  <span className="text-[1.5vh] lg:text-[2vh] font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Landing Tag */}
          <div className="absolute -mt-[98vh] ml-[10%] w-[90vw] h-[60vh] lg:w-[43vw] lg:h-[91vh] lg:ml-[30%] lg:-mt-[20%]">
  <div className="absolute inset-0  z-0 lg:ml-[15%] w-[100%] lg:w-[90%] lg:h-[80%] mx-auto my-auto bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-3xl opacity-80"></div>
  <div className="relative w-full h-full">
  <div className="lg:hidden">
    <Image 
      src="/landing-mobile.svg" 
      layout="fill" 
      className="relative z-10 object-cover object-top" 
      priority 
    />
  </div>
  <div className="hidden lg:block">
    <Image 
      src="/landing-tag.svg" 
      layout="fill" 
      className="relative z-10 object-cover object-top" 
      priority 
    />
  </div>
</div>


</div>

        </div>

        

        <p className="text-[5vh] z-10 lg:text-[0vh] -mt-[45vh] text-center lg:mt-0 ">Assignofast</p>
        <p className="text-[2vh] z-10 mt-[2vh] px-[5vw] text-center lg:text-[0vh]">Assignofast is an app developed by IEEE-CS VIT Chapter to cater to students necessity of managing their DA’s.</p>
      </div>
    </div>
  );
}
