import Navabr from "../components/Navabr";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Benifits from "../components/Home/Benifits";
import Testimonial from "../components/Home/Testimonial";
import ProPlan from "../components/Home/ProPlan";
import Pricing from "../components/Home/Pricing";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";
import GoToTopButton from "../components/GoToTopButton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Art. Instantly Online | Makely – Websites for Artists</title>
        <meta
          name='description'
          content='Makely helps artists launch a stunning websites in seconds — no code, no hassle. Share your art, build your brand, and get discovered faster.'
        />
        <meta property='og:title' content='Your Art. Instantly Online | Makely' />
        <meta
          property='og:description'
          content='Create a beautiful website instantly and showcase your art to the world. With Makely, you can go live in seconds — no code required.'
        />
        <meta property='og:url' content='https://www.makely.art' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://www.makely.art' />
      </Head>
      <div className='w-full mx-auto bg-[#f8f9fa] overflow-x-hidden'>
        <Navabr />
        <Hero />
        <HowItWorks />
        <Benifits />
        <Banner />
        <Testimonial />
        <ProPlan />
        <Pricing />
        <GoToTopButton />
        <Footer />
      </div>
    </>
  );
}
