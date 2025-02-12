import { createContext, useContext, useEffect, useState } from "react";
import { AppState } from "../../App/App";
import FormField from "../../slices/form_field/form_field";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import './form.css'
import FormHeader from "../../slices/form_header/form_header";
import { useForm } from "react-hook-form";
import SubmitButton from "../../UI/submit_button/button_constructor";
import { Button, Checkbox, FormControlLabel, Input, Stack } from "@mui/material";
import FormButtons from "../../slices/form_buttons/form_buttons";
import { deepPurple } from "@mui/material/colors";
import ColoredButton from "../../UI/colored_button/colored_button";
import DefaultButton from "../../UI/default_button/default_button";

export const FormSubmitState = createContext(null);
function Form() {
   const { repositories, colorTheme } = useContext(AppState);
   const { id, currentLink } = useContext(FormState);
   const { control, register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

   const [dateIndexes, setDateIndexes] = useState([]);

   const submit = data => {
      repositories[id].answers = [...repositories[id].answers, {
         date: new Date().toLocaleDateString(),
         time: new Date().toLocaleTimeString(),
         response: data,
      }];
      reset();
   }
   return (
      <>
         <FormSubmitState.Provider value={{ register, control, errors, setDateIndexes, dateIndexes }}>
            <div className={currentLink === 'questions' ? 'form' : 'form none'} style={{ background: colorTheme.bgColor }}>
               <form onSubmit={handleSubmit(submit)}>
                  <FormHeader data={repositories[id].form.headerField} />
                  {repositories[id].form.questions.map((item, index) => <FormField key={item.id} data={item} index={index} />)}
                  <FormButtons>
                     <ColoredButton>submit</ColoredButton>
                     <DefaultButton onClick={() => reset()}>Reset</DefaultButton>
                  </FormButtons>
               </form>
            </div>
         </FormSubmitState.Provider>
      </>
   );
}

export default Form;