
import { Input } from "@mui/material";
import './header_constructor.css'
import { useContext, useEffect, useState } from "react";
import useInput from "../../hooks/useInput/useInput";
import { ConstructorState } from "../../modules/constructor/constructor";
import { useViewport } from "react-viewport-hooks";

function HeaderField() {

   const [titleSize, setTitleSize] = useState('3em');
   const [textSize, setTextSize] = useState('1.3em');
   const { vw } = useViewport();

   const { items } = useContext(ConstructorState);

   const [isFocus, setIsFocus] = useState(false);

   const [titleRef, onChangeTitle] = useInput(changeTitleValue);
   const [textRef, onChangeText] = useInput(changeTextValue);

   function changeTitleValue(titleRef) {
      items.headerField.title = titleRef.current.value;
   }
   function changeTextValue(textRef) {
      items.headerField.text = textRef.current.value;
   }

   return (
      <>
         <div className={isFocus ? 'header-field focus' : 'header-field'} onClick={() => setIsFocus(true)}>
            <Input inputRef={titleRef} onChange={onChangeTitle} sx={{ fontSize: vw > 770 ? '3em' : '2em' }} defaultValue="Untitled form" inputProps={'description'} />
            <Input inputRef={textRef} onChange={onChangeText} sx={{ fontSize: vw > 770 ? '1.3em' : '0.9em' }} placeholder="Enter description" inputProps={'description'} />
         </div>
      </>
   );
}

export default HeaderField;