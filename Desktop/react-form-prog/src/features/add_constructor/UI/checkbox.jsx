
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ConstructorState } from '../../../modules/constructor/constructor';
import { FieldDataState } from '../../../slices/field_constructor/field_constructor';
import useInput from '../../../hooks/useInput/useInput';
import { createContext } from 'react';
import AddItem from './add_item';
import { AccountCircle } from '@mui/icons-material';

export const CheckboxState = createContext(null);

function Checkbox() {

   const { items, setItems, currentField } = useContext(ConstructorState);
   const { index } = useContext(FieldDataState);
   const [more, setMore] = useState([{ id: Date.now(), value: '' }]);

   function changeValue(ref, index) {
      items[currentField].options[index].value = ref.current.value;
   }


   function addItem() {
      items[index].options.push({ id: Date.now(), value: '' });
      setMore([...more, { id: Date.now(), value: '' }]);
   }
   function removeItem(ident, ind) {
      setMore(more.filter((item, index) => item.id != ident));
      items[currentField].options = items[currentField].options.filter(item => item.id != ident);
   }

   return (
      <>
         <CheckboxState.Provider value={{ removeItem, changeValue, index, more }}>
            {<div className="add__content">
               {more.map((item, i) => <AddItem key={item.id} item={item} i={i} />)}
               <div className="add__more" onClick={addItem}>add option ...</div>
            </div>}
         </CheckboxState.Provider>
      </>
   );
}

export default Checkbox;