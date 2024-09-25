import Image from "next/image";
export default function Features() {
  return (
    <>
      <div className="bg-[#00262D] h-screen p-4 text-center">
        <h1 className="text-[#CFEC9F] text-6xl mt-8">
          FEATURES OF ASSIGNOFAST
        </h1>
        <div className="h-[70vh] flex mt-16 justify-evenly m-8">
          <div className="flex items-center">
            <Image
              src="./phone.svg"
              alt="phone img"
              height={1200}
              width={500}
            />
          </div>
          <div className="flex flex-row h-[100%] items-center">
            <div className="relative text-black text-3xl h-[18rem] w-[18rem] bg-[#9AFC4F] rounded rounded-2xl hover:z-30 left-[9rem] p-4">
              DEADLINES
            </div>
            <div className="relative text-black text-3xl h-[18rem] w-[18rem] bg-[#D0FC4E] rounded rounded-2xl bottom-[2rem] z-20 p-4">
              TASKS
            </div>
            <div className="relative text-black text-3xl h-[18rem] w-[18rem] bg-[#CBFF83] rounded rounded-2xl  top-[3rem] right-[10rem] hover:z-20 p-4">
              NOTIFICATION
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
