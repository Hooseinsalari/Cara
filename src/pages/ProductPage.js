import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// context
import { cartContext } from '../context/CartContextProvider';

// style
import styles from "./ProductPage.module.css";

const ProductPage = () => {
    const {state} = useContext(cartContext);
    let params = useParams()
    console.log(params);

    return (
        <div>
            salam
        </div>
    );
};

export default ProductPage;