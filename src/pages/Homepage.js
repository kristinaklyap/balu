import Banner from "../components/Layout/Banner";
import bgImage from "../assets/bgImage.png";
import bannerStyles from "../components/Layout/Banner.module.scss";
import SectionTitle from "../components/UI/SectionTitle";
import ProductsList from "../components/Products/ProductsList";
import TextField from "../components/UI/TextField";

import React from "react";
import {useNavigate} from "react-router-dom";

import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import Carousel from "../components/UI/Carousel";

import slider1 from "../assets/slider-1.png"
import slider2 from "../assets/slider-2.jpg"

const Homepage = () => {
    const navigate = useNavigate();

    const carouselSlides = {
        0: {
            image: slider1,
            title: 'Oświetlenie',
            text: 'Zadbaj o dobre oświetlenie miejsca pracy...\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n' +
                'sed do eiusmod tempor incididunt ut labore et dolore \n' +
                'magna aliqua. Ut enim ad minim veniam, quis nostrud \n' +
                'exercitation ullamco laboris nisi ut aliquip ex ea \n' +
                'commodo consequat. Duis aute irure dolor in \n' +
                'reprehenderit in voluptate velit esse cillum dolore eu \n' +
                'fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
                ' non proident, sunt in culpa qui officia deserunt mollit \n' +
                'anim id est laborum.'
        }, 1: {
            image: slider2,
            title: 'Porządek',
            text: 'Zadbaj o porządek miejsca pracy...\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n' +
                'sed do eiusmod tempor incididunt ut labore et dolore \n' +
                'magna aliqua. Ut enim ad minim veniam, quis nostrud \n' +
                'exercitation ullamco laboris nisi ut aliquip ex ea \n' +
                'commodo consequat. Duis aute irure dolor in \n' +
                'reprehenderit in voluptate velit esse cillum dolore eu \n' +
                'fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
                ' non proident, sunt in culpa qui officia deserunt mollit \n' +
                'anim id est laborum.'
        }, 2: {
            image: slider1,
            title: 'Kolejny slide',
            text: 'Zadbaj o porządek miejsca pracy...\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n' +
                'sed do eiusmod tempor incididunt ut labore et dolore \n' +
                'magna aliqua. Ut enim ad minim veniam, quis nostrud \n' +
                'exercitation ullamco laboris nisi ut aliquip ex ea \n' +
                'commodo consequat. Duis aute irure dolor in \n' +
                'reprehenderit in voluptate velit esse cillum dolore eu \n' +
                'fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
                ' non proident, sunt in culpa qui officia deserunt mollit \n' +
                'anim id est laborum.'
        },
    }
    const carouselSettings = {
        dots: true,
        image: true,
        title: true,
        text: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <Banner bgImage={bgImage} imgAlt={"Macbook Pro and Magic Mouse"}>
                <h1>
                    Zadbajmy <span className={bannerStyles.highlighted}>wspólnie</span>
                    <span className={bannerStyles.moved}>o wygodę Twojej pracy...</span>
                </h1>
            </Banner>
            <section>
                <SectionTitle headingLevel={3} title={"Podkładki na biurko"}/>
                <ProductsList/>
                <Button listofclasses={['button--primary', 'centered', 'margin-top-20']} text={"wszystkie produkty"}
                        onClick={() => navigate("/products")}/>
            </section>
            <section>
                <Container className={'margin_top_4'}>
                    <SectionTitle headingLevel={3} title={"Inspiracje"}/>
                    <TextField listofclasses={['centered-text', 'limited']}>
                        <p>Dobrze wiemy, że podstawą efektywnej pracy jest zarówno czysty umysł
                            jak i uporządkowane biurko. Nie pozwól żeby „artystyczny nieład” panujący
                            na biurku rozpraszał Cię podczas tworzenia cudów....
                        </p>
                    </TextField>
                </Container>
            </section>
            <section>
                <Carousel slides={carouselSlides} settings={carouselSettings}></Carousel>
            </section>

        </>
    );
};
export default Homepage;
