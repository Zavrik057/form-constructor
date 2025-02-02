import { useContext } from "react";
import { RepositoriesState } from "../../App/App";
import { AnswerState } from "../../pages/answer_page/answer_page";
import './answer_response.css'

function AnswerResponse() {

   const { id, index } = useContext(AnswerState);
   const { repositories } = useContext(RepositoriesState);
   const data = repositories[id].answers[index].response;

   function handleAnswer(item, answerIndex) {
      if (repositories[id].form.questions[answerIndex].type != 'date' &&
         repositories[id].form.questions[answerIndex].type != 'time') {
         return data[`${item}`];
      } else {
         return JSON.stringify(data[`${item}`]);
      }
   }
   return (
      <>
         <div className="answer-response">
            {Object.keys(data).map((item, answerIndex) => (
               <>
                  <div className="answer-response__item">
                     <div className="answer-response__question">{item} :</div>
                     <div className="answer-response__response">{handleAnswer(item, answerIndex)}</div>
                  </div>
               </>
            ))}
         </div>
      </>
   );
}

export default AnswerResponse;