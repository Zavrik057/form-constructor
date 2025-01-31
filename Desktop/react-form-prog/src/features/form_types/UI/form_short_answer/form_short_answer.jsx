import { Input } from "@mui/material";
import { useContext } from "react";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { FormSubmitState } from "../../../../modules/form/form";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormShortAnswer() {

   const { options, type, question, required } = useContext(FormFieldState);
   const { register, control, errors } = useContext(FormSubmitState);
   return (
      <>
         <Input
            sx={{ width: '50%' }}
            {...register(question, { required: required })}
         />
         {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
      </>
   );
}

export default FormShortAnswer;