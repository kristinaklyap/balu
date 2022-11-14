import SectionTitle from "../components/UI/SectionTitle";
import ProductsList from "../components/Products/ProductsList";
import React from "react";
import Banner from "../components/Layout/Banner";
import bgImage from "../assets/bgImage.png";
import bannerStyles from "../components/Layout/Banner.module.scss";

const Products = () => {
  return (
    <>
      <Banner bgImage={bgImage} className={bannerStyles.small} imgAlt={"Macbook Pro and Magic Mouse"}>
        <h1>Nasze produkty</h1>
      </Banner>
      <SectionTitle headingLevel={3} title={"Podkładki"} />
      <ProductsList />
    </>
  );
};

export default Products;
