import Features from "@/components/homePage/Features";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-[700px] mt-36  ">
        <div className="flex flex-col justify-between  items-center h-80">
          <h1 className="text-amber-200 text-6xl w-1/2 flex-wrap text-center">
            Be fully prepared for both planned or spontaneous Jams
          </h1>
          <p className="text-stone-50 text-xl">
            Learn full songs! not just the riffs.
          </p>
          <button className="bg-amber-400 text-xl text-stone-950 px-6 py-2 font-bold rounded-full">
            Join For Free
          </button>
        </div>
      </section>
      <section className="bg-violet-950/50 h-96">
        <h1 className="text-stone-50 text-center text-2xl pt-12 ">
          Features / Overview
        </h1>
        <Features />
      </section>
      <section className="h-96">
        <h1 className="text-stone-50 text-2xl text-center">How it works</h1>
      </section>
      <section className="h-96">
        <h1 className="text-stone-50 text-2xl text-center">
          User Testimonials
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
          Join For Free
        </button>
      </section>
      <section className="h-96 bg-stone-800">
        <h1 className="text-stone-50 text-2xl text-center">Footer</h1>
      </section>
    </main>
  );
}
