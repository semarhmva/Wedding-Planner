import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import HomeAbout from "../components/home/HomeAbout";
import Footer from "../components/Footer";
import HomeServices from "../components/home/HomeServices";

import HomeBenefit from "../components/home/HomeBenefit";
import HomeVenues from "../components/home/HomeVenues";

const Home = () => {
  return (
    <section>
      <Hero />
      <HomeAbout/>
      <HomeServices/>
      <HomeBenefit/>
      <HomeVenues/>
      <Footer/>
    </section>
  );
};

export default Home;
