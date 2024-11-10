"use client"
import Image from "next/image";

export default function Home() {
  return (
<>
<Header>
  <div className="flex justify-center items-center h-screen">
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={200}
      height={200}
      className="rounded-full"
    />
  </div>
  <div className="flex flex-col items-center justify-center mt-10">
    <h1 className="text-4xl font-bold text-gray-900">Welcome to Olostore</h1>
    <p className="text-2xl text-gray-700">
      The ultimate platform for your online store.
    </p>
    <button className="mt-5 bg-[#1aba1a] hover:bg-[#258d25] text-white font-bold py-3 px-10 rounded-md">
      Sign Up
    </button>
  </div>
</Header>
</>
  );
}
