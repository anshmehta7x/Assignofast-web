import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Question({ bgColor }) {
  return (
    <div className={`relative h-auto md:h-[12rem] w-full md:w-[42rem] m-2 p-4 rounded-lg ${poppins.className}`}>
      <div
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: bgColor, opacity: 0.5 }}
      />
      
      <div className="relative text-white z-10">
        <h2 className="text-xl md:text-2xl font-semibold">QUESTION</h2>
        <p className="text-base md:text-xl">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
        </p>
      </div>
    </div>
  );
}
