import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center bg-white text-center px-6 snap-start">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Your Art, Instantly Online.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Makely helps artists go live with a beautiful portfolio in seconds. No code. No stress.
        </p>
        <Link href="#how-it-works">
          <a className="bg-black text-white text-lg font-medium px-8 py-3 rounded-full transition-transform duration-200 hover:scale-105">
            Get Started
          </a>
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 snap-start px-6"
      >
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Enter Your Name</h3>
            <p className="text-gray-700">
              Type your name and we’ll suggest a beautiful domain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Launch Instantly</h3>
            <p className="text-gray-700">
              Preview and publish your portfolio site in seconds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Go Premium</h3>
            <p className="text-gray-700">
              Upgrade anytime to use your own domain and customizations.
            </p>
          </div>
        </div>
      </section>
          {/* FEATURES SECTION */}
<section
  id="features"
  className="min-h-screen flex flex-col justify-center bg-white snap-start px-6 py-24"
>
  <div className="max-w-[1200px] mx-auto">
    <h2 className="text-4xl font-bold mb-16 text-center heading-alt">Everything You Need to Launch</h2>

    {/* Feature 1 */}
    <div className="flex flex-col md:flex-row items-center mb-24 gap-10">
      <div className="md:w-1/2">
        <img
          src="/features/step1.svg"
          alt="Instant portfolio creation"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Go Live in Seconds</h3>
        <p className="text-gray-600 text-lg">
          Artists deserve more time to create—not code. With Makely, you can launch a fully responsive portfolio just by typing your name.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-24 gap-10">
      <div className="md:w-1/2">
        <img
          src="/features/step2.svg"
          alt="Domain suggestions"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Custom Domain Suggestions</h3>
        <p className="text-gray-600 text-lg">
          No more domain guesswork. We automatically suggest beautiful domain names based on your artist name or brand.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <img
          src="/features/step3.svg"
          alt="Professional templates"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Professional Templates</h3>
        <p className="text-gray-600 text-lg">
          Choose from modern, elegant templates designed specifically for visual artists. Responsive, customizable, and built to showcase your work.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
