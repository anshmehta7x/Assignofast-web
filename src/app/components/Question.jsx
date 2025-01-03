import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Question({ bgColor, question, answer }) {
  return (
    <div
      className={`relative  md:w-[42rem] m-4 p-6 rounded-xl shadow-lg ${alexandria.className}`}
      style={{ minHeight: "fit-content" }}
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: bgColor, opacity: 0.4 }}
      />
      <div className="relative z-10 space-y-4 text-white">
        <h2
          className={`text-xl md:text-2xl  leading-relaxed ${alexandria.className}`}
        >
          {question}
        </h2>
        <p
          className={`text-base md:text-lg leading-relaxed opacity-90 font-thin ${alexandria.className}`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
