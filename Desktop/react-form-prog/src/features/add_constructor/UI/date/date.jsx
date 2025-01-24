import { FormControl, Input, InputAdornment } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';

function DateField() {
   return (
      <>
         <FormControl variant="standard">
            <Input
               disabled
               id="input-with-icon-adornment"
               endAdornment={
                  <InputAdornment position="end">
                     <DateRangeIcon />
                  </InputAdornment>
               }
               defaultValue="Month, day, year"
            />
         </FormControl>
      </>
   );
}

export default DateField;