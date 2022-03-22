import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import InfoSection from "../infoSection";
// import { homeObjTwo } from "../infoSection/Data";
import {
  Foot,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = ({ toggle }) => {
  const [scrollFoot, setScrollFoot] = useState(false);
  const changeFoot = () => {
    if (window.scrollY >= 80) {
      setScrollFoot(true);
    } else {
      setScrollFoot(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeFoot);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const toggleComposer = () => {
    scroll.scrollTo(InfoSection);
  };
  return (
    <>
      <Foot scrollFoot={scrollFoot}>
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                  <FooterLink to={InfoSection} onClick={toggleComposer}>
                    Composer
                  </FooterLink>
                  <FooterLink to="producer">Producer</FooterLink>
                  <FooterLink to="musician">Musican</FooterLink>
                  <FooterLink to="/testimonials">Testimonials</FooterLink>
                  <FooterLink to="/contact">Clients</FooterLink>
                  <FooterLink to="/contact">Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Media</FooterLinkTitle>
                  <FooterLink to="/contact">Music</FooterLink>
                  <FooterLink to="/contact">Videos</FooterLink>
                  <FooterLink to="/contact">Library</FooterLink>
                  <FooterLink to="/contact">Gallery</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to="/contact">Contact Form</FooterLink>
                  <FooterLink to="/contact">Email</FooterLink>
                  <FooterLink to="/contact">Phone</FooterLink>
                  <FooterLink to="/contact">Map</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink
                    to="//www.instagram.com/ollygorman"
                    target="blank"
                  >
                    Instagram
                  </FooterLink>
                  <FooterLink to="//www.facebook.com/ollygorman" target="blank">
                    Facebook
                  </FooterLink>
                  <FooterLink to="//www.youtube.com/ollygorman" target="blank">
                    YouTube
                  </FooterLink>
                  <FooterLink
                    to="//mobile.twitter.com/ollygormanmusic/"
                    target="blank"
                  >
                    Twitter
                  </FooterLink>
                  <FooterLink to="//soundcloud.com/olly-gorman" target="blank">
                    SoundCloud
                  </FooterLink>
                  <FooterLink
                    to="//open.spotify.com/artist/4B4K1QdItS479GUXZPuZeB"
                    target="blank"
                  >
                    Spotify
                  </FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to="/" onClick={toggleHome}>
                  Olly Gorman
                </SocialLogo>
                <WebsiteRights>
                  Olly Gorman &copy; {new Date().getFullYear()} All Rights
                  reserved.
                </WebsiteRights>
                <SocialIcons>
                  <SocialIconLink
                    href="//www.facebook.com/ollygorman"
                    target="blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//open.spotify.com/artist/4B4K1QdItS479GUXZPuZeB"
                    target="blank"
                    aria-label="Spotify"
                  >
                    <FaSpotify />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.instagram.com/ollygorman"
                    target="blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.youtube.com/ollygorman"
                    target="blank"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//mobile.twitter.com/ollygormanmusic/"
                    target="blank"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
      </Foot>
    </>
  );
};

export default Footer;
