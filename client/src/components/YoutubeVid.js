import React from 'react';
import YouTube from 'react-youtube';
import '../styles/video.css';

const VideoPlayer = () => {
  const [videoId, setVideoId] = React.useState('gB16jzbrVps');

  const opts = {
    height: '300',
    width: '400',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div >
      <h2> Lễ Ăn Hỏi</h2>
      <div className='video'>
      <YouTube videoId={videoId} opts={opts} />
      </div>
      
    </div>
    
  );
}

export default VideoPlayer;