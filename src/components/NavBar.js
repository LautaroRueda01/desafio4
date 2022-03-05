import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <> 
        <nav id="layout-navBar" className='navBar'>
            <h1 className="navBar__title">Canela y Miel</h1>
            <CartWidget/>
        <a href="#" className='navBar__link'>Productos</a>
        <a href="#" className='navBar__link'>Contacto</a>
        <a href="#" className='navBar__link'>Nosotros</a>
        </nav>
        <ItemListContainer proximamente="Nuestro catálogo"/>
        </>
    );
}

export default NavBar;