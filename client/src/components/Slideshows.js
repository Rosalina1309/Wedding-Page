import React, { useState, useEffect } from 'react';
import SS1 from '../images/SS1.jpg';
import SS2 from '../images/SS2.jpg';
import SS3 from '../images/SS3.jpg';
import SS4 from '../images/SS4.jpg';
import SS5 from '../images/SS5.jpg';
import SS6 from '../images/SS6.jpg';
import SS7 from '../images/SS7.jpg';
import SS8 from '../images/SS8.jpg';
import SS9 from '../images/SS9.jpg';
import SS10 from '../images/SS10.jpg';
import '../styles/slideshows.css';
import '../App.css';

const images = [SS1,SS2,SS3,SS4,SS5,SS6,SS7,SS8,SS9,SS10];

export default function Slideshows () {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="slideshow">
      <h2>Pre-Wedding Photos</h2>
      <p>Cùng ngắm nhìn bộ ảnh cưới của chúng mình chụp ở Hannover nhé.</p>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  )
}
