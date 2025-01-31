
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useContext, useEffect, useState } from 'react';
import { FormSubmitState } from "../../../../modules/form/form";
import { FormFieldState } from "../../../../slices/form_field/form_field";
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import ErrorMessage from '../../../../UI/errror_message/error_message';

function FormDate() {

   const { question, required } = useContext(FormFieldState);
   const { control, errors } = useContext(FormSubmitState);

   return (
      <>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
               name={question}
               control={control}
               rules={{ required: required }}
               render={({ field }) => (
                  <>
                     <DatePicker
                        label="Select Date"
                        value={field.value}
                        onChange={(newValue) => field.onChange(newValue)}
                        slotProps={{
                           textField: {
                              error: false, // You can manage errors here
                              helperText: "",
                           },
                        }}
                     />
                     {errors[question] && <ErrorMessage>this field is required</ErrorMessage>}
                  </>
               )}
            />
         </LocalizationProvider>
      </>
   );
}

export default FormDate;