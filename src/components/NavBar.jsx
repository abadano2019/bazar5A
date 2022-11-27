import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from '../context/cartContext';

const links = ["Cocina", "Cristaleria", "Vajilla", "Electrodomesticos", "Hogar"];

const NavBar = () =>{

    const { cart,getCartQuantity } = useCartContext();
    console.log(cart)
    return (
        <header className="header">
            <div className= "brand">
                <Link to="/">
                    <img src="/logo5a.png" className ='brand__logo' alt="logo" />
                </Link>
                <div className='slogan'>
                    <h1 className='slogan__principal'>Bazar 5A</h1>
                    <span className='slogan__secondary'>Todo para el hogar</span>
                </div>
            </div>

            <div className = "header__nav">
                {links.map((elemento) => {
                    return (
                        <NavLink
                        style={({ isActive }) => ({
                                  color: isActive ? "white" : "#7b7bd3",
                                  textDecoration: "none",
                        })}
                        to={`/category/${elemento.toLowerCase()}`}
                        key={elemento}
                        >
                        {elemento}
                        </NavLink>
                    );
                    })}
            </div>
            <div className = "header__cart">
                <Link to="/cart" className='header__cart-link'>Carrito</Link>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                <span className="header__cart-cantidad">{getCartQuantity()}</span>
            </div>
        </header>
    )
}

export default NavBar