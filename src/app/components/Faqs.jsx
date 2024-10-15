import Question from "./Question";
import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
});

const aby = Abyssinica_SIL({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export default function Faqs() {
  const colors = ["#42661D", "#21661D"]; // Colors for alternating

  return (
    <div className={`bg-[#01171C] h-auto text-white m-2 p-4 ${abyssinica.className}`}>
      <h1 className={`text-xl md:text-4xl m-4 font-semibold text-[#BFEF4B] ml-6`}>FAQ</h1>
      <h1 className={`text-3xl md:text-5xl m-4 font-semibold text-[#BFEF4B] ml-6 ${alexandria.className}`}>
        Frequently Asked <span className="text-[#E9FAC1]">Questions</span>
      </h1>
      <div className="m-4">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex flex-col md:flex-row md:space-x-4">
            {colors.map((color, col) => (
              <Question key={col} bgColor={colors[(row + col) % 2]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
