
import { Input } from "@mui/material";
import './header_constructor.css'
import { useState } from "react";

function HeaderField() {

   const [isFocus, setIsFocus] = useState(false);

   return (
      <>
         <div className={isFocus ? 'header-field focus' : 'header-field'} onClick={() => setIsFocus(true)}>
            <Input sx={{ fontSize: '3em' }} defaultValue="Untitled form" inputProps={'description'} />
            <Input sx={{ fontSize: '1.3em' }} placeholder="Enter description" inputProps={'description'} />
         </div>
      </>
   );
}

export default HeaderField;