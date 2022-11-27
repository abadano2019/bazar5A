import Tag from './Tag'
import ItemDescriptionExt from './ItemDescriptionExt'
import { useCartContext } from '../context/cartContext'
import CounterCart from './CounterCart'
import alert from '../js/alertas'

const ItemDetail = ({id, titulo, img_src,description, precio, categoria, tag, detalle, stock}) => {

    const count = 0;
    const {addProduct} = useCartContext();
    const { getContador } = useCartContext();
    
    return (
        <div className="cardDetail" >
            <div className="cardDetail__left">
                <img className="cardDetail__img" src={img_src} alt="Imagen de producto" />
                <button className="cardDetail__agregarCarrito" onClick = {(e)=> {
                    e.stopPropagation();
                    addProduct({id, titulo, img_src,description, precio, categoria, tag}, getContador());
                    alert.alertaMensajeAnimado("Producto agregado !!!!", "success")} 
                }
                >Agregar al carrito</button>
            </div>
            <div className="cardDetail__content">
                <span className="cardDetail__name">Nombre: {titulo}</span>
                <span className="cardDetail__stock">Stock: {stock}</span>
                <span className="cardDetail__category">Categoría: {categoria}</span>
                <span className="cardDetail__price">Precio: $ {precio}</span>
                <Tag descripcion = {description} titulo={tag}  />
                <ItemDescriptionExt detalle={detalle}/>
                <CounterCart stock={stock} counter = {count}/>
            </div>
        </div>
    )
}

export default ItemDetail