import { useState } from "react";
import Hotel1 from "../assets/hotel1.webp";
import Hotel2 from "../assets/hotel2.jpg";
import Hotel3 from "../assets/hotel3.jpg";
import "./Carousel.css";

const Carousel = () => {
  const images = [Hotel1, Hotel2, Hotel3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-button prev">
        &#8249;
      </button>
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hotel ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button next">
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
