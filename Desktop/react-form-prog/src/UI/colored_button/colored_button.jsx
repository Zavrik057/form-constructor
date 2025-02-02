import { Button, styled } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


function ColoredButton({ children, disabled, submitData }) {
   const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      '&:hover': {
         backgroundColor: deepPurple[700],
      },
   }));
   return (
      <>
         <ColorButton
            disabled={disabled}
            onClick={submitData}
            type="submit"
            sx={
               {
                  padding: '10px 20px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  alignSelf: 'center'
               }
            }
         >{children}</ColorButton>
      </>
   );
}

export default ColoredButton;