import { Input } from "@mui/material";
import './form_field.css'
import { useForm } from "react-hook-form";
import { useCallback, useContext } from "react";
import { FormState } from "../../pages/current_repositorie_page.jsx/currentRepositoriePage";
import { FormSubmitState } from "../../modules/form/form";
import { createContext } from "react";
import FormTypes from "../../features/form_types/form_types";

export const FormFieldState = createContext(null);

function FormField({ data, index }) {
   const { register } = useContext(FormSubmitState);
   const { dateIndexes, setDateIndexes } = useContext(FormSubmitState);

   const options = data.options;
   const type = data.type;
   const question = data.question;
   const required = data.required;


   // if (type == 'date') setDateIndexes([...dateIndexes, idnex]);

   return (
      <>
         <FormFieldState.Provider value={{ options, type, question, required }}>
            <div className="form-field">
               <div className="form-field__question">{question}</div>
               {/* <Input {...register(data.question || 'nothing')} sx={{ width: '50%' }} /> */}
               <FormTypes />
            </div>
         </FormFieldState.Provider>
      </>
   );
}

export default FormField;