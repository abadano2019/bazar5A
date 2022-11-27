import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import FormCompra from "../components/FormCompra";
import { useEffect } from "react";
import alert from "../js/alertas"


export const Cart = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(false)
  const { getTotal, getIva, getEnvio, getTotalCompra, cart} = useCartContext();

  const eliminarItem = (e) =>{}

  const agregarCantidad = (e)=>{}

  const quitarCantidad = (e) =>{}

  const viewForm = () =>{
    if(cart.length === 0){
      alert.alertaMensajeAnimado("Carrito sin elementos para generar orden", "warning")
    }
    else{
      setForm(true);
      navigate("/cart");
    }
  }

  useEffect(()=> {
    <FormCompra view = {true}/>
  }, [form]);

  return (
    <div className="cartContent">
      {cart.map((product) => (
        <div key={product.id} className = "cartContent__items">
          <img className="cardContent__img" src={product.img_src} alt="Imagen de producto" />
          <div className="id_delete">Id: {product.id}</div>
          <div>Articulo: {product.titulo}</div>
          <div>Cantidad: {product.cantidad}</div>
          <div className = "contentCardButtons">
            <button className="cardContent__del" onClick = {()=>{eliminarItem()}}>x</button>
            <button className="cardContent__add" onClick = {()=>{agregarCantidad()}}>+</button>
            <button className="cardContent__sub" onClick = {()=>{quitarCantidad()}}>-</button>
          </div>
        </div>
      ))}
      <span className="cartContent__total">Sub-total: ${getTotal()}</span>
      <span className="cartContent__total">Iva: ${getIva()}</span>
      <span className="cartContent__total">Envio: ${getEnvio()}</span>
      <span className="cartContent__total">Total: ${getTotalCompra()}</span>
      <div className="buttonBuyConteiner">
        <button className ="buttonBuyConteiner__formatButton" onClick = {()=>{viewForm()}}>Comprar</button>
      </div>
      {form ? <FormCompra view = {true}/> : null}
    </div>
  );
};
