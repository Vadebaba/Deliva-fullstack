import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
//import LogoImg from "../utils/Images/Logo.png";
import { FavoriteBorder, MenuRounded, SearchRounded, ShoppingCartOutlined } from "@mui/icons-material";
import Button from "./Button";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/UserSlice";
import head from "../utils/Images/header-bg.jpg";



const Nav = styled.div`
  height: 100vh;
  font-size: 1rem;
  top: 0;
  z-index: 10;
   width: 100%;
    font-size: 1rem;
    background-image: linear-gradient(167deg,#000, #0000),  url(${head});
            font-size: 20px;
            background-size: cover;
color: whitesmoke;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  padding: 0 55px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
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
/*const Logo = styled.img`
  height: 34px;
`;*/
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: whitesmoke;
  font-weight: 300;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const MobileIcons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const MobileMenu = styled.ul`
display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 0 6px;
    list-style: none;
    width: 80%;
    padding: 20px 40px 25px 40px;
    background: white;
    position: absolute;
    top: 64px;
    right: 0;
    transition: all 0.6s ease-in-out;
    transform: translateY(0);
    border-radius: 0 0 0 8px;
    box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.2);
    opacity: 100%;
    z-index: 1000;
`;

const TextButton = styled.span`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;



const P = styled.div`
font-size:3.5rem;
margin-top: 2rem;

@media screen and (max-width: 768px) {
  font-size: 3rem;
    margin-top: 2rem;
}   
`;


const Inner = styled.div`
    padding: 7rem;
    text-align: center;
     margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
    padding: 1.5rem;
  } 
`;


const Primary = styled.div`
    background-color: #EB0029;
    border: 2px solid #EB0029;
    padding: 1rem 2.5rem;
    border-radius: 10px;
      cursor: pointer;

      &:hover {
    background-color: #9d1e34;
  border-color: #9d1e34;
  }

   @media screen and (max-width: 768px) {
    padding: .5rem;
  }
  `;

const Secondary = styled.div`
    background-color: transparent;
    border: 2px solid #ffffff;
    padding: 1rem 2.5rem;
    border-radius: 10px;
      cursor: pointer;

  &:hover {
   background-color: rgba(255, 255, 255, 0.1);
  }
      
   @media screen and (max-width: 768px) {
    padding: .5rem;
  }
  `;


const Btn = styled.div`
    outline: none;
    border: none;
    font-size: 1.1rem;
    color: var(--white);
    
    transition: 0.3s;
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  `;




const Navbar = ({ setOpenAuth, openAuth, currentUser }) => {
  ;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavLogo to="/">
          <h1>Deliva</h1>
        </NavLogo>

        <MobileIcons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/cart">
            <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          {currentUser && (
            <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
          )}
        </MobileIcons>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/dishes">Dishes</Navlink>
          <Navlink to="/orders">Orders</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(false)}>
              Home
            </Navlink>
            <Navlink to="/dishes" onClick={() => setIsOpen(false)}>
              Dishes
            </Navlink>
            <Navlink to="/orders" onClick={() => setIsOpen(false)}>
              Orders
            </Navlink>
            <Navlink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Navlink>
            {currentUser ? (
              <>
                <TextButton onClick={() => dispatch(logout())}>
                  Logout
                </TextButton>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  small
                  onClick={() => setOpenAuth(true)}
                />
                <Button
                  text="Sign In"
                  small
                  onClick={() => setOpenAuth(true)}
                />
              </div>
            )}
          </MobileMenu>
        )}

        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
              <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
            </>
          ) : (
            <>
              <Button text="Sign In" small onClick={() => setOpenAuth(true)} />
            </>
          )}
        </ButtonContainer>




      </NavContainer>

      <Inner>
        <P data-aos="fade-up">Why stay hungry when you can Order
          <br />
          from DELIVA</P>
        <p>Download Deliva app now ❗ </p>
        <Btn data-aos="fade-up">
          <Primary>Play Store</Primary>
          <Secondary>App Store</Secondary>
        </Btn>
      </Inner>
    </Nav>
  );
};

export default Navbar;
