import React from 'react'
import './App.css';
import img1 from './images/img1.jpg';


function App() {
  
  return (
    <div className="App">
      <h2>Save the Date</h2>
      <div className="ballet-font">
        <h1>Hồng Nhung & Thành Đạt</h1>
      </div>
      <h2> 22.01.2024</h2>
      <img className="img1" src={img1} alt="image1" />
    </div>
  );
}

export default App;
