import { Button, styled } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useContext, useMemo } from "react";
import { useViewport } from "react-viewport-hooks";
import { AppState } from "../../App/App";


function ColoredButton({ children, disabled, submitData }) {

   const { vw } = useViewport();
   const { colorTheme } = useContext(AppState);

   const buttonProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '14px' : '12px',
         padding: 'vw > 770' ? '10px 20px' : '3px 7px',
         textTransform: 'capitalize',
         alignSelf: 'center',
      }
   }, [vw]);

   const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(colorTheme.mainColor),
      backgroundColor: colorTheme.mainColor,
      '&:hover': {
         backgroundColor: colorTheme.secondColor,
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