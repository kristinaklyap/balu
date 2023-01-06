import React, {useEffect, useCallback, useState} from "react";
import ProductTeaser from "./ProductTeaser";

import classes from "./ProductsList.module.scss";
import Container from "../UI/Container";


const ProductsList = (props) => {

    const [myProducts, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Firebase GET
            const response = await fetch(
                "https://react-http-1e246-default-rtdb.europe-west1.firebasedatabase.app/products.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            const loadedProducts = [];
            for (const key in data) {
                loadedProducts.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                    id_name: data[key]['id_name'],
                    SKU: data[key].SKU,
                    image: data[key].image
                });
            }

            setProducts(loadedProducts);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

//loads on the very begging
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


    const products_list = myProducts.map(({name, description, price, id, image, id_name, SKU}) => (
        <ProductTeaser
            name={name}
            description={description}
            price={price}
            id={id}
            key={id}
            image={image}
            id_name={id_name}
            SKU={SKU}
        />
    ));

    return (
        <Container>
            {isLoading && <p>Products are loading.. please wait</p>}

            {!isLoading && error && <p>{error}</p>}
            <section className={classes.product_list}>{products_list}</section>
        </Container>
    );
};
export default ProductsList;
