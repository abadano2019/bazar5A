import Item from "./Item"

import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Loader2 } from "./Loader2";
import {useParams} from "react-router-dom";


const ItemListContainer = () =>{
       
    const {categoryId, productId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setProductos([])
      setLoading(true);
      getProducts(categoryId)
        .then((items) =>{ setProductos(items); setLoading(false); })
        .catch((e) => console.log(e));
    }, [categoryId]);

    useEffect(() => {
      console.log("Deberia entrar en detalles")
    }, [productId]);
  
    return (
      <div className="productsCards">
        {loading ? <Loader2 /> : null}
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              titulo={producto.titulo}
              categoria={producto.categoria}
              tag={producto.tag}
              precio={producto.precio}
              img_src={producto.img_src}
              description = {producto.description}
            />
          );
        })}
      </div>
    );
    
}

export default ItemListContainer