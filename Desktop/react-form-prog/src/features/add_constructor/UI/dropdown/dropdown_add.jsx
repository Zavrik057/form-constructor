
import { Input } from "@mui/material";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { DropdownState } from "./dropdown";
import { ConstructorState } from "../../../../modules/constructor/constructor";
import { useContext } from "react";
import useInput from "../../../../hooks/useInput/useInput";
import CloseIcon from '@mui/icons-material/Close';


function DropdownAddItem({ item, i }) {

   const { items } = useContext(ConstructorState);
   const { removeItem, changeValue, index, more } = useContext(DropdownState);
   const [ref, onChange] = useInput(changeValue);

   return (
      <>
         <div className="add__item">
            <div className="add__icon"><ArrowDropDownCircleIcon sx={{ fontSize: '26px' }} /></div>
            <Input inputRef={ref} onChange={(e) => onChange(e, i)} placeholder='set option' className="add__input" inputProps={''} />
            <div className="add__delete" onClick={() => removeItem(item.id, items.questions[index].options[i].id)}>{more.length > 1 && <CloseIcon sx={{ color: 'red' }} />}</div>
         </div>
      </>
   );
}

export default DropdownAddItem;