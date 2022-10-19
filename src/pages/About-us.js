import SectionTitle from "../components/UI/SectionTitle";
import Banner from "../components/Layout/Banner";
import bgImage from "../assets/bgImage.png";
import bannerStyles from "../components/Layout/Banner.module.css";
import React from "react";
import TextField from "../components/UI/TextField";
import Container from "../components/UI/Container";

const AboutUs = () => {
  return (
    <section>
      <Banner
        bgImage={bgImage}
        className={bannerStyles.small}
        imgAlt={"Macbook Pro and Magic Mouse"}
      >
        <h1>O nas</h1>
      </Banner>
      <Container>
        <SectionTitle headingLevel={3} title={"Poznajmy się"} />
        <TextField listofclasses={['centered-text', 'limited']}>
          <p>Lorem ipsum dolor sit amet. Aut sunt odio sed quia dolorem est rerum
            autem. Cum asperiores dolor a omnis voluptatem cum voluptas quia sed
            numquam similique sed neque accusamus. Ut consequatur nobis qui
            voluptatem omnis rem nemo quibusdam. Ut vero minus et provident atque ab
            reprehenderit nobis ut soluta assumenda aut eligendi animi qui cumque
            quis ex fugiat aspernatur? Qui aliquid eligendi et consequatur doloribus
            et dolorem nisi eos dolor voluptas qui cumque sequi 33 quisquam
            molestias et voluptas illo. Qui mollitia maxime id laboriosam nesciunt
            non dolore quidem et excepturi molestias non voluptatum blanditiis eum
            omnis quasi est velit nisi. Sed consequuntur libero et vitae voluptatem
            et deleniti temporibus et magni voluptatem quo dignissimos tempora qui
            laboriosam totam et voluptatem porro? Qui architecto sint aut voluptas
            autem ut soluta Quis At inventore animi et unde magni eum ducimus quis.
            Qui quidem facere et tempore omnis rem tempore amet non sint quia sed
            pariatur possimus.</p>
        </TextField>
      </Container>
    </section>
  );
};

export default AboutUs;
