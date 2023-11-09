import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <div className="navbar-logo-img"></div>
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Carrito</Link></li>
                    <div className="dropdown-div">
                        <li><Link to="/" className="dropdown">Productos</Link></li>
                    </div>

                    <li><Link to="/user/profile">Perfil</Link></li>
                    <li><Link to="/user/register">Registrarse</Link></li>
                    <li><Link to="/user/login">Iniciar Sesión</Link></li>


                </ul>
                <i className="fas fa-bars"></i>
            </nav>
            <div className="search-form">
                <form className="d-flex justify-content-center" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="" type="submit"><i className="fas fa-search"></i></button>
                </form>

            </div>

        </header>
    )
}

export default Header