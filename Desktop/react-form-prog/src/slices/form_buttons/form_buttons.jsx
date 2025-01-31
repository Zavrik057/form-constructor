
import { Button, Stack, styled } from "@mui/material";
import SubmitButton from "../../UI/submit_button/button_constructor";
import { deepPurple } from "@mui/material/colors";

function FormButtons({ children }) {

   return (
      <>
         <Stack
            width={'100%'}
            direction={'row'}
            justifyContent={'space-between'}
            gap={'20px'}
         >{children}</Stack>
      </>
   );
}

export default FormButtons;