'use client';
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Features() {
  return (
    <>
      <div className={`bg-[#00262D] h-auto mb-2 p-4 text-center ${poppins.className}`}>
        <h1 className="text-[#CFEC9F] text-4xl md:text-5xl lg:text-6xl mt-8 font-semibold">
          FEATURES OF ASSIGNOFAST
        </h1>
        
        {/* Laptop + Tablet view */}
        <div className="hidden md:flex h-[70vh] justify-evenly mt-16 m-8">
          <div className="flex items-center">
            <Image
              src="./phone.svg"
              alt="phone img"
              height={1200}
              width={500}
              className="hidden lg:block"  // Hide image on tablet, show on larger screens
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 h-[100%] items-center">
  {[
    { title: "DEADLINES", content: "Track and meet all important deadlines." },
    { title: "CUSTOMIZATIONS", content: "Customize your tasks and projects." },
    { title: "TASKS", content: "Easily manage and track your tasks." },
    { title: "NOTIFICATIONS", content: "Get notified about important updates." }
  ].map((feature, index) => (
    <div
      key={index}
      className={`relative text-white p-4 h-[15rem] md:h-[18rem] w-[15rem] md:w-[18rem] rounded-2xl`}
      style={{
        backgroundColor: 
          (index === 0 || index === 3) ? "rgba(66, 102, 29, 0.2)" : "rgba(36, 203, 27, 0.2)", // Diagonal coloring
        border: 
          (index === 0 || index === 3) ? "0.2rem solid #42661D" : "0.2rem solid #24CB1B", // Matching border
      }}
    >
      <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold">{feature.title}</h2>
      <p className="text-lg md:text-base lg:text-lg mt-2">{feature.content}</p>
    </div>
  ))}
</div>


        </div>
        
        {/* Mobile view */}
        <div className="md:hidden flex flex-col items-center mt-10 space-y-4">
          {[
            { title: "DEADLINES", content: "Track and meet all important deadlines." },
            { title: "CUSTOMIZATIONS", content: "Customize your tasks and projects." },
            { title: "TASKS", content: "Easily manage and track your tasks." },
            { title: "NOTIFICATIONS", content: "Get notified about important updates." }
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative text-black p-4 h-[12rem] w-[20rem] bg-[#9AFC4F] rounded-2xl`}
              style={{
                backgroundColor: index % 2 === 0 ? "#9AFC4F" : "#CBFF83",
              }}
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-sm mt-2">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
