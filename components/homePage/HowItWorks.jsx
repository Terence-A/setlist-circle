import howItWorks from "@/siteData/howItWorks";
import Image from "next/image";
import heroImg from "../../public/band.png";

const HowItWorks = () => {
  return (
    <section>
      <div className="flex  justify-center items-center gap-36  mt-12">
        <Image src={heroImg} alt="hero Image" width={500} />
        <div>
          <ul className="flex flex-col gap-4 ">
            {howItWorks.map((item) => (
              <li key={item.id}>
                <div className="flex gap-4 items-center ">
                  <h2 className="text-amber-600 text-2xl font-bold">
                    Step {item.id}:{" "}
                  </h2>
                  <p className="text-stone-50">{item.step}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex justify-center gap-20 mt-20 ">
        <li className="text-stone-50 text-2xl">
          <span className="text-amber-500"> &#10004; </span> Always Free
        </li>
        <li className="text-stone-50 text-2xl">
          <span className="text-amber-500"> &#10004; </span> Be Prepared
        </li>
        <li className="text-stone-50 text-2xl">
          <span className="text-amber-500"> &#10004; </span> Stay on Track
        </li>
        <li className="text-stone-50 text-2xl">
          <span className="text-amber-500"> &#10004; </span> Keep Motivated
        </li>
        <li className="text-stone-50 text-2xl">
          <span className="text-amber-500"> &#10004; </span> Have Fun
        </li>
      </ul>
    </section>
  );
};

export default HowItWorks;
