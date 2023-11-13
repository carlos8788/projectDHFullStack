import React, { useState } from 'react'

export const Carousel = () => {

    const [currentAnimation, setCurrentAnimation] = useState('');
    const [index, setIndex] = useState(0)

    const images = [
        '/images/ejercicio.jpg',
        '/images/ejercicio2.jpg',
        '/images/ejercicio3.jpg',
        '/images/ejercicio4.jpg',
        '/images/ejercicio5.jpg',
        '/images/ejercicio6.jpg'
    ]

    const previus = (actualIndex) => {
        setCurrentAnimation('slide-out');
        setTimeout(() => {
        const condition = actualIndex > 0;
        condition ? setIndex(actualIndex - 1) : setIndex(images.length - 1);
        setCurrentAnimation('slide-in');
        }, 300); // coincide con la duración de tu animación
    }

    const next = (actualIndex) => {
        setCurrentAnimation('slide-out');
        setTimeout(() => {
            const condition = actualIndex < images.length - 1;
            condition ? setIndex(actualIndex + 1) : setIndex(0);
            setCurrentAnimation('slide-in');
        }, 300); // coincide con la duración de tu animación
    }

    const btnPrev = () => previus(index)
    const btnNext = () => next(index)

    return (
        <div className='carousel-container'>
            <div className="effect"></div>
            <button onClick={btnPrev} className='carousel-button button-left'>{'<'}</button>
            <img src={images[index]} className={`${currentAnimation}`} alt="..." />
            <button onClick={btnNext} className='carousel-button button-rigth'>{'>'}</button>
        </div>
    )
}


// <div className="carousel-container">
//     <div className="effect"></div>
//     <div id="carouselExampleFade" className="carousel slide carousel-fade">
//         <div className="carousel-inner">
//             <div className="carousel-item active">
//                 <img src="/images/ejercicio.jpg" className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//                 <img src="/images/ejercicio2.jpg" className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//                 <img src="/images/ejercicio3.jpg" className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//                 <img src="/images/ejercicio4.jpg" className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//                 <img src="/images/ejercicio5.jpg" className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//                 <img src="/images/ejercicio6.jpg" className="d-block w-100" alt="..." />
//             </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
//             data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
//             data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//         </button>
//     </div>
// </div>
//     )
// }
