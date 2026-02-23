import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams(); //useParam is used to fetch data from the URL. it returns object which we destructure and then pass the property name which we have provided in the path.
    // https://fakestoreapi.com/products/3
    const [product, setProduct] = useState(null);
    //Created a function that fetch data from API
    const fetchProduct = async () => {
        try {
            // axios provide us methods i.e. get,post,put,delete
            // here we get response and stored that in a variable
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`,
            );
            console.log(response.data);
            // Homework to display data on page using bootstrap card
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };
    // useEffect
    useEffect(() => {
        // calling fetch product
        fetchProduct();
    }, []);
    return (
        <div>
            <h1>Product Component {id}</h1>
        </div>
    );
}

export default Product;
