import { useContext } from "react";
import { RepositoriesState } from "../../App/App";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import AnswerCard from "../../slices/answers_card/answers_card";
import './answers.css'
import dayjs from "dayjs";

function Answers() {

   const day = dayjs();
   const { repositories, setRepositories } = useContext(RepositoriesState);
   const { id, currentLink } = useContext(FormState);

   return (
      <>
         <div className={currentLink === 'answers' ? 'answers' : 'answers none'}>
            <div className="answers-grid">
               {repositories[id].answers.map((item, index) => <AnswerCard data={item} index={index} />)}
            </div>
         </div>
      </>
   );
}

export default Answers;