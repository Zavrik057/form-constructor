import { Badge, badgeClasses, Box, Tab, Tabs } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import './repositorie_choice.css'
import { deepPurple, purple } from "@mui/material/colors";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import { AppState } from "../../App/App";

function RepositorieChoice() {
   const [value, setValue] = useState('questions');
   const { changeCurrentLink, id } = useContext(FormState);
   const { repositories } = useContext(AppState);
   const [bagdeValue, setBadgeValue] = useState(0);

   useEffect(() => {
      setBadgeValue(repositories[id].answers.length);
   }, [repositories[id].answers]);

   function handleChange(event, newValue) {
      setValue(newValue);
      changeCurrentLink(newValue);
   };
   return (
      <>
         <div className="repositorie-choice">
            <Tabs
               value={value}
               onChange={handleChange}
               textColor='info'
               sx={{ color: deepPurple[500] }}
               indicatorColor='secondary'
               aria-label="secondary tabs example"
            >
               <Tab value="questions" label="Questions" />
               <Tab value="answers" label={
                  <Badge sx={{ padding: '10px' }} color="secondary" badgeContent={bagdeValue}>
                     Answers
                  </Badge>
               } />
            </Tabs>
         </div>
      </>
   );
}

export default RepositorieChoice;