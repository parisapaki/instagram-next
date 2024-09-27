"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex md:justify-around justify-between p-3 border-b sticky shadow-sm">
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
      {session ? (
        <Image
          src={session.user.image}
          alt="session"
          width="40"
          height="40"
          className="rounded-full"
          onClick={() => signOut()}
        />
      ) : (
        <button
          onClick={() => signIn()}
          className="text-blue-500 font-semibold"
        >
          Log In
        </button>
      )}
    </div>
  );
}
