import React, { useState, useEffect } from 'react';
import '../styles/savethedate.css';

function Countdown() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target date and time (17:30 on January 22, 2024)
  const targetDate = new Date('2024-01-22T17:30:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        clearInterval(interval); // Stop the countdown when the target time is reached
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts
    };
  }, [targetDate]);

  return (
    <div className='countdown'>
      <em><h2>Save The Date</h2></em>
      <p className='the-date'>Thứ Hai 22/01/2024</p>
      <div className='countdown-clock'>
      <p>{countdown.days} ngày :{countdown.hours} giờ :{countdown.minutes} phút :{countdown.seconds} giây</p>
      </div>
    </div>
  );
}

export default Countdown;
