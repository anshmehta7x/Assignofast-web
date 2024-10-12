import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Question() {
  return (
    <>
      <div className="bg-[#42661D] h-auto md:h-[12rem] w-full md:w-[42rem] m-2 p-4">
        <div className="text-white">
          <h2 className={`text-xl md:text-2xl font-semibold ${alexandria.className}`}>QUESTION</h2>
          <p className="text-base md:text-xl">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
      </div>
    </>
  );
}
