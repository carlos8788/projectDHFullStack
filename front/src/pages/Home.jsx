import React from 'react';
import { ProductList } from '../components/ProductList';
import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel';
function Home() {

    return (
        <>
            <div className="home">
                <Carousel/>
                <section className="enlaces">
                    <Link to="#" className="">INDUMENTARIA</Link>
                    <Link to="https://www.cariverplate.com.ar/calendario-de-partidos" className="">FIXTURE</Link>
                    <Link to="#" className="">NOTICIAS</Link>
                    <Link to="#" className="">CONTACTO</Link>
                </section>

                <section className="bannerGrande">


                </section>

                <section className="spamLogin">
                    <div><a href="/register">Registrarse</a></div>
                </section>

                <section id="sport" className="">
                    <h2 className="title-productosDestacados">Productos Destacados</h2>
                    <div className="productosDestacados">

                        <ProductList />
                    </div>

                </section>

            </div>
        </>
    )
}

export default Home;
