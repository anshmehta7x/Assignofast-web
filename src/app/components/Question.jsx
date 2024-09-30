import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Question() {
  return (
    <>
      <div className="bg-[#42661D] h-auto md:h-[12rem] w-full md:w-[42rem] m-2 p-4">
        <div className="text-white">
          <h2 className="text-xl md:text-2xl font-semibold">QUESTION</h2>
          <p className="text-base md:text-xl">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
      </div>
    </>
  );
}
