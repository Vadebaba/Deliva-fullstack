import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { category } from "../utils/data";
import Footer from "../components/cards/Footer";
import ProductCategoryCard from "../components/cards/ProductCategoryCard";
import ProductsCard from "../components/cards/ProductsCard";
import { getAllProducts } from "../api";
import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";


const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 25px;
  @media (max-width: 768px) {
    padding: 17px 8px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 0 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Sub = styled.div`

&:after{
content:'';
height:10px;
}
color: #dada0f;
    position: fixed;
    transform: translate(-50%, -50%);
    letter-spacing: 8px;
    font-size: 2.5em;
    left: 50%;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    padding-top:2rem;

    @media (max-width: 760px) {
    font-size: 1.5em;
letter-spacing: 4px;
    }
}
`;

const Title = styled.div`
padding-top:3rem;
  font-size: 25px;
  font-weight: 500;
  display: flex;
  justify-content:center; 
  align-items: center;

  @media (max-width: 760px) {
    padding-top: 34px;
    font-size: 17px;
  } 
`;

const CardWrapper = styled.div`
  display: flex;
flex-wrap:wrap;
  gap: 32px;
  justify-content: center;
  padding-top:1rem;

  @media (max-width: 760px) {
    gap: 15px;
  }
`;


const Home = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    await getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <>
      <Container>
        <Section data-aos="fade-up">
          <Sub>TOP FOODS</Sub>
          <Title >Food Categories</Title>

          <CardWrapper data-aos="fade-up">
            {category.map((category) => (
              <ProductCategoryCard category={category} />
            ))}

          </CardWrapper>
        </Section>

        <Section>
          <Title data-aos="fade-up">Most Popular</Title>

          {loading ? (
            <CircularProgress />
          ) : (
            <CardWrapper data-aos="fade-up">
              {products.map((product) => (
                <ProductsCard product={product} />
              ))}
            </CardWrapper>
          )}
        </Section>

        <Section>
          <Footer />
        </Section>


      </Container>
    </>
  );
};

export default Home;
