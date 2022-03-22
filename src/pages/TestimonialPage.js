import React from "react";
import HeroSlider from "../Testimonials/components/HeroSlider";
import Header from "../Testimonials/components/Header";

// import ScrollToTop from "../components/Contact/ScrollToTop";
// import { Icon } from "../components/Contact/ContactElememts";
const TestimonialPage = () => {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0">
              <Header />
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialPage;
