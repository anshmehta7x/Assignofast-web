import Image from "next/image";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <div className={`h-[170vh] lg:h-[105vh] w-[100%] overflow-hidden bg-black font-alexandria ${alexandria.className}`}>
      <div className="flex flex-col mt-[10vh] lg:mt-[30vh] text-[8vh] lg:text-[12vh]">
        <p className="px-[5vw]">WE ARE</p>
        <p className="px-[5vw] self-end text-right lg:self-start lg:text-left lg:text-[10vh]">IEEE-CS</p>
        <p className="text-[0vh] lg:text-[10vh] mr-[5vw] lg:self-end lg:text-right text-center -mt-[30vh]">Assignofast</p>
        <p className="w-full lg:w-1/4 text-[2vh] lg:mr-[5vw] mt-[90vh] lg:mt-[0vh] lg:text-[2.5vh] lg:self-end lg:text-right text-center">
          Your personal shield against deadline dread - Assignofast keeps you always ahead
        </p>
        <div className="flex flex-row items-center justify-between mt-[30vh] lg:mt-[10vh]">
          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 ml-[5vw] w-[90vw] lg:w-[25vw]">
            <button className="h-[10vh] w-full bg-[#144c11] flex items-center gap-4 p-4">
              <Image src="/chrome-web.svg" width={45} height={45} alt="Chrome Icon" className="h-full" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[1.8vh] lg:text-[2vh]">Available in the</span>
                <span className="text-[2.8vh] lg:text-[3vh] font-bold">Chrome Web Store</span>
              </div>
            </button>

            <div className="flex flex-row gap-4 w-full">
              <button className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/apple.svg" width={45} height={45} alt="Apple Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Download on the</span>
                  <span className="text-[2.3vh] lg:text-[2vh] font-bold">App Store</span>
                </div>
              </button>

              <button className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/google-play.svg" width={45} height={45} alt="Google Play Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[1.5vh]">Get it on</span>
                  <span className="text-[2.3vh] lg:text-[2vh] font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Landing Tag */}
          <div className="absolute -mt-[165vh] ml-[10%] w-[70vw] h-[60vh] lg:w-[40vw] lg:h-[85vh] lg:ml-[25%] lg:-mt-[20%]">
  <div className="absolute inset-0  lg:ml-[15%] w-[130%] lg:w-[90%] lg:h-[80%] mx-auto my-auto bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-3xl opacity-80"></div>
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

        

        <p className="text-[5vh] lg:text-[0vh] -mt-[45vh] text-center lg:mt-0 ">Assignofast</p>
        <p className="text-[2vh] px-[5vw] text-center lg:text-[0vh]">Assignofast is an app developed by IEEE-CS VIT Chapter to cater to students necessity of managing their DA’s.</p>
      </div>
    </div>
  );
}
