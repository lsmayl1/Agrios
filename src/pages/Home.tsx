import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../assets/css/Global.css";
import ServicesSection from "../components/ServicesSection";
import VideoSection from "../components/VideoSection";
import RecentlyProjects from "../components/RecentlyProjects";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import News from "../components/News";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <VideoSection />
      <RecentlyProjects />
      <Testimonials />
      <Benefits />
      <News />
      <Footer />
    </>
  );
}

export default Home;
