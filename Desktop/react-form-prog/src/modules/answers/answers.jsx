import { useContext } from "react";
import { RepositoriesState } from "../../App/App";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import AnswerCard from "../../slices/answers_card/answers_card";
import './answers.css'
import dayjs from "dayjs";
import BackgroundDecor from "../../UI/background_decor/background_decor";
import VoideAlert from "../../UI/voide_alert/voide_alert";

function Answers() {

   const day = dayjs();
   const { repositories, setRepositories } = useContext(RepositoriesState);
   const { id, currentLink } = useContext(FormState);

   return (
      <>
         <div className={currentLink === 'answers' ? 'answers relative' : 'answers none'}>
            <BackgroundDecor />
            <div className="answer-main relative z-14">
               {repositories[id].answers.length == 0 && <VoideAlert>you haven't any answers</VoideAlert>}
               <div className="answers-grid">
                  {repositories[id].answers.map((item, index) => <AnswerCard data={item} index={index} />)}
               </div>
            </div>
         </div>
      </>
   );
}

export default Answers;