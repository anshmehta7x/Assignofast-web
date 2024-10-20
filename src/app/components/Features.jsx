'use client';
import Image from "next/image";
import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

const featuresData = [
  { icon: "./feat1.svg", title: "Real-Time Tracking", content: "Track your DA's progress in real-time." },
  { icon: "./feat2.svg", title: "Customised Tasks", content: "Safe and seamless remainder options." },
  { icon: "./feat3.svg", title: "Auto Sync with VTOP", content: "Choose your semester for your convenience." },
  { icon: "./feat4.svg", title: "Auto Sync with VTOP", content: "Choose your semester for your convenience." }
];

export default function Features() {
  return (
    <div className="bg-black h-auto p-4 font-sans">
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full max-w-[300px] md:max-w-none">
            <img
              src="./phone.svg"
              alt="phone img"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left p-2">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-2" />
                <h2 className="text-lg md:text-xl mb-1 font-bold">{feature.title}</h2>
                <p className="text-sm md:text-base">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
