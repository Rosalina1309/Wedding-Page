

// import React, { useState } from 'react';
// import '../styles/quiz.css'; // Import the CSS file

// const qna = {
//   'Ai là người chủ động làm quen trước?': ['Chú rể', 'Cô dâu'],
//   'Lần đầu tiên chúng mình gặp nhau là ở đâu?': ['Hannover', 'Essen', 'Berlin', 'Hà Nội'],
//   'Cô dâu khi mới yêu nhau hay gọi chú rể là gì?': ['Chú', 'Anh', 'Tình yêu', 'Đạt'],
// };

// const Quiz = () => {
//   const [answers, setAnswers] = useState([]);

//   const handleAnswer = (question, selectedAnswer) => {
//     const correctAnswer = qna[question][0];
//     const isCorrect = selectedAnswer === correctAnswer;
//     setAnswers((prevAnswers) => [...prevAnswers, { question, selectedAnswer, isCorrect }]);
//   };

//   return (
//     <div className="quiz-container">
//       <h2>Một vài facts về chúng mình</h2>
//       {Object.entries(qna).map(([question, choices]) => (
//         <div key={question} className="question-box">
//           <p className="question">{question}</p>
//           {choices.map((choice, index) => (
//             <button
//               key={choice}
//               onClick={() => handleAnswer(question, choice)}
//               className="answer-button"
//             >
//               {choice}
//             </button>
//           ))}
//         </div>
//       ))}
//       <h3 className="results">Đáp án:</h3>
//       {answers.map((answer, index) => (
//         <div key={index} className={answer.isCorrect ? 'correct-answer' : 'wrong-answer'}>
//           {answer.isCorrect ? (
//             <p>Chính xác! {answer.selectedAnswer} là đáp án đúng đó.</p>
//           ) : (
//             <p>
//               Whoopsie! Bạn chọn {answer.selectedAnswer}, nhưng mà đáp án là {qna[answer.question][0]} cơ.
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz;


import React, { useState } from 'react';
import '../styles/quiz.css'; // Import the CSS file

const qna = {
  'Ai là người chủ động làm quen trước?': ['Chú rể', 'Cô dâu'],
  'Lần đầu tiên chúng mình gặp nhau là ở đâu?': ['Hannover', 'Essen', 'Berlin', 'Hà Nội'],
  'Cô dâu khi mới yêu nhau hay gọi chú rể là gì?': ['Chú', 'Anh', 'Tình yêu', 'Đạt'],
};

const Quiz = () => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (question, selectedAnswer) => {
    const correctAnswer = qna[question][0];
    const isCorrect = selectedAnswer === correctAnswer;
    setAnswers((prevAnswers) => [...prevAnswers, { question, selectedAnswer, isCorrect }]);

    // Scroll down to the bottom
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="quiz-container">
      <h2>Một vài facts về chúng mình</h2>
      {Object.entries(qna).map(([question, choices]) => (
        <div key={question} className="question-box">
          <p className="question">{question}</p>
          {choices.map((choice, index) => (
            <button
              key={choice}
              onClick={() => handleAnswer(question, choice)}
              className="answer-button"
            >
              {choice}
            </button>
          ))}
        </div>
      ))}
      <h3 className="results">Đáp án:</h3>
      {answers.map((answer, index) => (
        <div key={index} className={answer.isCorrect ? 'correct-answer' : 'wrong-answer'}>
          {answer.isCorrect ? (
            <p>Chính xác! {answer.selectedAnswer} là đáp án đúng đó.</p>
          ) : (
            <p>
              Whoopsie! Bạn chọn {answer.selectedAnswer}, nhưng mà đáp án là {qna[answer.question][0]} cơ.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
