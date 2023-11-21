

import React, { useState, useEffect } from 'react';
import closedEnvelope from '../images/pink-closed.png';
import openedEnvelope from '../images/pink-open.png';
import Confetti from './Confetti'; // Make sure to import the Confetti component
import '../styles/invitations.css';

const Invitation = () => {
  const [isEnvelopeOpen, setEnvelopeOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isEnvelopeOpen) {
      // Add a delay before showing the content (1000 milliseconds = 1 second)
      const contentTimeout = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(contentTimeout); // Clear the timeout if the component unmounts
    }
  }, [isEnvelopeOpen]);

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(!isEnvelopeOpen);
  };

  return (
    <div className={`invitation ${isEnvelopeOpen ? 'open' : ''}`}>
      <h2>Nhấn Vào Bức Thư Để Mở</h2>
      <p>Có gì trong bức thư này nhỉ?</p>
      <div className="envelope" onClick={handleEnvelopeClick}>
        {isEnvelopeOpen ? (
          <div className="envelope-content">
            <img className="opened-envelope" src={openedEnvelope} alt="opened-envelope" />
            <Confetti />
            <em>
              <p>Happy Wedding </p>
            </em>
          </div>
        ) : (
          <img className="closed-envelope" src={closedEnvelope} alt="closed-envelope" />
        )}
      </div>
      {showContent && isEnvelopeOpen && (
        <div className="content">
          <div className="invi-p1">
            <h3>Trân trọng kính mời mọi người</h3>
            <h3>tới tham dự </h3>
            <h3>lễ cưới của chúng mình</h3>
            <div className='d-n'>
              <h1>Hồng Nhung </h1>
              <h1>&</h1>
              <h1>Thành Đạt</h1>
            </div>
          </div>
          <div className="invi-p2">
            <b><p>Hôn lễ được tổ chức tại</p></b>
            <h2>Grand Plaza Hotel</h2>
            <h3>117 Đường Trần Duy Hưng,</h3>
            <h3>Trung Hoà, Cầu Giấy, Hà Nội</h3>
            <h3>17:30 | THỨ HAI | 22.01.2024</h3>
            <p>(Tức ngày 12 tháng 12 </p>
            <p>năm Quý Mão)</p>
            <h3>Sự hiện diện của mọi người là niềm vinh hạnh của chúng mình</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invitation;
