import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const hamburgerBtn = () => menu ? setMenu(false) : setMenu(true)

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <div className="navbar-logo-img"></div>
                    </Link>
                </div>
                <ul className={`navbar-links ${menu ? 'display-normal' : 'display-none'}`}>
                    <li><Link to="/">Carrito</Link></li>
                    <div className="dropdown-div">
                        <li><Link to="/" className="dropdown">Productos</Link></li>
                    </div>

                    <li><Link to="/user/profile">Perfil</Link></li>
                    <li><Link to="/user/register">Registrarse</Link></li>
                    <li><Link to="/user/login">Iniciar Sesión</Link></li>


                </ul>
                <button className="fas fa-bars" onClick={hamburgerBtn}></button>
            </nav>
            <div className="search-form">
                <form className="d-flex justify-content-center" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="" type="submit"><i className="fas fa-search"></i></button>
                </form>

            </div>

        </header>
    )
}

export default Header