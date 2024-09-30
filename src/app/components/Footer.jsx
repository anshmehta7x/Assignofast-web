export default function Footer() {
    return (
        <div className="h-[160vh] lg:h-[130vh] w-full bg-[#00171C] overflow-hidden">
            <div className="h-[100vh] lg:h-[70vh] w-[90vw] flex flex-wrap ml-[5vw] bg-[#002610] mt-[10vh] rounded-2xl">
                <div className="w-full lg:w-[35vw] mt-[10vh] ml-[5vw] mr-[5vw]">
                    <p className="text-[7vh] text-white mb-[4vh]">Download Assignofast</p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut 
                    </p>
                    <button className="bg-[#B8F80C] text-black px-6 py-2 mt-[5vh] rounded-lg hover:bg-[#A7E70B]">
                        Get Started
                    </button>
                </div>
                <img src="footer.svg" alt="Footer Graphic" className="hidden lg:block max-w-full h-[70vh]" />
                <img src="footer-mobile.svg" alt="Footer Graphic" className="block lg:hidden px-8 max-w-full h-[50vh]" />
                
            </div>

            <div className="flex flex-wrap gap-x-4 mt-[10vh] ml-[5vw] text-white w-full">
                <div className="flex flex-row lg:flex-col w-full lg:w-[25vw] items-start">
                    <img src="ieeecs-logo.svg" alt="IEEECS Logo" />
                    <p className="flex-row lg:text-[3vh] mt-2">Accrete Your Knowledge</p>
                    <div className="flex gap-x-3 mt-4">
                        <img src="facebook.svg" alt="Facebook" />
                        <img src="twitter.svg" alt="Twitter" />
                        <img src="instagram.svg" alt="Instagram" />
                        <img src="linkedin.svg" alt="LinkedIn" />
                    </div>
                </div>

                <div className="flex flex-row lg:flex-col w-full lg:w-[15vw] gap-y-3">
                    <p className="cursor-pointer hover:text-[#B8F80C]">Menu</p>
                    <p className="cursor-pointer hover:text-[#B8F80C]">About</p>
                    <p className="cursor-pointer hover:text-[#B8F80C]">Events</p>
                    <p className="cursor-pointer hover:text-[#B8F80C]">Team</p>
                    <p className="cursor-pointer hover:text-[#B8F80C]">Blog</p>
                </div>

                <div className="flex flex-row lg:flex-col w-full lg:w-[15vw] gap-y-3">
                    <p>Contact Us</p>
                    <p>ieeecs@vit.ac.in</p>
                    <p>+91 9647272456</p>
                </div>

                <div className="flex flex-row lg:flex-col w-full lg:w-[30vw]">
                    <p>
                        We, here at IEEES, nurture the coders and leaders of tomorrow. We empower and support 
                        new ideas giving them a platform to shine. IEEES has been a home to great ideas capable 
                        of bringing a better future for all.
                    </p>
                </div>
            </div>

            <div className="text-center mt-8 text-white">
                <p>© 2024 Assignofast. All rights reserved</p>
            </div>
        </div>
    );
}
