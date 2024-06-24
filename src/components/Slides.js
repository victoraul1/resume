import React, { useState, useEffect } from 'react';
import './Slides.css';

const slidesData = [
  {
    id: 'contact',
    content: (
      <>
        <h1>1</h1>
        <p><i>Always busy learning that new thing</i></p>
        <p>victorgalindo475@gmail.com<br />818-721-6496</p>
      </>
    ),
  },

  {
    id: 'contact',
    content: (
      <>
        <h1>2</h1>
        <p><i>Always busy learning that new thing</i></p>
        <p>victorgalindo475@gmail.com<br /><br />818-721-6496</p>
      </>
    ),
  },

  {
    id: 'contact',
    content: (
      <>
        <h1>3</h1>
        <p><i>Always busy learning that new thing</i></p>
        <p>victorgalindo475@gmail.com<br /><br />818-721-6496</p>
      </>
    ),
  },
  
];

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    updateButtonVisibility();
  }, [currentSlide]);

  const updateButtonVisibility = () => {
    const leftButton = document.querySelector(".nav-button.left");
    const rightButton = document.querySelector(".nav-button.right");

    if (currentSlide === 0) {
      leftButton.style.display = "none";
    } else {
      leftButton.style.display = "block";
    }

    if (currentSlide === slidesData.length - 1) {
      rightButton.style.display = "none";
    } else {
      rightButton.style.display = "block";
    }
  };

  const moveSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newSlide = Math.max(0, Math.min(prev + direction, slidesData.length - 1));
      return newSlide;
    });
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slidesData.map((slide, index) => (
          <section key={index} className="slide" id={slide.id}>
            {slide.content}
          </section>
        ))}
      </div>
      <button className="nav-button left" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="nav-button right" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  );
}

export default Slides;
