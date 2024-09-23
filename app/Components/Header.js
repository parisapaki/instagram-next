import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex md:justify-around justify-between p-3 border sticky shadow-sm">
      <Link href="/" className="grid content-center">
        <span>
          <Image
            src="/instagram-logo.webp"
            width={40}
            height={40}
            className="md:hidden"
          />
          <Image
            src="/instagram-text.webp"
            width={96}
            height={30}
            className="hidden md:inline"
          />
        </span>
      </Link>

      <input
        type="text"
        placeholder="Search"
        className="border py-1 px-4 rounded-md bg-gray-100"
      />

      <button className="text-blue-500 font-semibold">Log In</button>
    </div>
  );
}
