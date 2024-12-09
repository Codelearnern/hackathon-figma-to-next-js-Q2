

import Link from "next/link";

function Header() {
  return (
    <div>
      {/* Top part of the header */}
      <div>
        <ul className="flex justify-end bg-gray-100 p-1">
          <li className="border-r-2 border-black pr-4 mr-2 last:border-r-0">
            <Link href="/">Find a Store</Link>
          </li>
          <li className="border-r-2 border-black pr-4 mr-2 last:border-r-0">
            <Link href="/Help">Help</Link>
          </li>
          <li className="border-r-2 border-black pr-4 mr-2 last:border-r-0">
            <Link href="/JoinUs">Join Us</Link>
          </li>
          <li className="pr-4">
            <Link href="/Sign-In">Sign In</Link>
          </li>
        </ul>
      </div>

      {/* Middle part of the header */}
      <div className="bg-white py-3">
        <ul className="flex justify-center gap-6 text-lg">
          <li>
            <Link href="/Aproduct">New & Featured</Link>
          </li>
          <li>
            <Link href="/Men">Men</Link>
          </li>
          <li>
            <Link href="/Women">Women</Link>
          </li>
          <li>
            <Link href="/Kids">Kids</Link>
          </li>
          <li>
            <Link href="/Sale">Sale</Link>
          </li>
          <li>
            <Link href="/SNKRS">SNKRS</Link>
          </li>
        </ul>
      </div>


    </div>
  );
}

export default Header;


