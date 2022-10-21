import CartWidget from './CartWidget'


const NavBar = () =>{
    return (
        <header className="header">
            <div className= "brand">
                <img src="./logo5a.png" className ='brand__logo' alt="logo" />
                <div className='slogan'>
                    <h1 className='slogan__principal'>Bazar 5A</h1>
                    <span className='slogan__secondary'>Todo para el hogar</span>
                </div>
            </div>
            <div className = "header__nav">
                <h3>Cocina</h3>
                <h3>Cristalería</h3>
                <h3>Vajilla</h3>
                <h3>Hogar</h3>
                <h3>Electrodomésticos</h3>
            </div>
            <div className = "header__buttons">
                <button>Carrito</button>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar