import React from 'react';
import '../styles/sendmess.css';
import loveLetter from '../images/love-letter.png';

export default function SendUsAMessage() {
  return (
    <div className="send-message">
      <h2>Gửi Lời Chúc</h2>
      <p> Bạn có thể gửi những lời chúc đến chúng mình tại bức thư bên dưới.</p>
      <a href="https://forms.gle/V2e5WaKquh1fXFVq9" target="_blank"><img src={loveLetter} alt="love-letter" className="love-letter" /> </a>
    </div>
  );
}
