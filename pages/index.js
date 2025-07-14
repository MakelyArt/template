import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <header className="fixed top-0 w-full bg-white z-10 shadow py-4 px-6 flex justify-between">
        <div className="font-bold">Makely</div>
        <nav className="space-x-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
        </nav>
      </header>

      <section id="hero" className="h-screen snap-start flex items-center justify-center bg-white pt-20 px-6 text-center">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Claim Your Name. <br/> Own Your Art.</h1>
          <p className="text-lg text-gray-600 mb-8">Makely helps artists go live with a beautiful portfolio in seconds. No code. No stress.</p>
          <Link href="#how-it-works"><a className="bg-black text-white px-8 py-3 rounded-full">Get Started</a></Link>
        </div>
      </section>

      <section id="how-it-works" className="h-screen snap-start flex flex-col items-center justify-center bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl text-left">
          <div><h3 className="font-semibold mb-2">1. Enter Your Name</h3><p>Type your name and we’ll suggest a beautiful domain.</p></div>
          <div><h3 className="font-semibold mb-2">2. Launch Instantly</h3><p>Preview and publish your portfolio site in seconds.</p></div>
          <div><h3 className="font-semibold mb-2">3. Go Premium</h3><p>Upgrade anytime to use your own domain and customizations.</p></div>
        </div>
      </section>
    </div>
  );
}
