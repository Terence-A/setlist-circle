import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="flex flex-col justify-between h-72
       items-center mt-36"
      >
        <h1 className="text-amber-200 text-6xl w-1/2 flex-wrap text-center">
          Be fully prepared for both planned or spontaneous Jams
        </h1>
        <p className="text-stone-50 text-xl">
          Lorem ipsum dolor, iure vitae dolores ut doloremque? Cum mollitia at
          officiis harum!
        </p>
        <button className="bg-amber-400 text-xl text-stone-950 px-6 py-2 font-bold rounded-full">
          Join For Free
        </button>
      </section>
    </main>
  );
}
