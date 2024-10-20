import Image from "next/image";
import { Noto_Sans_Georgian } from "next/font/google";

const georgia = Noto_Sans_Georgian({
  weight: '400',
  subsets: ['latin'],
});

export default function About() {
  return (
    <section
      className={`bg-black text-white flex md:flex-row flex-col items-center justify-between ${georgia.className} p-8 md:p-16`}
    >
      <div className="flex flex-col m-4 items-center md:items-start">
        <h1 className="text-2xl font-bold md:text-3xl mb-4 text-center md:text-left">ABOUT</h1>
        <Image src="./ieeecs-logo.svg" alt="ieee-cs" height={150} width={225} />
      </div>

      <div className="flex w-full md:w-[50%] p-4 text-lg md:text-2xl text-center md:text-left">
        <p>
          IEEE Computer Society, VIT, is an eminent Student Branch 
          belonging to the Madras Section of IEEE Region 10. 
          <br /><br />
          Formed in February 2012, we aim to 
          solve modern-day problems by understanding 
          and harnessing cutting-edge technologies.
        </p>
      </div>
    </section>
  );
}
