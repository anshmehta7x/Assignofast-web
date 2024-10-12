import Question from "./Question";
import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Faqs() {
  return (
    <>
      <div className={`bg-[#01171C] h-auto text-white m-2 p-4 ${abyssinica.className}`}>
        <h1 className={`text-2xl md:text-4xl m-4 font-semibold text-[#BFEF4B] ${alexandria.className}`}>FAQ</h1>
        <h1 className="text-3xl md:text-5xl m-4 font-bold text-[#BFEF4B]">
          Frequently Asked <span className="text-[#E9FAC1]">Questions</span>
        </h1>
        <div className="m-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Question />
            <Question />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Question />
            <Question />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Question />
            <Question />
          </div>
        </div>
      </div>
    </>
  );
}
