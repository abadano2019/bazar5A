import {useEffect, useState} from "react"
import ButtonCart2 from "./ButtonCart2" 



const ListContainer = ({greeting, contador}) =>{
    
    //const[productos, setProductos] = 
    
    
    return(
        <div className='greeting'>
            <h1>{greeting}</h1>
            <ButtonCart2/>
        </div>
    )
}

export default ListContainer