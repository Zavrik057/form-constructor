
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import { Input } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';
import { ConstructorState } from '../../../../modules/constructor/constructor';
import { FieldDataState } from '../../../../slices/field_constructor/field_constructor';
import useInput from '../../../../hooks/useInput/useInput';
import MultipleChoiceAddItem from './multiple_choice_add';

export const MultipleChoiceState = createContext(null);
function MultipleChoice() {

   const { items, setItems, currentField } = useContext(ConstructorState);
   const { index } = useContext(FieldDataState);
   const [more, setMore] = useState([{ id: Date.now(), value: '' }]);
   const [ref, onChange] = useInput(changeValue);

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
         <MultipleChoiceState.Provider value={{ removeItem, changeValue, index, more }}>
            {<div className="add__content">
               {more.map((item, i) => <MultipleChoiceAddItem key={item.id} item={item} i={i} />)}
               <div className="add__more" onClick={addItem}>add option ...</div>
            </div>}
         </MultipleChoiceState.Provider>
      </>
   );
}

export default MultipleChoice;