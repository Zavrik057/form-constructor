import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useContext } from "react";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { FormSubmitState } from "../../../../modules/form/form";
import { Controller } from "react-hook-form";
import ErrorMessage from "../../../../UI/errror_message/error_message";

function FormTime() {

   const { question, required } = useContext(FormFieldState);
   const { control, errors } = useContext(FormSubmitState);

   return (
      <>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
               control={control}
               name={question}
               rules={{ required: required }}
               render={({ field }) => (
                  <>
                     <TimePicker
                        label="Basic time picker"
                        value={field.value}
                        onChange={(newValue) => field.onChange(newValue)}
                     // slotProps={{
                     //    textField: {


                     //    },
                     // }}
                     />
                     {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
                  </>
               )}
            />
         </LocalizationProvider>
      </>
   );
}

export default FormTime;