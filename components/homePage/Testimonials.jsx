import Image from "next/image";
import React from "react";
import userImg from "../../public/TerenceArseneault.jpg";

const Testimonials = () => {
  return (
    <section className="flex justify-center gap-48 mt-20 ">
      <div className="flex flex-col items-start gap-6 w-72">
        <Image
          src={userImg}
          alt="user Image"
          width={200}
          className="rounded-full"
        />
        <p className="text-sm  text-start italic">
          &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          temporibus molestiae.&quot;
        </p>
        <div>
          <h2 className="font-bold">Terence Arseneault</h2>
          <p className="text-sm font-thin text-start">Member</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-72">
        <Image
          src={userImg}
          alt="user Image"
          width={200}
          className="rounded-full"
        />
        <p className="text-sm  text-start italic">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          temporibus molestiae.&quot;
        </p>
        <div>
          <h2 className="font-bold">Terence Arseneault</h2>
          <p className="text-sm font-thin text-start">Member</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-72">
        <Image
          src={userImg}
          alt="user Image"
          width={200}
          className="rounded-full"
        />
        <p className="text-sm  text-start italic">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          temporibus molestiae.&quot;
        </p>
        <div>
          <h2 className="font-bold">Terence Arseneault</h2>
          <p className="text-sm font-thin text-start">Member</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
