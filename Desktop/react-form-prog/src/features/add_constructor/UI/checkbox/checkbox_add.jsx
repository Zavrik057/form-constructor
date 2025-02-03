
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useInput from '../../../../hooks/useInput/useInput';
import { Input } from '@mui/material';
import { useContext } from 'react';
import { CheckboxState } from './checkbox';
import { Construction, ConstructionSharp } from '@mui/icons-material';
import { ConstructorState } from '../../../../modules/constructor/constructor';
import { ConstructorAddState } from '../../add_constructor';


function CheckboxAddItem({ item, i }) {

   const { items } = useContext(ConstructorState);
   const { removeItem, changeValue, index, more } = useContext(CheckboxState);
   const [ref, onChange] = useInput(changeValue);
   const { sizeValue } = useContext(ConstructorAddState);

   return (
      <>
         <div className="add__item">
            <div className="add__icon"><CheckBoxIcon sx={{ fontSize: sizeValue }} /></div>
            <Input
               inputRef={ref}
               onChange={(e) => onChange(e, i)}
               placeholder='set option' className="add__input"
               inputProps={''}
            />
            <div className="add__delete" onClick={() => removeItem(item.id, items.questions[index].options[i].id)}>{more.length > 1 && <CloseIcon sx={{}} />}</div>
         </div>
      </>
   );
}

export default CheckboxAddItem;