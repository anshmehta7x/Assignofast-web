import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Footer() {
    return (
        <div className={`h-[80vh] lg:h-[70vh] w-full bg-black overflow-hidden ${abyssinica.className}`}>
            <div className="h-[70vh] lg:h-[70vh] w-[90vw] flex flex-wrap ml-[5vw] bg-[#002610] mt-[5vh] lg:mt-[10vh] rounded-2xl">
                <div className="w-[200vw] lg:w-[35vw] mt-[5vh] lg:mt-[10vh] ml-[5vw] mr-[5vw]">
                    <p className={`text-[3vh] lg:text-[7vh] text-white mb-[2vh] lg:mb-[4vh] ${alexandria.className}`}>Download Assignofast</p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut 
                    </p>
                    <button className="bg-[#B8F80C] font-extrabold text-black px-6 py-2 mt-[5vh] rounded-lg hover:bg-[#A7E70B]">
                        Get Started
                    </button>
                </div>
                <img src="footer.svg" alt="Footer Graphic" className="hidden lg:block max-w-full h-[70vh]" />
                <img src="footer-mobile.svg" alt="Footer Graphic" className="block lg:hidden px-8 max-w-full h-[35vh]" />
            </div>

        </div>
    );
}
