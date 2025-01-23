
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useInput from '../../../hooks/useInput/useInput';
import { Input } from '@mui/material';
import { useContext } from 'react';
import { CheckboxState } from './checkbox';


function AddItem({ item, i }) {

   const { removeItem, changeValue, index, more } = useContext(CheckboxState);
   const [ref, onChange] = useInput(changeValue);

   return (
      <>
         <div className="add__item">
            <div className="add__icon"><CheckBoxIcon sx={{ fontSize: '26px' }} /></div>
            <Input inputRef={ref} onChange={(e) => onChange(e, i)} placeholder='set option' className="add__input" inputProps={''} />
            <div className="add__delete" onClick={() => removeItem(item.id, index)}>{more.length > 1 && <CloseIcon sx={{ color: 'red' }} />}</div>
         </div>
      </>
   );
}

export default AddItem;