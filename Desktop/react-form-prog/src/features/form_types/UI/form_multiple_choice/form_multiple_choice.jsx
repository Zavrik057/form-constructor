import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { FormSubmitState } from "../../../../modules/form/form";
import { useContext } from "react";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormMultipleChoice() {
   const { options, type, question, required } = useContext(FormFieldState);
   const { register, errors } = useContext(FormSubmitState);

   // const [value, setValue] = React.useState('female');

   // const handleChange = (event) => {
   //    setValue(event.target.value);
   // };
   return (
      <>
         <Stack direction={'column'}>
            <RadioGroup>
               {options.map(item => <FormControlLabel
                  {...register(question, { required: required })}
                  value={item.value}
                  control={<Radio
                     sx={{
                        color: deepPurple[500],
                        '&.Mui-checked': {
                           color: deepPurple[600],
                        },
                     }} />}
                  label={item.value} />
               )}
            </RadioGroup>
            {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
         </Stack>
      </>
   );
}

export default FormMultipleChoice;