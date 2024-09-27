import Image from "next/image";
import Landing from "./components/landing";
import What from "./components/What";
import Features from "./components/Features";
import Why from "./components/Why";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <What />
      {/* <Features /> */}
      <Why/>
    </>
  );
}
