import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center bg-white text-center px-6 snap-start">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Claim Your Name. <br /> Own Your Art.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Makely helps artists go live with a beautiful portfolio in seconds.
          No code. No stress.
        </p>
        <Link href="#how-it-works">
          <a className="bg-black text-white text-lg font-medium px-8 py-3 rounded-full">
            Get Started
          </a>
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="h-screen flex flex-col justify-center items-center bg-gray-100 snap-start px-6">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl text-left">
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
      </section>
    </div>
  );
}
