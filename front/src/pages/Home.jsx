import React from 'react';
import { ProductList } from '../components/ProductList';
import { Link } from 'react-router-dom'
function Home() {

    return (
        <>
            <main className="home">
                <div className="carousel-container">
                    <div className="effect"></div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/images/ejercicio.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/ejercicio2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/ejercicio3.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/ejercicio4.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/ejercicio5.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/ejercicio6.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


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

            </main>
        </>
    )
}

export default Home;
