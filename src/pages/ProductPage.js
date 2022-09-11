import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// context
import { cartContext } from "../context/CartContextProvider";

// service
import { getAllProducts } from "../services/getAllProducts";
import { getOneProduct } from "../services/getOneProduct";

// component
import Product from "../components/shared/Product";
import Loading from "../components/shared/Loading";

// helper
import { isInCart } from "../helper/function";

// style
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { state, dispatch } = useContext(cartContext);
  const [product, setProduct] = useState(null);
  const [collection, setCollection] = useState([])
  let { id } = useParams();
  const [flip, setFlip] = useState(false);


  useEffect(() => {
    setProduct(null)

    const fetchData = async () => {
      const { data } = await getOneProduct(id);
      setProduct(data)
    };
    
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllProducts()
      let slicedData = data.slice(3, 7)
      setCollection(slicedData)
    }

    fetchData()
  }, [])

  const addToCartHandler = () => {
    dispatch({ type: "REMOVE__ITEM", payload: product })
    setFlip(true)
  }

  const inCartHandler = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
    setFlip(true)
  }

  return (
    <div className={styles.container}>
      { product ? (
        <div className={styles.main}>
          <div className={styles.product}>
            <div className={styles.product__image}>
              <img src={product.image} alt={product.name} />
            </div>

            <div className={styles.product__detail}>
              <h3 className={styles.product__brand}>{product.brand}</h3>
              <h1 className={styles.product__name}>{product.name}</h1>
              {isInCart(state, product._id) ? (
                <button
                  className={flip ? [styles["product__add"],styles["flip"]].join(" ") : styles["product__add"]}
                  onClick={addToCartHandler}
                  onAnimationEnd={() => setFlip(false)}
                >
                  In Cart
                </button>
              ) : (
                <button
                  className={flip ? [styles["product__add"],styles["flip"]].join(" ") : styles["product__add"]}
                  onClick={inCartHandler}
                  onAnimationEnd={() => setFlip(false)}
                >
                  Add to Cart
                </button>
              )}
              <div className={styles.product__desc}>
                <h3>Product Detail</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </div>

          <div className={styles.collection}>

                <div className={styles.collection__title}>
                  <h2>Featured Products</h2>
                  <p>Summer Collection New Modern Design</p>
                </div>
               
                <div className={styles.collection__product}>
                  {collection.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </div>
                
          </div>

        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default ProductPage;
