
import Carousel from 'react-bootstrap/Carousel';
// import carouselimage1 from '../../image/carousel1.jpg'
 
import carouselimage2 from '../../image/carousel2.jpg'
import carouselimage1 from '../../image/carousel1.jpg'
import './carousel.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        < img className='cari' src={carouselimage1}  />
        <Carousel.Caption>
          <h3>SHIFT INTO GEAR: <br />YOUR DESTINATION  <br />FOE CAR EXCELLENCE</h3>
          <p> Drive your Dream:Find best car toay</p>
          <button className='btn-1' type="button">Search a car</button>
          <button className='btn-2' type="button">post advertisment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='cari2' src={carouselimage2} />
        <Carousel.Caption>
          <h3>UNLOCK YOUR DRIVE: <br />Explore,Compare</h3>
          <p>Where Every Journey Begain With The Right Car .</p>
          <button className='btn-1' type="button">Search a car</button>
          <button className='btn-2' type="button">post advertisment</button>
        </Carousel.Caption>
      </Carousel.Item>   
    </Carousel>
  );
}

export default UncontrolledExample;


















// CustomCarousel.jsx
// import React, { useState } from 'react';
// import  carousel1 from '../../../public/image'
 

// import './carousel.css'

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

  

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="carousel-container">
//       <button onClick={prevSlide}>&lt;</button>
//       <div className="carousel-slide">
//         <img src={images[currentIndex]} alt="Slide" className="carousel-image" />
//       </div>
//       <button onClick={nextSlide}>&gt;</button>

//       <div className="carousel-caption">
//         <h3>Slide {currentIndex + 1}</h3>
//         <p>This is slide {currentIndex + 1} of the carousel.</p>
//       </div>

//       <style jsx>{`
//         .carousel-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         .carousel-slide {
//           width: 100%;
//           max-width: 800px;
//         }

//         .carousel-image {
//           width: 100%;
//           height: auto;
//         }

//         .carousel-caption {
//           text-align: center;
//           margin-top: 10px;
//         }

//         button {
//           position: absolute;
//           top: 50%;
//           background-color: rgba(0, 0, 0, 0.5);
//           color: white;
//           border: none;
//           font-size: 2rem;
//           padding: 10px;
//           cursor: pointer;
//           transform: translateY(-50%);
//         }

//         button:hover {
//           background-color: rgba(0, 0, 0, 0.8);
//         }

//         button:first-of-type {
//           left: 10px;
//         }

//         button:last-of-type {
//           right: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;
