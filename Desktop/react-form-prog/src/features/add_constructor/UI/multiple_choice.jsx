
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import { Input } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ConstructorState } from '../../../modules/constructor/constructor';
import { FieldDataState } from '../../../slices/field_constructor/field_constructor';
import useInput from '../../../hooks/useInput/useInput';

function MultipleChoice() {

   const { items, setItems, currentField } = useContext(ConstructorState);
   const { index } = useContext(FieldDataState);
   const [more, setMore] = useState([{ id: Date.now(), value: '' }]);
   const [ref, onChange, value] = useInput(changeValue);

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
         {currentField == index && <div className="add__content">
            {more.map((item, i) => <div key={item.id} className="add__item">
               <div className="add__icon"><AdjustIcon sx={{ fontSize: '26px' }} /></div>
               <Input value={value} inputRef={ref} onChange={(e) => onChange(e, i)} placeholder='set option' className="add__input" inputProps={''} />
               <div className="add__delete" onClick={() => removeItem(item.id, index)}>{more.length > 1 && <CloseIcon sx={{ color: 'red' }} />}</div>
            </div>)}
            <div className="add__more" onClick={addItem}>add option ...</div>

         </div>}
      </>
   );
}

export default MultipleChoice;