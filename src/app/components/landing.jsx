import Image from "next/image";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Landing() {
  return (
    <div className={`h-full w-full bg-black overflow-hidden font-alexandria ${alexandria.className}`}>
      <div className="flex flex-col mt-[10vh] lg:mt-[20vh] text-[8vh] mx-[5vw]">
        <p>WE ARE</p>
        <p className="self-end text-right lg:self-start lg:text-left">IEEE-CS</p>
        <p className="text-[0vh] lg:text-[8vh] lg:self-end lg:text-right text-center">Assignofast</p>
        
        <div className="flex flex-row items-center mt-4">
          <p className="w-1/3 text-[1vh] lg:text-[3vh]">
            Assignofast is an app developed by IEEE-CS VIT Chapter to cater to students' necessity of managing their DA’s.
            <button className="ml-4 flex items-center justify-start bg-[#89ef00] text-black px-2 w-[15vw]">
            <img src="link-arrow-right.svg" alt="Arrow Right" className="h-4 w-4 mr-1" />
            Download
          </button></p>
          
          <Image 
          src="/landing-tag.svg"
          width={500}
          height={300} 
          className="w-1/3 mt-4"
          alt="Landing illustration"  
        />
        <p className="w-1/3 text-[1vh] lg:text-[3vh]">
          Ground-breaking app for your assignment needs.
        </p>
        </div>

        
      </div>
    </div>
  );
}
