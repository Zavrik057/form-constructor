import { Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useContext, useMemo } from "react";
import { useViewport } from "react-viewport-hooks";
import { AppState } from "../../App/App";

function DefaultButton({ children, disabled, onClick }) {

   const { vw } = useViewport();
   const { colorTheme } = useContext(AppState);

   const buttonProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '14px' : '12px',
         padding: 'vw > 770' ? '10px 20px' : '3px 7px',
         textTransform: 'capitalize',
         alignSelf: 'center',
         color: colorTheme.mainColor,
      }
   }, [vw, colorTheme]);

   return (
      <>
         <Button
            onClick={onClick}
            disabled={disabled}
            sx={{ ...buttonProps }}
         >{children}</Button>
      </>
   );
}

export default DefaultButton;