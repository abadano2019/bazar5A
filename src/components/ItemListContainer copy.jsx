import AddWidget from "./AddWidget"
import SubstractWidget from "./SubstractWidget"
import ButtonCart2 from "./ButtonCart2"
import ButtonCart from "./ButtonCart"
import CounterCart from "./CounterCart"
import Item from "./Item"


const ItemListContainer = ({contador}) =>{
       
    return(
        <div className='productsCards'>
            <Item
                nombre="Menage"
                categoria="Bazar"
                tag="Aca va el TAG"
                precio={1200}
                imagen={"/img/Bazar1.jpg"}
            />
            <Item
                nombre="Menage"
                categoria="Bazar"
                tag="Aca va el TAG"
                precio={1200}
                imagen={"/img/Bazar1.jpg"}
            />
            <Item
                nombre="Menage"
                categoria="Bazar"
                tag="Aca va el TAG"
                precio={1200}
                imagen={"/img/Bazar1.jpg"}
            />
            <Item
                nombre="Menage"
                categoria="Bazar"
                tag="Aca va el TAG"
                precio={1200}
                imagen={"/img/Bazar1.jpg"}
            />
            <Item
                nombre="Menage"
                categoria="Bazar"
                tag="Aca va el TAG"
                precio={1200}
                imagen={"/img/Bazar1.jpg"}
            />
            <ButtonCart2 leftIcon = {<AddWidget/>} rightIcon = {<SubstractWidget/>}> {contador} </ButtonCart2> 
            <ButtonCart>{<AddWidget/>}</ButtonCart>
            <CounterCart/>
        </div>
    )
}

export default ItemListContainer