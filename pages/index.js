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
    <div className="mt-16" /> {/* Adds space below the button */}
    <section className="py-16 bg-gray-50" id="how-it-works">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-8">How It Works</h2>
    <div className="grid sm:grid-cols-3 gap-8 text-left">
      <div>
        <h3 className="text-xl font-semibold mb-2">1. Enter Your Name</h3>
        <p>Type your name and we’ll suggest a beautiful domain.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">2. Launch Instantly</h3>
        <p>Preview and publish your portfolio site in seconds.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">3. Go Premium</h3>
        <p>Upgrade anytime to use your own domain and customizations.</p>
      </div>
    </div>
  </div>
</section>
</div>
  );
}
