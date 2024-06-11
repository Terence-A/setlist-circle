import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between border-b border-b-stone-50/30 pb-36">
      <div className="w-96 flex flex-col gap-4 ">
        <h1 className="text-stone-50 text-2xl font-bold">Setlist Circle</h1>
        <p className="text-stone-400 text-xs">
          An innovative platform designed for musicians who want to learn
          complete songs efficiently and collaboratively. It serves as a
          centralized hub where users can organize all their song resources,
          including tabs, lyrics, and tutorials, in one convenient place.
          Setlist Circle helps musicians stay on track by managing their
          setlists, tracking progress on different instruments and lyrics, and
          highlighting songs they share with friends. Perfect for jam sessions
          and spontaneous collaborations, it fosters a community of musicians
          who can see what others are learning, practice together, and achieve
          their musical goals more effectively.
        </p>
      </div>
      <div className="flex gap-20">
        <div>
          <h2 className="text-lg font-semibold text-stone-50">
            Help and advice
          </h2>
          <div className="mt-6">
            <ul className="text-xs space-y-2 text-stone-400">
              <li>Contact us</li>
              <li>FAQ</li>
              <li>Legal & Privacy</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-stone-50">About us</h2>
          <div className="mt-6">
            <ul className="text-xs space-y-2 text-stone-400">
              <li>About Setlist Circle</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-stone-50">
            Stay up to date
          </h2>
          <div className="mt-6">
            <div className="flex gap-1">
              <input
                type="email"
                className="text-stone-950 text-sm px-2 rounded-md"
              />
              <button className="bg-amber-600 px-2 rounded-md">&#10132;</button>
            </div>
            <p className="text-xs text-stone-400 mt-1">
              Subscribe to newsletter for updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
