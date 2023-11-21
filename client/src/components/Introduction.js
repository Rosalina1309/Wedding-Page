

// import { Link } from 'react-router-dom';
// import img1 from '../images/img1.jpg';
// import '../styles/introduction.css';

// export default function Introduction() {
//   return (
//     <div className="intro">
//       <div className="ballet-font">
//         <Link to="/">
//           <h1>Hồng Nhung & Thành Đạt</h1>
//         </Link>
//       </div>
//       <div>
//         <img className="img1" src={img1} alt="image1" />
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/img1.jpg';
import '../styles/introduction.css';

export default function Introduction() {
  // Retrieve the image URL from localStorage
  const storedImageUrl = localStorage.getItem('introImage');
  const initialImageUrl = storedImageUrl || img1;

  // State to manage the current image URL
  const [imageUrl, setImageUrl] = React.useState(initialImageUrl);

  useEffect(() => {
    localStorage.setItem('introImage', imageUrl);
  }, [imageUrl]);

  return (
    <div className="intro">
      <div className="ballet-font">
        <Link to="/">
          <h1 >Hồng Nhung & Thành Đạt</h1>
        </Link>
      </div>
      <div>
        <img className="img1" src={imageUrl} alt="image1" />
      </div>
    </div>
  );
}
