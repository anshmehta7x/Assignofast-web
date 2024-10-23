import Question from "./Question";
import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: "400",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Faqs() {
  const colors = ["#003700", "#21661D"];
  return (
    <div
      id="faq"
      className={`bg-black h-auto text-white p-4 ${abyssinica.className}`}
    >
      <h1
        className={`text-3xl md:text-5xl m-4 text-center font-semibold ml-6 ${alexandria.className}`}
      >
        Frequently Asked Questions
      </h1>
      <div className="m-4 ">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex flex-col justify-center md:flex-row md:space-x-4">
            {colors.map((color, col) => {
              const isMobile = row % 2 === 0;
              return (
                <Question
                  key={col}
                  bgColor={isMobile ? colors[col] : colors[(row + col) % 2]}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
