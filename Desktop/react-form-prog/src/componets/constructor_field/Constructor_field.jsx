
import { useRef, useState } from 'react';
import './Constructor_field.css'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Input, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructorOptions from '../constructor_options/Constructor_options';

function ConstructorField({ index, changeField, currentField, removeField }) {

   const [age, setAge] = useState('');

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <>
         <di
            className={currentField == index ? 'constructor-field focus' : 'constructor-field'}
            onClick={changeField}
         >
            <div className="constructor-field__header">
               <div className="constructor-field__icon"><DragIndicatorIcon /></div>
            </div>
            <div className="constructor-field__main">
               <div className="constructor-field__row">
                  <div className="constructor-field__form">
                     <Input className='_input' sx={{ fontSize: '1.4em', paddingTop: '10px', paddingBottom: '10px' }} placeholder='Quesction...' inputProps={'description'} />
                  </div>
                  <div className="constructor-field__menu">
                     <div className="constructor-field__button">
                        <Select
                           className='_button'
                           sx={{ width: '100%' }}
                           value={age}
                           onChange={handleChange}
                           displayEmpty
                           inputProps={{ 'aria-label': 'Without label' }}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </div>
                  </div>
               </div>
               <div className="constructor-field__add"></div>
            </div>
            <div className="constructor-field__footer">
               <ConstructorOptions removeField={removeField} />
            </div>
         </di>
      </>
   );
}

export default ConstructorField;