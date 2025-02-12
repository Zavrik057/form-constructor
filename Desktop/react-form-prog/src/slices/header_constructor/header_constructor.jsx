
import { Input } from "@mui/material";
import './header_constructor.css'
import { useContext, useEffect, useMemo, useState } from "react";
import useInput from "../../hooks/useInput/useInput";
import { ConstructorState } from "../../modules/constructor/constructor";
import { useViewport } from "react-viewport-hooks";
import { AppState } from "../../App/App";

function HeaderField() {

   const { vw } = useViewport();

   const titleProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '3em' : '2em',
      }
   }, [vw]);
   const textProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '1.3em' : '0.9em',
      }
   }, [vw]);

   const { items } = useContext(ConstructorState);
   const { colorTheme } = useContext(AppState);

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
            <div
               className="header-field__decor-line"
               style={{ background: colorTheme.mainColor }}
            ></div>
            <Input inputRef={titleRef} onChange={onChangeTitle} sx={{ ...titleProps }} defaultValue="Untitled form" inputProps={'description'} />
            <Input inputRef={textRef} onChange={onChangeText} sx={{ ...textProps }} placeholder="Enter description" inputProps={'description'} />
         </div>
      </>
   );
}

export default HeaderField;