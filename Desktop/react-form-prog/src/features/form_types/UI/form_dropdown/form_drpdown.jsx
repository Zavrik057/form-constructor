import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useContext } from "react";
import { FormSubmitState } from "../../../../modules/form/form";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormDropdown() {

   const { options, type, question, required } = useContext(FormFieldState);
   const { register, errors } = useContext(FormSubmitState);

   return (
      <>
         <Stack direction={'column'}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
               <InputLabel id="form-label">Choose</InputLabel>
               <Select
                  {...register(question, { required: required })}
                  label="Choose"
                  labelId="form-label"
                  sx={{
                     "& .MuiOutlinedInput-notchedOutline": { borderColor: deepPurple[500] },
                  }}
               >
                  {options.map((item, index) => <MenuItem value={item.value || `option${index + 1}`}>{item.value || `option${index + 1}`}</MenuItem>)}
               </Select>
            </FormControl>
            {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
         </Stack>
      </>
   );
}

export default FormDropdown;