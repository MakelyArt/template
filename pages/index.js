import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Makely</h1>
        <nav className="space-x-4">
          <a href="#hero" className="text-gray-600 hover:text-black">Home</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-black">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a>
          <a href="#about" className="text-gray-600 hover:text-black">About</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Section: Hero */}
      <section
        id="hero"
        className="h-screen snap-start flex flex-col items-center justify-center bg-white px-6 pt-20 text-center"
      >
        <h2 className="text-5xl font-extrabold mb-4">Claim Your Name. Own Your Art.</h2>
        <p className="text-xl text-gray-600 mb-8">Makely helps artists go live with a beautiful portfolio in seconds.</p>
        <Link href="#how-it-works">
          <a className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium">Get Started</a>
        </Link>
      </section>

      {/* Section: How It Works */}
      <section
        id="how-it-works"
        className="h-screen snap-start flex flex-col items-center justify-center bg-gray-50 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="max-w-4xl grid sm:grid-cols-3 gap-8 text-left">
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

      {/* Section: Pricing */}
      <section
        id="pricing"
        className="h-screen snap-start flex flex-col items-center justify-center bg-white px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <p className="text-lg text-gray-600 mb-4">Start free, upgrade when you're ready.</p>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Yourname.makely.art</p>
            <p>$0/month</p>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">Custom domain, more control</p>
            <p>$12/month or $120/year</p>
          </div>
        </div>
      </section>

      {/* Section: About */}
      <section
        id="about"
        className="h-screen snap-start flex flex-col items-center justify-center bg-gray-50 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Makely</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Makely was built to give artists their own online home — without the tech headache. Just plug in your name and share your creativity with the world.
        </p>
      </section>

      {/* Section: Contact */}
      <section
        id="contact"
        className="h-screen snap-start flex flex-col items-center justify-center bg-white px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
        <p className="text-gray-600 mb-6">Have questions? Reach out via email.</p>
        <a href="mailto:hello@makely.art" className="text-black underline font-medium">
          hello@makely.art
        </a>
      </section>
    </div>
  );
}
