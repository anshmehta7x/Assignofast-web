import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex text-white flex-col md:flex-row items-center md:justify-between justify-center p-8 gap-6">
        <div>
          <p>© 2024 Assignofast. All Rights Reserved.</p>
        </div>

        <div>
          <div className="flex gap-x-6">
            <img src="facebook.svg" alt="Facebook" />
            <img src="instagram.svg" alt="Instagram" />
            <img src="youtube.svg" alt="Youtube" />
            <img src="github.svg" alt="GitHub" />
            <img src="linkedin.svg" alt="LinkedIn" />
            <img src="twitter.svg" alt="Twitter" />
            <img src="medium.svg" alt="Medium" />
          </div>
        </div>

        <Link href="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>

        <Image src="./ieeecs-logo.svg" alt="logo" height={50} width={100} />
      </footer>
      <h1 className="text-[6rem] md:text-[12rem] lg:text-[20rem] font-bold text-[#E8DED5] text-center">
        IEEE-CS
      </h1>
    </>
  );
}
