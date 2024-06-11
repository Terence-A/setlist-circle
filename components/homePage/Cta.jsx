import Image from "next/image";

import centralizedImg from "../../public/centralized.png";
import setlistsImg from "../../public/setlists.png";
import trackerImg from "../../public/tracker.png";
import jammingImg from "../../public/jamming.png";
import communityImg from "../../public/community.png";

const Cta = () => {
  return (
    <section>
      <h1>Why Join Setlist Circle?</h1>
      <div className="flex  items-center justify-center gap-48 py-8 mr-20 ">
        <Image
          src={centralizedImg}
          alt="icon of silouette of person with branches of dots"
        />
        <div>
          <h2 className="text-3xl text-stone-50 font-semibold mb-4">
            Centralized Resources:{" "}
          </h2>
          <p className="text-sm text-stone-50">
            Access your saved tabs, lyrics and tutorials in one place.
          </p>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-48 py-12 ml-20 ">
        <div>
          <h2 className="text-3xl text-stone-50 font-semibold mb-4">
            Easy Setlist Management:
          </h2>
          <p className="text-sm text-stone-50">
            Create and track setlists effortlessly.
          </p>
        </div>
        <Image
          src={setlistsImg}
          alt="icon of silouette of person with branches of dots"
        />
      </div>
      <div className="flex  items-center justify-center gap-48 py-8 mr-20 ">
        <Image
          src={trackerImg}
          alt="icon of silouette of person with branches of dots"
        />
        <div>
          <h2 className="text-3xl text-stone-50 font-semibold mb-4">
            Progress Tracking:
          </h2>
          <p className="text-sm text-stone-50">
            Monitor your learning progress for each song and instrument.
          </p>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-48 py-12 ml-20">
        <div>
          <h2 className="text-3xl text-stone-50 font-semibold mb-4">
            Collaborative Jamming:
          </h2>
          <p className="text-sm text-stone-50">
            See what songs your friends know and plan seamless jam sessions.
          </p>
        </div>
        <Image
          src={jammingImg}
          width={350}
          alt="icon of silouette of person with branches of dots"
        />
      </div>
      <div className="flex  items-center justify-center gap-48 py-8  ">
        <Image
          src={communityImg}
          alt="icon of silouette of person with branches of dots"
        />
        <div>
          <h2 className="text-3xl text-stone-50 font-semibold mb-4">
            Community Engagement:
          </h2>
          <p className="text-sm text-stone-50">
            Connect with a community of musicians, share your progress, and stay
            motivated.
          </p>
        </div>
      </div>

      <button className="text-3xl text-stone-900 bg-amber-400 px-6 py-1 font-bold rounded-full duration-150 hover:bg-amber-300 hidden xl:block mx-auto my-20">
        Join For Free
      </button>
    </section>
  );
};

export default Cta;
