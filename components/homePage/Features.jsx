import React from "react";

const Features = () => {
  return (
    <section className="flex justify-center gap-12 mt-36">
      <div className="text-stone-50 w-64 h-44 flex flex-col items-center justify-between ">
        <div>
          <h2 className="font-bold text-center pb-2 text-xl">
            Centralized Resources
          </h2>
          <p className="text-sm font-thin text-center">
            Stop wasting time searching for the same tabs, lyrics and tutorials.
            Have them ready to go with a click of the button
          </p>
        </div>

        <button className="text-stone-50 border border-stone-50 w-1/2 rounded-full text-sm py-1 mx-auto font-bold hover:text-violet-950 hover:bg-stone-50 duration-100">
          Get Started
        </button>
      </div>
      <div className="text-stone-50 w-64 h-44 flex flex-col items-center justify-between ">
        <div>
          <h2 className="font-bold text-center pb-2 text-xl">
            Managed Setlist
          </h2>
          <p className="text-sm font-thin text-center">
            Create and manage your own setlist with songs you are learning and
            completed.
          </p>
        </div>

        <button className="text-stone-50 border border-stone-50 w-1/2 rounded-full text-sm py-1 mx-auto font-bold hover:text-violet-950 hover:bg-stone-50 duration-100">
          Get Started
        </button>
      </div>
      <div className="text-stone-50 w-64 h-44 flex flex-col items-center justify-between ">
        <div>
          <h2 className="font-bold text-center pb-2 text-xl">Colaboration</h2>
          <p className="text-sm font-thin text-center">
            Link songs with friends in your Circle, and find songs to jam with.
          </p>
        </div>

        <button className="text-stone-50 border border-stone-50 w-1/2 rounded-full text-sm py-1 mx-auto font-bold hover:text-violet-950 hover:bg-stone-50 duration-100">
          Get Started
        </button>
      </div>
      <div className="text-stone-50 w-64 h-44 flex flex-col items-center justify-between ">
        <div>
          <h2 className="font-bold text-center pb-2 text-xl">
            Tools and Resources
          </h2>
          <p className="text-sm font-thin text-center">
            Links to metronome, tuner and other useful tools. Or just set a
            practice timer and improve your skills.
          </p>
        </div>

        <button className="text-stone-50 border border-stone-50 w-1/2 rounded-full text-sm py-1 mx-auto font-bold hover:text-violet-950 hover:bg-stone-50 duration-100">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Features;
