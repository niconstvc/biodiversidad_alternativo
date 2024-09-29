import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"

const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (
        <nav className="main-nav">
            <Link to="/"><h3>Biodiversidad.cl </h3></Link>
            <Link to="../views/Register.jsx">Registro o Inicio de sesion</Link>
            <Link to="/carrito"><i className="fa-solid fa-cart-shopping"> $ {cartTotal()} </i></Link>
        
        </nav>
    )
}

export default Navbar