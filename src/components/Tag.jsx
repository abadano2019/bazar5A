const Tag = ({descripcion, titulo}) => {
    return  <>
            <p>{descripcion}</p>
            <span className="card__tag">{titulo}</span>   
            </>
}

export default Tag;
