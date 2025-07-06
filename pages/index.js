import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Claim Your Name. <br className="hidden sm:inline" /> Own Your Art.
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
        Makely helps artists go live with a beautiful portfolio in seconds.
        No code. No stress.
      </p>

<Link href="#get-started">
  <a className="bg-black text-white text-lg font-medium px-8 py-3 rounded-full">
    Get Started
  </a>
</Link>

