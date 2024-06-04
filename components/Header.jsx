import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between bg-stone-800 text-stone-400 px-12 py-4 items-center shadow-md shadow-stone-700">
      <button>
        <Link href="/">
          <h1 className="text-amber-400 font-bold mr-4 text-2xl">
            Setlist Circle
          </h1>
        </Link>
      </button>

      <nav>
        <ul className="flex gap-20">
          <li className="duration-150 hover:text-stone-50">
            <Link href="/">Home</Link>
          </li>
          <li className="duration-150 hover:text-stone-50">
            <Link href="/setlists">Setlists</Link>
          </li>
          <li className="duration-150 hover:text-stone-50">
            <Link href="/songs">Songs</Link>
          </li>
          <li className="duration-150 hover:text-stone-50">
            <Link href="/circle">Your Circle</Link>
          </li>
          <li className="duration-150 hover:text-stone-50">
            <Link href="/userTools">Tools</Link>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-8">
        <button className="text-stone-900 bg-amber-400 px-6 py-1 font-bold rounded-full duration-150 hover:bg-amber-300 ">
          Join For Free
        </button>
        <button className="hover:text-stone-50 duration-150">Sign in</button>
      </div>
    </header>
  );
};

export default Header;
