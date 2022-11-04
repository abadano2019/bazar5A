import Tag from './Tag'
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
            <div className="card__top">
                <img className="card__img" src={props.img_src} alt="Imagen de producto" />
                <span className="card__price">$ {props.precio}</span>
            </div>
            <div className="card__content">
                <span className="card__name">{props.titulo}</span>
                <span className="card__category">Categoría: {props.categoria}</span>
                <Tag descripcion = {props.description} titulo={props.tag}  />
            </div>
        </div>
    )
}

export default Item