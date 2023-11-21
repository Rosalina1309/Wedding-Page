
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import Nhung1 from '../images/Nhung1.jpg';
import Nhung2 from '../images/Nhung2.jpg';
import '../styles/nhung.css';

const Nhung = () => {
  const images = [Nhung1, Nhung2];
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
    <div className="nhung" {...handlers}>
      <p>
        Cô dâu: <b>Phạm Hồng Nhung</b>
      </p>
      <em><b><p>Cô dâu nghĩ gì về chú rể?</p></b></em>
      <p> "Chú rể Thành Đạt là một người đàn ông vô cùng trưởng thành, chín chắn và điềm tĩnh. Anh ấy là một người rất đáng tin cậy. Mình có thể tâm sự được tất cả mọi điều dù là niềm vui hay nỗi buồn với anh. Chúng mình có rất nhiều quan điểm giống nhau trong cuộc sống và quan trọng nhất chính là với anh gia đình cũng là điều quan trọng nhất."
      </p>
      <div style={{ overflow: 'hidden', width: '70vw', position: 'relative', margin: '0 auto' }}>
        <div style={{ display: 'flex', transition: 'transform 0.3s ease', transform: `translateX(${-index * 70}vw)` }}>
          {images.map((image, i) => (
            <img key={i} className="img1" style={{ flex: '0 0 70vw', width: '70vw', borderRadius:'10px',touchAction: 'none' }} src={image} alt={`img${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nhung;
