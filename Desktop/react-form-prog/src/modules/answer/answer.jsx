
import './answer.css'
import AnswerHeader from '../../slices/answer_header/answer_header';
import AnswerResponse from '../../slices/answer_response/answer_response';
import { useContext } from 'react';
import { AppState } from '../../App/App';

function Answer() {
   const { colorTheme } = useContext(AppState);
   return (
      <>
         <div className="answer" style={{ background: colorTheme.bgColor }}>
            <div className="answer-content">
               <AnswerHeader />
               <AnswerResponse />
            </div>
         </div>
      </>
   );
}

export default Answer;