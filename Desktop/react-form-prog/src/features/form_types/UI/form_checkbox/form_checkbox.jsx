import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useContext } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { FormSubmitState } from "../../../../modules/form/form";
import { deepPurple } from "@mui/material/colors";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormCheckbox() {
   const { options, type, question, required } = useContext(FormFieldState);
   const { register, errors } = useContext(FormSubmitState);

   return (
      <>
         <Stack direction={'column'}>
            {options.map(item => <FormControlLabel
               value={item.value}
               control={<Checkbox
                  {...register(question, { required: required })}
                  sx={{
                     color: deepPurple[500],
                     '&.Mui-checked': {
                        color: deepPurple[600],
                     },
                  }}
               />}
               label={item.value}
               labelPlacement="end"
            />)}
            {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
         </Stack>
      </>
   );
}

export default FormCheckbox;