import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* NAVIGATION */}
      <header className="fixed top-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Makely</div>
        <nav className="space-x-6 hidden sm:flex">
          <a href="#hero" className="text-gray-800 hover:underline">Home</a>
          <a href="#how-it-works" className="text-gray-800 hover:underline">How It Works</a>
          <a href="#templates" className="text-gray-800 hover:underline">Templates</a>
          <a href="#testimonials" className="text-gray-800 hover:underline">Testimonials</a>
          <a href="#why-makely" className="text-gray-800 hover:underline">Why Makely?</a>
          <a href="#pricing" className="text-gray-800 hover:underline">Pricing</a>
          <a href="#cta" className="text-gray-800 hover:underline">Start</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="h-screen snap-start flex flex-col items-center justify-center bg-white text-center px-6 pt-20">
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
      <section id="how-it-works" className="h-screen snap-start flex flex-col justify-center items-center bg-gray-50 px-6">
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

      {/* TEMPLATE PREVIEW SECTION */}
      <section id="templates" className="h-screen flex flex-col justify-center items-center bg-white snap-start px-6">
        <h2 className="text-3xl font-bold mb-8">Preview Templates</h2>
        <p className="text-gray-600 mb-4">Choose from clean, modern templates — ready to go live in seconds.</p>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-64 h-40 bg-gray-200 rounded shadow-md"></div>
          <div className="w-64 h-40 bg-gray-200 rounded shadow-md"></div>
          <div className="w-64 h-40 bg-gray-200 rounded shadow-md"></div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="h-screen flex flex-col justify-center items-center bg-gray-50 snap-start px-6">
        <h2 className="text-3xl font-bold mb-8">What Artists Say</h2>
        <div className="max-w-3xl text-center">
          <p className="text-xl italic mb-4">"Makely made it effortless to launch my online portfolio."</p>
          <p className="text-gray-600">— Amina Khalid, Digital Artist</p>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section id="why-makely" className="h-screen flex flex-col justify-center items-center bg-white snap-start px-6">
        <h2 className="text-3xl font-bold mb-8">Why Makely?</h2>
        <ul className="text-lg text-left space-y-4 max-w-xl">
          <li>✅ Built for artists, no code needed</li>
          <li>✅ Fast setup with beautiful results</li>
          <li>✅ Custom domains and premium features</li>
          <li>✅ Scales with your career</li>
        </ul>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="h-screen flex flex-col justify-center items-center bg-gray-50 snap-start px-6">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid sm:grid-cols-2 gap-10 text-left">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
            <p className="mb-4">Subdomain site (e.g., john.makely.art)</p>
            <p>$0/month</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
            <p className="mb-4">Custom domain + premium layout + priority support</p>
            <p>$12/month or $120/year</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta" className="h-screen flex flex-col justify-center items-center bg-black text-white snap-start px-6">
        <h2 className="text-3xl font-bold mb-6">Start Your Portfolio Today</h2>
        <p className="text-lg mb-8">Claim your name, pick a template, and go live.</p>
        <Link href="#hero">
          <a className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium">Claim Your Free Site</a>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500 snap-start">
        <p>© 2025 Makely. Built with love for artists worldwide.</p>
      </footer>
    </div>
  );
}
