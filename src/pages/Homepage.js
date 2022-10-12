import Banner from "../components/Layout/Banner";
import bgImage from "../assets/bgImage.png";
import bannerStyles from "../components/Layout/Banner.module.css";
import SectionTitle from "../components/UI/SectionTitle";
import ProductsList from "../components/Products/ProductsList";
import TextField from "../components/UI/TextField";

import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/UI/Button";
import Container from "../components/UI/Container";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner bgImage={bgImage} imgAlt={"Macbook Pro and Magic Mouse"}>
        <h1>
          Zadbajmy <span className={bannerStyles.highlighted}>wspólnie</span>
          <span className={bannerStyles.moved}>o wygodę Twojej pracy...</span>
        </h1>
      </Banner>
      <section>
        <SectionTitle headingLevel={3} title={"Podkładki na biurko"} />
        <ProductsList />
        <Button listofclasses={['button--primary','centered','margin-top-20']} text={"wszystkie produkty"} onClick={ () => navigate("/products")} />
      </section>
      <section>
        <Container>
          <SectionTitle headingLevel={3} title={"Inspiracje"} />
          <TextField listofclasses={['centered-text', 'limited']}>
            <p>Dobrze wiemy, że podstawą efektywnej pracy jest zarówno czysty umysł
              jak i uporządkowane biurko. Nie pozwól żeby „artystyczny nieład” panujący
              na biurku rozpraszał Cię  podczas tworzenia cudów....
            </p>
          </TextField>
        </Container>

      </section>
      <section>

      </section>

    </>
  );
};
export default Homepage;
