import Tag from './Tag'

const Item = (props) => {

    return (
    <div className="card">
        <div className="card__top">
            <img className="card__img" src={props.imagen} alt="Imagen de producto" />
            <span className="card__price">$ {props.precio}</span>
        </div>
        <div className="card__content">
            <span className="card__name">{props.nombre}</span>
            <span className="card__category">Categoría: {props.categoria}</span>
            
            <Tag descripcion = {props.description} titulo={props.tag}  />

        </div>
    </div>
    )
}

export default Item