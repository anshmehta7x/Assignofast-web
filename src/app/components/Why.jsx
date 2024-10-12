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

export default function Why() {
  return (
    <>
      <div className={`${alexandria.className} overflow-clip md:h-[160vh] lg:h-[240vh]`}>
      {/* <div className={`${poppins.className} overflow-clip`} style={{ height: "calc(9vh * 2.4)" }}> */}
        {/* Desktop and Tablet view */}
        <div className="hidden md:flex flex-col">
          <h1 className="text-white lg:text-6xl md:text-4xl ml-8 mt-[8rem] font-extrabold">
            Why Choose Assignofast?
          </h1>
          <h1 className={`text-red-600 lg:text-xl md:text-lg m-8 mt-4 font-semibold ${abyssinica.className}`}>
            ADVANTAGES
          </h1>

          <div className="relative flex p-12 justify-between lg:bottom-56 md:bottom-24">
            <div className="text-white lg:w-[40%] md:w-[45%] flex flex-col justify-center">
              <div className="flex mb-2 items-center">
                <Image
                  src="./notifications.svg"
                  alt="notification icon"
                  height={1200}
                  width={30}
                  className="m-1"
                />
                <h2 className="lg:text-2xl md:text-xl m-1">Clever Notifications</h2>
              </div>
              <p className={`text-sm md:text-base ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <div className="flex items-center lg:w-[50%] md:w-[45%]">
              <Image
                src="./why1.svg"
                alt="illustration 1"
                height={1200}
                width={700}
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative flex p-8 justify-between lg:bottom-[30rem] md:bottom-[18rem]">
            <div className="flex items-center lg:w-[50%] md:w-[45%]">
              <Image
                src="./why2.svg"
                alt="illustration 2"
                height={1200}
                width={700}
                className="object-contain"
              />
            </div>
            <div className="text-white lg:w-[40%] md:w-[45%] flex flex-col justify-center">
              <div className="flex">
                <Image
                  src="./task.svg"
                  alt="task icon"
                  height={1200}
                  width={30}
                  className="m-1"
                />
                <h2 className="lg:text-2xl md:text-xl m-1">Track Your Digital Assessments</h2>
              </div>
              <p className={`text-sm md:text-base ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>

          <div className="relative flex p-12 justify-between lg:bottom-[45rem] md:bottom-[30rem]">
            <div className="text-white lg:w-[40%] md:w-[45%] flex flex-col justify-center">
              <div className="flex">
                <Image
                  src="./task.svg"
                  alt="task icon"
                  height={100}
                  width={30}
                  className="m-1"
                />
                <h2 className="lg:text-2xl md:text-xl m-1">Personal Task Management</h2>
              </div>
              <p className={`text-sm md:text-base ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <div className="flex items-center lg:w-[50%] md:w-[45%]">
              <Image
                src="./why3.svg"
                alt="illustration 3"
                height={1200}
                width={700}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className={`md:hidden flex flex-col h-auto ${alexandria.className}`}>
          <h1 className="text-white text-3xl text-center mt-4 font-extrabold">
            Why Choose Assignofast?
          </h1>
          <h1 className="text-red-600 text-lg text-center mt-4 font-semibold">
            ADVANTAGES
          </h1>

          <div className="flex flex-col items-center p-4">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center mb-4">
                <Image
                  src="./notifications.svg"
                  alt="notification icon"
                  height={100}
                  width={30}
                  className="mr-2"
                />
                <h2 className="text-xl text-white font-semibold">Clever Notifications</h2>
              </div>
              <p className={`text-white text-center ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <Image
              src="./why1.svg"
              alt="illustration 1"
              height={600}
              width={300}
            />

            <div className="flex flex-col items-center mb-8 mt-8">
              <div className="flex items-center mb-4">
                <Image
                  src="./task.svg"
                  alt="task icon"
                  height={100}
                  width={30}
                  className="mr-2"
                />
                <h2 className="text-xl text-white">Track Your Digital Assessments</h2>
              </div>
              <p className={`text-white text-center ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <Image
              src="./why2.svg"
              alt="illustration 2"
              height={600}
              width={300}
            />

            <div className="flex flex-col items-center mb-8 mt-8">
              <div className="flex items-center mb-4">
                <Image
                  src="./task.svg"
                  alt="task icon"
                  height={100}
                  width={30}
                  className="mr-2"
                />
                <h2 className="text-xl text-white">Personal Task Management</h2>
              </div>
              <p className={`text-white text-center ${abyssinica.className}`}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <Image
              src="./why3.svg"
              alt="illustration 3"
              height={600}
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
