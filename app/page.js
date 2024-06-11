import Features from "@/components/homePage/Features";
import Footer from "@/components/homePage/Footer";
import HowItWorks from "@/components/homePage/HowItWorks";
import Testimonials from "@/components/homePage/Testimonials";
import Image from "next/image";

import facebookImg from "../public/facebook.png";
import snapchatImg from "../public/snapchat.png";
import githubImg from "../public/github.png";
import linkedInImg from "../public/linkedin.png";

export default function Home() {
  return (
    <main>
      <section className="h-[700px] mt-36  ">
        <div className="flex flex-col h-full pb-20 justify-between  items-center">
          <div className="flex flex-col items-center justify-between h-80 ">
            <h1 className="text-amber-200 text-6xl font-bold w-1/2 flex-wrap text-center">
              Be fully prepared for both planned or spontaneous Jams
            </h1>
            <p className="text-stone-50 text-xl">
              Learn full songs! not just the riffs.
            </p>
            <button className="bg-amber-400 text-xl text-stone-950 px-6 py-2 font-bold rounded-full">
              Join For Free
            </button>
          </div>

          <ul className="flex gap-20 text-3xl">
            <li className="text-stone-50">Sponsor</li>
            <li className="text-stone-50">Sponsor</li>
            <li className="text-stone-50">Sponsor</li>
            <li className="text-stone-50">Sponsor</li>
            <li className="text-stone-50">Sponsor</li>
          </ul>
        </div>
      </section>
      <section className="bg-violet-950/50 h-[500px]">
        <h1 className="text-stone-50 text-center text-2xl pt-12 ">
          Features / Overview
        </h1>
        <Features />
      </section>
      <section className="h-96 mb-36">
        <HowItWorks />
      </section>
      <section className="h-[500px] bg-gradient-to-r from-amber-400/5 to-amber-700/15 ">
        <h1 className="text-stone-50 text-2xl text-center h-full flex items-center justify-center">
          <Testimonials />
        </h1>
      </section>
      <section className="h-96">
        <h1 className="text-stone-50 text-2xl text-center">
          Community and Social Proof
        </h1>
      </section>
      <section className="h-52 flex flex-col items-center bg-violet-950">
        <h1 className="text-stone-50 text-2xl text-center">
          Call to action section
        </h1>
        <button className="text-stone-900 bg-amber-400 px-6 py-1 font-bold rounded-full duration-150 hover:bg-amber-300 hidden xl:block ">
          <h1></h1>
          Join For Free
        </button>
      </section>
      <section className="bg-stone-800 h-full pt-20 pb-5 px-36">
        <h1 className="text-stone-50 text-2xl ">
          <Footer />
          <div className="mt-4 flex items-center justify-between">
            <p className="text-stone-300 text-sm">&#169; Setlist Circle 2024</p>
            <div className="flex gap-6">
              <button>
                <Image src={facebookImg} alt="facebook logo" width={30} />
              </button>
              <button>
                <Image src={githubImg} alt="github logo" width={30} />
              </button>
              <button>
                <Image src={snapchatImg} alt="snapchat logo" width={30} />
              </button>
              <button>
                <Image src={linkedInImg} alt="linkedIn logo" width={30} />
              </button>
            </div>
          </div>
        </h1>
      </section>
    </main>
  );
}
