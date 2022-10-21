import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Product from "../components/Products/Product";
import Container from "../components/UI/Container";


const ProductDetails = () => {
    const params = useParams()

    const [productData, setProductData] =useState(null)
    const fetchProductDetails = useCallback(async () => {
        try {
            // Firebase GET
            const response = await fetch(
                `https://react-http-1e246-default-rtdb.europe-west1.firebasedatabase.app/products/${params.productId}.json`
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            setProductData(data)
        } catch (err) {

        }
    }, []);

//loads on the very begging
    useEffect(() => {
        fetchProductDetails();
    }, [fetchProductDetails]);
    return (
        <Container>
            {productData &&
            <div>
                <Product
                    name={productData.name}
                    description={productData.description}
                    price={productData.price}
                    id={params.productId}
                    key={productData.id}
                    image={productData.image}
                    id_name={productData.id_name}
                    SKU={productData.SKU}
                />

            </div>
            }
        </Container>
    )

}

export default ProductDetails