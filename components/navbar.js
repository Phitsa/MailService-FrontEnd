// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-44 h-screen bg-[#320b15] flex flex-col">
      <h2 className="text-white text-4xl font-light w-full h-1/5 flex items-center justify-center">
        Logo
      </h2>
      <ul className="flex flex-col items-center gap-4">
        <Link href="/home"className="text-[#FEC0CE] border-2 rounded w-4/5 px-3 py-2 border-[#FEC0CE]">
            Home
        </Link>
        <Link href="/dashboard" className="text-[#FEC0CE] border-2 rounded w-4/5 px-3 py-2 border-[#FEC0CE]">
            Dashboard
        </Link>
        <Link href="/contacts" className="text-[#FEC0CE] border-2 rounded w-4/5 px-3 py-2 border-[#FEC0CE]">
            Contacts
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
