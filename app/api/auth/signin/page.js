"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
        <p className="text-gray-500 text-center mb-6">
          Sign in to your account to continue
        </p>
        <button
          className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          onClick={() => signIn("google")}
        >
          <img
            src="/Google_logo.png"
            alt="Google Logo"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
