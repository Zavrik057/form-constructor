
import { Input } from "@mui/material";
import './header_constructor.css'
import { useContext, useState } from "react";
import useInput from "../../hooks/useInput/useInput";
import { ConstructorState } from "../../modules/constructor/constructor";

function HeaderField() {

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
            <Input inputRef={titleRef} onChange={onChangeTitle} sx={{ fontSize: '3em' }} defaultValue="Untitled form" inputProps={'description'} />
            <Input inputRef={textRef} onChange={onChangeText} sx={{ fontSize: '1.3em' }} placeholder="Enter description" inputProps={'description'} />
         </div>
      </>
   );
}

export default HeaderField;