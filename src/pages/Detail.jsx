import ItemDetailContainer from "../components/ItemDetailContainer";
import '../sass/App.scss';

import { useParams, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct, getProducts_old } from "../api/products";
import Item from "../components/Item"
import { propTypes } from "react-bootstrap/esm/Image";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    
    getProduct(productId).then((data) => {
      setProduct(data);
      console.log(productId)
    });
  }, [productId]);

  return (
      <ItemDetailContainer />
  );
};