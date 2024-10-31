import { Alexandria } from "next/font/google";
import Footer from "../components/FooterNew";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

export default function Guide() {
  const steps = [
    {
      number: 1,
      title: "Sign in with your VIT mail id",
      description:
        "Sign in using your VIT mail id. The mail id used here should be the same as the one used in the app.",
    },
    {
      number: 2,
      title: "Sign in to VTOP",
      description:
        "After signing in with your VIT mail, proceed to sign in to VTOP.",
    },
    {
      number: 3,
      title: "Wait for semester to load",
      description:
        "Wait for some time for the semester to load after login. If the semester option doesn't show up, try logging in again.",
    },
    {
      number: 4,
      title: "Choose semester and submit",
      description:
        "Choose the semester you want to get data from and submit. Unless you manually change it, the same semester DA will be automatically synced with every login.",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen bg-black text-white ${alexandria.className} pt-10`}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-3xl opacity-20"></div>

            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Assignofast Documentation
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-12">
                Step by Step Guide
              </h2>

              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#144c11] text-white font-bold text-xl">
                          {step.number}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {step.number <= 3 ? (
                          <div className="w-full h-48 md:h-[50vh] md:p-10 bg-[#144c11] bg-opacity-30 rounded-lg flex items-center justify-center relative overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <div className="relative w-full h-full">
                                <Image
                                  src={`/guide_${step.number}.png`}
                                  alt={step.title}
                                  className="rounded-lg"
                                  fill
                                  style={{ objectFit: "contain" }}
                                  priority
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>

                    {step.number !== steps.length && (
                      <div className="absolute left-6 top-24 h-24 w-0.5 bg-[#144c11] hidden md:block"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  href="chrome-extension://oenbdnejpfjgonicapclmcnhiglacaem/signin.html"
                  className="bg-[#144c11] hover:bg-[#1a5e15] transition-colors duration-200 px-6 py-3 rounded-lg text-white font-semibold"
                >
                  Back to Extension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
