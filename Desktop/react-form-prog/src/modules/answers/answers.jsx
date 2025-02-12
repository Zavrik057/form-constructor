import { useContext } from "react";
import { AppState } from "../../App/App";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import AnswerCard from "../../slices/answers_card/answers_card";
import './answers.css'
import dayjs from "dayjs";
import BackgroundDecor from "../../UI/background_decor/background_decor";
import VoideAlert from "../../UI/voide_alert/voide_alert";
import { Container, Grid2 } from "@mui/material";
import { useViewport } from "react-viewport-hooks";

function Answers() {

   const { vw } = useViewport();
   const day = dayjs();
   const { repositories, setRepositories } = useContext(AppState);
   const { id, currentLink } = useContext(FormState);

   return (
      <>
         <div className={currentLink === 'answers' ? 'answers relative' : 'answers none'}>
            <BackgroundDecor />
            <div className="answer-main relative z-14">
               <Container>
                  {repositories[id].answers.length == 0 && <VoideAlert>you haven't any answers</VoideAlert>}
                  <Grid2
                     container
                     spacing={3}
                     columns={vw > 1010 ? 3 : vw > 580 ? 2 : 1}
                  >{repositories[id].answers.map((item, index) => <AnswerCard data={item} index={index} />)}
                  </Grid2>
               </Container>
            </div>
         </div>
      </>
   );
}

export default Answers;