import { useState, useEffect } from "react";
import initialState from "../initialState";
import firebase from "firebase/app";
import "firebase/firestore";
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const productRef = db.collection("products");
    let products = [];
    productRef.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        return <h1>No hay productos</h1>;
      } else {
        snapshot.forEach((product) => {
          products = products.concat({
            products: product.data(),
            id: product.id,
          });
        });
        setProduct(products);
      }
    });
  }, []);

  return { state, product };
};

export default useInitialState;
