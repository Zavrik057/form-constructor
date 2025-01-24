
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ConstructorState } from '../../../../modules/constructor/constructor';
import { FieldDataState } from '../../../../slices/field_constructor/field_constructor';
import useInput from '../../../../hooks/useInput/useInput';
import { createContext } from 'react';
import { AccountCircle } from '@mui/icons-material';
import CheckboxAddItem from './checkbox_add';

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
   function removeItem(identMore, identItems) {
      setMore(more.filter((item, index) => item.id != identMore));
      items[currentField].options = items[currentField].options.filter(item => item.id != identItems);
   }

   return (
      <>
         <CheckboxState.Provider value={{ removeItem, changeValue, index, more }}>
            {<div className="add__content">
               {more.map((item, i) => <CheckboxAddItem key={item.id} item={item} i={i} />)}
               <div className="add__more" onClick={addItem}>add option ...</div>
            </div>}
         </CheckboxState.Provider>
      </>
   );
}

export default Checkbox;