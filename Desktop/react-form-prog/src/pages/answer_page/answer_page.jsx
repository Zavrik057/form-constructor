import { useParams } from "react-router-dom";
import Navbar from "../../modules/navbar/navbar";
import { createContext } from "react";
import Answer from "../../modules/answer/answer";

export const AnswerState = createContext(null);

function AnswerPage() {
   const { id, index } = useParams();
   return (
      <>
         <AnswerState.Provider value={{ id, index }}>
            <Answer />
         </AnswerState.Provider>
      </>
   );
}

export default AnswerPage;