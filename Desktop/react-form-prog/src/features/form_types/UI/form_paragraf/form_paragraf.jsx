import { TextField } from "@mui/material";
import { useContext } from "react";
import { FormSubmitState } from "../../../../modules/form/form";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormParagraf() {

   const { options, type, question, required } = useContext(FormFieldState);
   const { register, control, errors } = useContext(FormSubmitState);

   return (
      <>
         <TextField
            {...register(question, { required: required })}
            sx={{ width: '100%' }}
            multiline
            maxRows={4}
            variant="standard"
         />
         {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
      </>
   );
}

export default FormParagraf;