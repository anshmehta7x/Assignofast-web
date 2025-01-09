"use client"

import { Abyssinica_SIL, Alexandria } from "next/font/google";
import Image from "next/image";
import { useCallback } from "react";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Footer() {
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
      <div className={`h-auto lg:h-[90vh] max-w-[100vw] px-[5vw] bg-black overflow-hidden ${abyssinica.className}`}>
      <div className="h-auto lg:h-[80vh] flex flex-col lg:flex-row px-[5vw] bg-[#002610] mt-[5vh] rounded-2xl">
        <div className="mt-[5vh] lg:mt-[10vh] lg:w-1/2">
          <p className={`text-[3vh] lg:text-[7vh] text-white mb-[2vh] lg:mb-[4vh] ${alexandria.className}`}>
            Download Assignofast
          </p>
          <p className="text-white lg:max-w-[30vw]">
            Unlock your potential with our app - track tasks, manage DAs, and stay organized with just a tap. Download now and take control, wherever life takes you!
          </p>
          <div className="flex flex-col my-[5vh] items-center gap-6 w-[80vw] lg:w-[30vw]">
            <button onClick={handleChrome} className="h-[10vh] w-full bg-black flex items-center gap-4 p-4">
              <Image src="/chrome-web.svg" width={45} height={45} alt="Chrome Icon" className="h-full" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[1.8vh] lg:text-[2vh]">Available in the</span>
                <span className="text-[2.8vh] lg:text-[3vh] font-bold">Chrome Web Store</span>
              </div>
            </button>
    
            <div className="flex flex-row gap-4 w-full">
              <button onClick={handleApp} className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/apple.svg" width={45} height={45} alt="Apple Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Download on</span>
                  <span className="text-[2vh] lg:text-[2.5vh] font-bold">App Store</span>
                </div>
              </button>
    
              <button onClick={handlePlay} className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/google-play.svg" width={45} height={45} alt="Google Play Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Get it on</span>
                  <span className="text-[2vh] lg:text-[2.5vh] font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
  <img src="footer.svg" alt="Footer Graphic" className="hidden lg:block h-[80vh]" />
  <img src="footer-mobile.svg" alt="Footer Graphic" className="block lg:hidden px-8 h-[35vh]" />
</div>

      </div>
    </div>
    
    );
}
