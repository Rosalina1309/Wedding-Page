
import React, { useRef, useEffect, useState } from 'react';
import { Howl } from 'howler';
import yeulainvisible from '../audio/YeuLa.mp3';
import '../styles/audio.css'; // Import the CSS file

const Audio = () => {
  const sound = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (!sound.current) {
      sound.current = new Howl({
        src: [yeulainvisible],
        onend: () => {
          setIsPlaying(false);
        },
      });
    }

    sound.current.play();
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (sound.current) {
      sound.current.stop();
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playSound();
        // Remove the event listener after the first visibility change
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };

    // Add a visibility change event listener to initiate audio playback
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopSound(); // Stop the sound on unmount
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="audio-container">
    <div className='audio-h2'>
      <h2> Our Song</h2>
      <h2> Yêu Là - Trọng Hiếu</h2>
    </div>
    <div className='audio-p'>
    <p> Chú rể đã thổ lộ rằng mỗi lần anh nghe bài hát này
      nguời đầu tiên anh nghĩ tới chính là cô dâu.</p>
      <p>Hãy nhấn nghe và để bài hát này chạy nền trong khi bạn kéo xuống xem tiếp nhé</p>
    
    </div>
      <button
        onClick={toggleSound}
        className="audio-button"
        onMouseEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onMouseLeave={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        {isPlaying ? 'Stop Music 🎶' : 'Play Music 🎶'}
      </button>
    </div>
  );
};

export default Audio;
