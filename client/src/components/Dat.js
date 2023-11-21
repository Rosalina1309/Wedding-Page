
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import Dat2 from '../images/Dat1.jpg';
import Dat1 from '../images/Dat2.jpg';
import '../styles/dat.css';

const Dat = () => {
  const images = [Dat1, Dat2];
  const [index, setIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  });

  const handleSwipe = (direction) => {
    if (direction === 'left' && index < images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'right' && index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="dat" {...handlers}>
      <h2 style={{ padding: '20px' }}>Mình Nghĩ Gì Về Nhau</h2>
      <p>
        Chú rể: <b>Tăng Thành Đạt</b>
      </p>
      <em><b><p> Chú rể nghĩ gì về cô dâu?</p></b></em>
      <p>"Cô dâu Hồng Nhung rất dễ thương, ngọt ngào và hiểu biết. Nhưng trên hết với mình , cô dâu luôn quan tâm chăm sóc mình và những người bên cạnh mình, đặc biệt là gia đình. Cô dâu cũng là người mà mình có thể thoải mái chia sẻ tâm tư và những dự định tương lai với nhau. Còn gì tuyệt vời hơn khi có một người bạn đời như vậy để nắm tay nhau đi suốt cuộc đời."</p>
      <div style={{ overflow: 'hidden', width: '70vw', position: 'relative', margin: '0 auto' }}>
        <div style={{ display: 'flex', transition: 'transform 0.3s ease', transform: `translateX(${-index * 70}vw)` }}>
          {images.map((image, i) => (
            <img key={i} className="img1" style={{ flex: '0 0 70vw', width: '70vw', borderRadius:'10px',touchAction: 'none'}} src={image} alt={`img${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dat;
