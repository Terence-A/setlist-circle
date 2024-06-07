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
      <section className="bg-violet-950/50">
        <h1 className="text-stone-50 text-center text-2xl h-96">
          Features / Overview
        </h1>
      </section>
    </main>
  );
}
