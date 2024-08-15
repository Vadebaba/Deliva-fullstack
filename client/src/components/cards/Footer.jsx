import React from "react";
import styled from "styled-components";
import SocialX from "../../utils/Images/social-x.svg"
import SocialLinkedIn from "../../utils/Images/social-linkedin.svg";
import SocialInsta from "../../utils/Images/social-insta.svg";
import SocialPin from "../../utils/Images/social-pin.svg";
import SocialYoutube from "../../utils/Images/social-youtube.svg";
import { Link as LinkR } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Foot = styled.div`  
    max-width: 81.5rem;

  @media (min-width: 768px) {    
        max-height: 848px;
}

@media (min-width: 640px) {
       margin: .5rem; 
}
`;

const Foote = styled.div`
position:relative;

`;

const Div = styled.div`
display:flex;
flex-direction:column;
gap:8px;
text-decoration: none;
`;

const Section = styled.div`
border: 3px solid #847c7c;
    border-width: 1px 0px 0px;
    border-radius: 2px;
    padding-top:2rem;
`;


const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  color:#a3c80f ;
`;

const Container = styled.div`  
  display:grid;
  gap:2rem;
  padding: .5rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
  grid-template-columns: 1fr .5fr .5fr;
  }

  @media (min-width: 640px) {
        padding: 2rem;            
    }
`;

const Subcon = styled.div`  
 flex-direction: column;
 display:flex;
  gap:.5rem;
  padding-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
  gap: .5rem;
  display: flex;
align-items: center;

  }

  @media (min-width: 640px) {
        padding: 2rem;            
    }
`;

const Social = styled.div`
display:flex;
gap:.5rem;
`;

const Con = styled.div`  
  flex-direction: column;
  display: flex;
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    
  }
  
`;
const Para = styled.div`
padding-right: 4rem;
  color: black;
  font-weight: 500;
  &:hover {
    
  }
  
`;



const Footer = () => {

  return (
  <Foot>
      <Foote>
        <Section>
          <Container>
            <Con>
              <NavLogo to="/">
                <h1>Deliva</h1>
              </NavLogo>

              <Para>
                Deliva is your go-to app for getting food and groceries delivered straight to your door.
                Enjoy convenience at your fingertips with real-time tracking and secure payments.
              </Para>
            </Con>

            <Div>
              <h5>Website</h5>
              <Navlink to="/">Home</Navlink>
              <Navlink to="/dishes">Dishes</Navlink>
              <Navlink to="/orders">Orders</Navlink>
              <Navlink to="/About">Dishes</Navlink>
              <Navlink to="/">Help</Navlink>
            </Div>

            <Div>
              <h5>Legal</h5>
              <Navlink to="/terms-of-service">Privacy Policy</Navlink>
              <Navlink to="/">Terms of Service</Navlink>
              <Navlink to="/cookie-policy">Cookie Policy</Navlink>
            </Div>

          </Container>

          <Subcon>
            <Social>
              <img src={SocialX} alt="social-x" />
              <img src={SocialLinkedIn} alt="social-linkedin" />
              <img src={SocialInsta} alt="sociali" />
              <img src={SocialPin} alt="social-pin" />
              <img src={SocialYoutube} alt="socialyou" />
            </Social>

            <p className="text-muted-foreground">
              ©{" "}
              <a href="/">Deliva</a>.
              All rights reserved. 2024-present.
            </p>
          </Subcon>
        </Section>
      </Foote>
    </Foot>
  );
};

export default Footer;
