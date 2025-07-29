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

export default function Home() {
  return (
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
  );
}
