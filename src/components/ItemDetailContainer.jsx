import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import { Loader } from "./Loader";
import {useParams} from "react-router-dom";


const desplegarItem = (producto) =>{
  return (
    <>
      <ItemDetail
          key={producto.id}
          id={producto.id}
          titulo={producto.titulo}
          categoria={producto.categoria}
          tag={producto.tag}
          precio={producto.precio}
          img_src={producto.img_src}
          description = {producto.description}
          stock={producto.stock}
          detalle={producto.detalle}
          />
    </>      
  )
}

const ItemDetailContainer = () =>{
       
    const {productId} = useParams();
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setProducto([])
      setLoading(true);
      getProduct(productId)
        .then((product) =>{ setProducto(product); setLoading(false); })
        .catch((e) => console.log(e));
    }, [productId]);
  
    return (
      <div className="productsCards">
        {loading ? <Loader /> : desplegarItem(producto)}        
      </div>
    );
    
}

export default ItemDetailContainer