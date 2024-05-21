import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Main.css';

const slides = [
  {
    backgroundColor: '#FD3555',
    title: 'Nature flower',
    text: 'all in pink',
    imageUrl: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
  },
  {
    backgroundColor: '#2A86BA',
    title: 'Bluuue Sky',
    text: 'with its mountains',
    imageUrl: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
  },
  {
    backgroundColor: '#252E33',
    title: 'Lonely castle',
    text: 'in the wilderness',
    imageUrl: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
  },
  {
    backgroundColor: '#FFB866',
    title: 'Flying eagle',
    text: 'in the sunset',
    imageUrl: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
  }
];

const VerticalSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeSlide = (direction) => {
    if (direction === 'up') {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (direction === 'down') {
      setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="slider-container">
      <div className="action-buttons">
        <button title="up" className="up-button" onClick={() => changeSlide('up')}>
          up
        </button>
        <button title="down" className="down-button" onClick={() => changeSlide('down')}>
          down
        </button>
      </div>
      <div className="slides">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="slide"
            initial={{ opacity: 0, y: index < activeSlideIndex ? -100 : 100 }}
            animate={{
              opacity: index === activeSlideIndex ? 1 : 0,
              y: index === activeSlideIndex ? 0 : index < activeSlideIndex ? -100 : 100
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="left-slide"
              style={{ backgroundColor: slide.backgroundColor }}
              initial={{ y: index < activeSlideIndex ? -100 : 100 }}
              animate={{ y: index === activeSlideIndex ? 0 : index < activeSlideIndex ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </motion.div>
            <motion.div
              className="right-slide"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              initial={{ y: index < activeSlideIndex ? 100 : -100 }}
              animate={{ y: index === activeSlideIndex ? 0 : index < activeSlideIndex ? 100 : -100 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
