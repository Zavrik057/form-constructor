
import { FormControl, Input, InputAdornment } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Time() {
   return (
      <>
         <FormControl variant="standard">
            <Input
               disabled
               id="input-with-icon-adornment"
               endAdornment={
                  <InputAdornment position="end">
                     <AccessTimeIcon />
                  </InputAdornment>
               }
               defaultValue={'Time'}
            />
         </FormControl>
      </>
   );
}

export default Time;