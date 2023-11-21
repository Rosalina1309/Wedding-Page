
import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';

import AboutUs from './components/AboutUs';
import Invitation from './components/Invitation';
import Dat from './components/Dat';
import Nhung from './components/Nhung';
import LoadingPage from './components/Loading';
import SendUsAMessage from './components/SendUsAMessage';
import Introduction from './components/Introduction';
import Countdown from './components/Countdown';
import Slideshows from './components/Slideshows';
import Quiz from './components/Quiz';
import QuizIcon from './components/QuizIcon';
import YoutubeVid from './components/YoutubeVid';
import Audio from './components/Audio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading && <LoadingPage />} {/* Include LoadingPage conditionally */}
              {!isLoading && (
                <>
                  <Introduction />
                  <Countdown />
                  <Audio/>
                  <AboutUs />
                  <Dat />
                  <Nhung />
                  <Slideshows />
                  <Invitation />
                  <SendUsAMessage />
                  <QuizIcon/>
                 
                </>
              )}
            </>
          }
        />

        <Route
          path="/quiz"
          element={
            <>
              {isLoading && <LoadingPage />} {/* Include LoadingPage conditionally */}
              {!isLoading && (
                <>
                  <Introduction />
                  <Quiz />
                </>
              )}
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
