import Tag from './Tag'
import ItemDescriptionExt from './ItemDescriptionExt'
import CounterCart from './CounterCart'

const ItemDetail = (props) => {
    return (
        <div className="cardDetail" >
            <div className="cardDetail__left">
                <img className="cardDetail__img" src={props.img_src} alt="Imagen de producto" />
                <button className="cardDetail__agregarCarrito">Agregar al carrito</button>
            </div>
            <div className="cardDetail__content">
                <span className="cardDetail__name">Nombre: {props.titulo}</span>
                <span className="cardDetail__stock">Stock: {props.stock}</span>
                <span className="cardDetail__category">Categoría: {props.categoria}</span>
                <span className="cardDetail__price">Precio: $ {props.precio}</span>
                <Tag descripcion = {props.description} titulo={props.tag}  />
                <ItemDescriptionExt detalle={props.detalle}/>
                <CounterCart stock={props.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail