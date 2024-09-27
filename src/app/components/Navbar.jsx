"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed flex items-center justify-between bg-transparent h-[8vh] md:h-[10vh] px-2 md:px-10 w-full z-[1000]">
            <div className="flex flex-row gap-4 items-center">
                <Link href="/">
                    <Image
                        src="assignofast-logo.svg"
                        width={36}
                        height={36}
                        alt="ASSIGNOFAST Logo"
                    />
                </Link>
                <a href="/" className="text-[#BBFE03] inline">ASSIGNOFAST</a>
            </div>

            {/* Centered Navigation Links */}
            <ul className="hidden md:flex flex-grow justify-center items-center lg:gap-12 md:gap-6 text-white font-bold tracking-wider">
                <Link href="/">
                    <li className="hover:underline">Home</li>
                </Link>
                <Link href="/product">
                    <li className="hover:underline">Product</li>
                </Link>
                <Link href="/company">
                    <li className="hover:underline">Company</li>
                </Link>
            </ul>

            <div className="flex gap-4 p-4 lg:px-4 md:p-0">
                <button className="md:hidden block" onClick={toggleMenu}>
                    <Image
                        src={isMenuOpen ? "cross-icon.svg" : "burger-menu.svg"}
                        width={30}
                        height={30}
                        alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                    />
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center font-bold font-pixeboy z-[1001]">
                    <button className="absolute top-5 right-5" onClick={toggleMenu}>
                        <Image
                            src="cross-icon.svg"
                            width={75}
                            height={75}
                            alt="Close Menu"
                        />
                    </button>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-8 mt-12">
                        <Link href="/">
                            <li className="hover:underline">Home</li>
                        </Link>
                        <Link href="/product">
                            <li className="hover:underline">Product</li>
                        </Link>
                        <Link href="/company">
                            <li className="hover:underline">Company</li>
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    )
}
