import { Button, styled } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useMemo } from "react";
import { useViewport } from "react-viewport-hooks";


function ColoredButton({ children, disabled, submitData }) {

   const { vw } = useViewport();

   const buttonProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '14px' : '12px',
         padding: 'vw > 770' ? '10px 20px' : '3px 7px',
         textTransform: 'capitalize',
         alignSelf: 'center',
      }
   }, [vw]);

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
            sx={{ ...buttonProps }}
         >{children}</ColorButton>
      </>
   );
}

export default ColoredButton;