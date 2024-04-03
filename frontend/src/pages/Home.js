import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/layouts/Footer";
const home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Hotel Elite"
          subtitle="cheaper rooms starting at Rs.1500.00">
          <Link to="/cuslogin" className="btn-home-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <Footer />
    </div>
  );
};

export default home;
