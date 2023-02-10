import React, {useState} from "react"; 
import { NavLink } from "react-router-dom";

export default function BarraNav() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav>
        <div className="navbar">
            <NavLink to="/" className="nav_logo">Café Blog</NavLink>
            <div className={`nav_items ${isOpen && "open"}`}>
                <NavLink to="/QuienesSomos" className={ ({isActive}) => (isActive ? "activo" : null) }>Quienes Somos</NavLink>
                <NavLink to="/Compras" className={ ({isActive}) => (isActive ? "activo" : null) }>Compras</NavLink>
                <NavLink to="/Contacto" className={ ({isActive}) => (isActive ? "activo" : null) }>Contacto</NavLink>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </nav>
    )
}
