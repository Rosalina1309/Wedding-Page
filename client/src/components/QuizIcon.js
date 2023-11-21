import {Link} from 'react-router-dom';
import pinkBubble from '../images/bubble-pink.png';
import '../styles/quizicon.css';
export default function QuizIcon () {
  return (
    <div className='bubble-icon'>
    <h2> Fun Facts</h2>
    <p> Nhấn vào trái tim dưới đây để đến với những điều hay ho về mối tình của chúng mình.</p>
      <div className="image-container">
        <img src={pinkBubble} alt="pink-bubble" className="pink-bubble" />
        <div className="image-text">
          
          <Link to='/quiz'>
          <em>
          <p>Click Me!</p>
          </em>
          </Link>
        </div>
      </div>
    </div>
  )
}