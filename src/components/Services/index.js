import React from "react";
import { Link } from "react-scroll";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/2.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Session Musician</ServicesH2>
            <ServicesP>
              I am available for multi-Instrumentalist session work for the
              studio or touring, get in touch for prices and availability.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Film Scores</ServicesH2>
            <ServicesP>
              I am available for film and TV scoring, From full feature length
              Films and TV shows to adverts and sound bites. Please check out my
              library for more work!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Production Services</ServicesH2>
            <ServicesP>
              My Studio is avaiable for recording artsists to writing new
              material and demoing new songs, please get in touch for more
              information.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <Link to="/contact">Get In Touch!</Link>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
