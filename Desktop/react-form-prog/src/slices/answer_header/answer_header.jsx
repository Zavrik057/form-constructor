import { useContext } from "react";
import { AnswerState } from "../../pages/answer_page/answer_page";
import { RepositoriesState } from "../../App/App";
import './answer_header.css'

function AnswerHeader() {
   
   const { id, index } = useContext(AnswerState);
   const { repositories } = useContext(RepositoriesState);
   const headerData = repositories[id].form.headerField;
   const headerDate = repositories[id].answers[index].date;
   const headerTime = repositories[id].answers[index].time;

   return (
      <>
         <div className="answer-header">
            <div className="answer-header__header">
               <div className="answer-header__title">{headerData.title}</div>
               <div className="answer-header__text">{headerData.text}</div>
               <div className="answer-header__timeline">
                  <div className="answer-header__date">date: {headerDate}</div>
                  <div className="answer-header__time">time: {headerTime}</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default AnswerHeader;