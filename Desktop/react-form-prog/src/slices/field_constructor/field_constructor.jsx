
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import './field_constructor.css'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Input, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import AdjustIcon from '@mui/icons-material/Adjust';
import { ConstructorState } from '../../modules/constructor/constructor';
import ConstructorOptions from '../../features/options_constructor/options_cosntructor';
import ConstructorTypeButton from '../../features/types_button/types_button';
import { Date } from '../../features/types_constructor/types_constructor';
import useInput from '../../hooks/useInput/useInput';
import ConstructorAdd from '../../features/add_constructor/add_constructor'
import DOMPurify from "dompurify";
import { useViewport } from 'react-viewport-hooks';

export const FieldDataState = createContext(null);

function ConstructorField({ index, id }) {

   const [question, setQuestion] = useState('');
   const [isRequire, setIsRequire] = useState(false);
   const [currentType, setCurrentType] = useState('short answer');

   const { vw } = useViewport();

   const [ref, onChange] = useInput(changeValue);

   function changeValue() {
      let cleanInput = ref.current.value.replace(/["']/g, "\\$&");
      items.questions[index].question = cleanInput;
      console.log(cleanInput);
   }

   console.log('render');
   const { changeCurrentField, currentField, isSubmited, data, setData, items, setItems } = useContext(ConstructorState);


   function changeCurrentType(currentType) {
      items.questions[index].type = currentType;
   }
   function changeRequirements(event) {
      setIsRequire(event.target.checked);
      items.questions[index].required = !isRequire;
   }
   return (
      <>
         <FieldDataState.Provider value={{ changeCurrentType, changeRequirements, index, currentType, setCurrentType }}>
            <div
               className={currentField == index ? 'constructor-field focus' : 'constructor-field'}
               onClick={() => changeCurrentField(index)}
            >
               <div className="constructor-field__decor"></div>
               <div className="constructor-field__content">
                  <div className="constructor-field__header">
                     <div className="constructor-field__icon"><DragIndicatorIcon /></div>
                  </div>
                  <div className="constructor-field__main">
                     <div className="constructor-field__row">
                        <div className="constructor-field__form">
                           <Input
                              inputRef={ref}
                              onChange={onChange}
                              defaultValue={'Quesiton' + (index + 1)}
                              className='_input'
                              sx={{
                                 fontSize: vw > 700 ? '1.4em' : '1em',
                                 paddingTop: '10px',
                                 paddingBottom: vw > 700 ? '10px' : '2px'
                              }}
                              placeholder='Question...'
                              inputProps={'description'} />
                        </div>
                        <div className="constructor-field__menu">
                           <div className="constructor-field__button">
                              <ConstructorTypeButton />
                           </div>
                        </div>
                     </div>
                     <div className="constructor-field__add">
                        <ConstructorAdd />
                     </div>
                  </div>
                  <div className="constructor-field__footer">
                     <ConstructorOptions id={id} />
                  </div>
               </div>
            </div>
         </FieldDataState.Provider>
      </>
   );
}

export default ConstructorField;