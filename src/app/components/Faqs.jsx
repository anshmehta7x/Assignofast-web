import Question from "./Question";
import { Poppins } from "next/font/google";
import { Abyssinica_SIL } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const aby = Abyssinica_SIL({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});



export default function Faqs() {
  const colors = ["#42661D", "#21661D"]; // Colors for alternating

  return (
    <div className={`bg-[#01171C] h-auto text-white m-2 p-4 ${poppins.className}`}>
      <h1 className={`text-2xl md:text-xl m-4 font-semibold text-[#BFEF4B] ${aby.className}`}>FAQ</h1>
      <h1 className="text-3xl md:text-5xl m-4 font-bold text-[#BFEF4B]">
        Frequently Asked <span className="text-[#E9FAC1]">Questions</span>
      </h1>
      <div className="m-4">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex flex-col md:flex-row md:space-x-4 mt-4">
            {colors.map((color, col) => (
              <Question key={col} bgColor={colors[(row + col) % 2]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
