import { useState,useEffect } from "react";
import { useCartContext } from "../context/cartContext";
import AddWidget from "./AddWidget";
import SubstractWidget from "./SubstractWidget";

const CounterCart = ({stock}) =>{
    
    const[fecha, setFecha] = useState(null);
    const[mensaje, setMensaje] = useState(false);
    const {setCont, getContador, contador} = useCartContext();
        
    const handleAdd = () =>{
      
      if (contador < stock){
        setCont(contador + 1)
      }
      const date = new Date().toLocaleString();
      setFecha(date);
    }

    const handleSubtract = () =>{
      
      if (contador > 1) {
        setCont(contador - 1);
      }
    }

    useEffect(()=>{
        if (contador >= 10) {setMensaje(true)}
    },[contador]
    )

    return(
        <div>
            <button onClick = {()=>handleAdd()}>{<AddWidget/>}</button>
            <span> cantidad: {getContador()}</span>
            <span>Fecha: {fecha}</span>
            {mensaje ? <span> Obten un descuento del 10%</span> : null}
            <button onClick = {()=>handleSubtract()}>{<SubstractWidget/>}</button>
        </div>
    )
}

export default CounterCart;