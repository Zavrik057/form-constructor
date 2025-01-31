import { Box, Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import './repositorie_choice.css'
import { deepPurple, purple } from "@mui/material/colors";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";

function RepositorieChoice() {
   const [value, setValue] = useState('questions');
   const { changeCurrentLink } = useContext(FormState);

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
               <Tab value="answers" label="answers" />
               <Tab value="settings" label="settings" />
            </Tabs>
         </div>
      </>
   );
}

export default RepositorieChoice;