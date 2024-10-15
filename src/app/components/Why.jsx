import Advantage from './Advantage';
import { Alexandria, Abyssinica_SIL } from "next/font/google";

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

const aby = Abyssinica_SIL({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export default function Why() {
  return (
    <>
      <div className={`${alexandria.className} overflow-clip`}>
        <div className="md:flex flex-col">

          <div className="md:flex flex-col items-center md:items-start md:justify-start justify-center">
          <h1 className="text-[#e9fac1] text-3xl lg:text-7xl md:text-4xl md:text-left ml-8 md:mt-[8rem] mt-[5rem] font-extrabold sm:before:text-center">
            <span className="text-[#c3ff55]">Why Choose</span> Assignofast?
          </h1>
          <h1 className={`text-[#c3ff55] lg:text-xl md:text-lg m-8 mt-4 font-semibold ${aby.className} tracking-widest`}>
            ADVANTAGES
          </h1>
          </div>


          <Advantage
            imageSrc="./why1.svg"
            iconSrc="./notifications.svg"
            title="Clever Notifications"
            content="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies..."
            reverse={false}
          />

          <Advantage
            imageSrc="./why2.svg"
            iconSrc="./task.svg"
            title="Track Your Digital Assessments"
            content="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies..."
            reverse={true}
          />

          <Advantage
            imageSrc="./why3.svg"
            iconSrc="./task.svg"
            title="Personal Task Management"
            content="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies..."
            reverse={false}
          />


            <Advantage
            imageSrc="./why4.svg"
            iconSrc="./task.svg"
            title="Easy to Integrate"
            content="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies..."
            reverse={true}
          />
        </div>
      </div>
    </>
  );
}
