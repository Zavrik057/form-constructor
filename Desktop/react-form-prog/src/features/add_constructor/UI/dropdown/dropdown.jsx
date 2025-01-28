
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Input } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ConstructorState } from '../../../../modules/constructor/constructor';
import { FieldDataState } from '../../../../slices/field_constructor/field_constructor';
import useInput from '../../../../hooks/useInput/useInput';
import DropdownAddItem from './dropdown_add';
import { createContext } from 'react';

export const DropdownState = createContext(null);

function DropDown() {

   const { items, setItems, currentField } = useContext(ConstructorState);
   const { index } = useContext(FieldDataState);
   const [more, setMore] = useState([{ id: Date.now(), value: '' }]);

   function changeValue(ref, index) {
      items.questions[currentField].options[index].value = ref.current.value;
   }


   function addItem() {
      items.questions[index].options.push({ id: Date.now(), value: '' });
      setMore([...more, { id: Date.now(), value: '' }]);
   }
   function removeItem(identMore, identItems) {
      setMore(more.filter((item, index) => item.id != identMore));
      items.questions[currentField].options = items.questions[currentField].options.filter(item => item.id != identItems);
   }

   return (
      <>
         <DropdownState.Provider value={{ removeItem, changeValue, index, more }}>
            {<div className="add__content">
               {more.map((item, i) => <DropdownAddItem key={item.id} item={item} i={i} />)}
               <div className="add__more" onClick={addItem}>add option ...</div>

            </div>}
         </DropdownState.Provider>
      </>
   );
}

export default DropDown;