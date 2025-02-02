
import { useContext } from 'react';
import './answer.css'
import AnswerHeader from '../../slices/answer_header/answer_header';
import AnswerResponse from '../../slices/answer_response/answer_response';

function Answer() {

   return (
      <>
         <div className="answer">
            <div className="answer-content">
               <AnswerHeader />
               <AnswerResponse />
            </div>
         </div>
      </>
   );
}

export default Answer;