import Tag from './Tag'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import alert from '../js/alertas'

const Item = ({id, titulo, img_src,description, precio, categoria, tag}) => {
    
    const navigate = useNavigate();
    const {addProduct} = useCartContext();
    
    return (
        <div className="card" onClick={() => navigate(`/product/${id}`)}>
            <div className="card__top">
                <img className="card__img" src={img_src} alt="Imagen de producto" />
                <span className="card__price">$ {precio}</span>
            </div>
            <div className="card__content">
                <span className="card__name">{titulo}</span>
                <span className="card__category">Categoría: {categoria}</span>
                <Tag descripcion = {description} titulo={tag}  />
                <button className="card__button" onClick={(e) => {
                    e.stopPropagation();
                    addProduct({id, titulo, img_src,description, precio, categoria, tag}, 1)
                    alert.alertaMensajeAnimado("Producto agregado !!!!", "success")    
                }}
                >Agregar producto</button>
            </div>
        </div>
    )
}

export default Item