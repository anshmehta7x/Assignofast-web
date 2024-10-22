import Image from "next/image";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Landing() {
  return (
    <div className={`h-full w-full bg-black overflow-hidden font-alexandria ${alexandria.className}`}>
      <div className="flex flex-col mt-[10vh] lg:mt-[20vh] text-[8vh] mx-[5vw] lg:text-[12vh]">
        <p>WE ARE</p>
        <p className="self-end text-right lg:self-start lg:text-left">IEEE-CS</p>
        <p className="text-[0vh] lg:text-[12vh] lg:self-end lg:text-right text-center lg:-mt-[20vh]">Assignofast</p>
        
        <div className="flex flex-row items-center sm:mt-[-35vh]">
          <p className="w-[28vw] text-[1vh] lg:text-[3vh]">
            Assignofast is an app developed by IEEE-CS VIT Chapter to cater to students' necessity of managing their DA’s.
            <button className="mt-6 py-2 flex items-center justify-start bg-[#89ef00] text-black px-2 w-[10vw]">
            <img src="link-arrow-right.svg" alt="Arrow Right" className="h-4 w-4 mr-1" />
            Download
          </button></p>
          <div className="w-full max-w-[30vw] mt-4">
          <div className="w-[20%] my-[8%] absolute ml-[40%] inset-0 bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-[8rem] opacity-80"></div>
          <Image
            src="/landing-tag.svg"
            alt="how"
            layout="responsive"
            width={700} 
            height={400} 
            className="relative z-10"
          />
        </div>




        <p className="w-1/3 text-[1vh] lg:text-[3vh] mt-[5vh]">
          Ground-breaking app for your assignment needs.
        </p>
        </div>

        
      </div>
    </div>
  );
}
