
import './add_constructor.css'
import Checkbox from "./UI/checkbox/checkbox";
import ShortAnswer from "./UI/short_answer/short_answer";
import MultipleChoice from "./UI/multiple_choice/multiple_choice";
import DropDown from "./UI/dropdown/dropdown";
import Paragraf from "./UI/paragraf/paragraf";
import { useContext, useEffect, useLayoutEffect } from 'react';
import { FieldDataState } from '../../slices/field_constructor/field_constructor';
import { ConstructorState } from '../../modules/constructor/constructor';
import DateField from './UI/date/date';
import Time from './UI/time/time';
import { useViewport } from 'react-viewport-hooks';
import { createContext } from 'react';

export const ConstructorAddState = createContext(null);
function ContructorAdd() {

   const { items } = useContext(ConstructorState);
   const { index } = useContext(FieldDataState);
   const { currentType } = useContext(FieldDataState);
   const { vw } = useViewport();
   let sizeValue = vw > 700 ? '26px' : '20px';

   useEffect(() => {
      if (currentType != 'short answer') resetOptions();
   }, [currentType]);

   function resetOptions() {
      items.questions[index].options = [{ id: Date.now(), value: '' }];
      console.log(items);
   }

   return (
      <>
         <ConstructorAddState.Provider value={{ sizeValue }}>
            <div className="add">
               <SetCurrentType currentType={currentType} />
            </div>
         </ConstructorAddState.Provider>
      </>
   );
}

export default ContructorAdd;

function SetCurrentType({ currentType }) {
   switch (currentType) {
      case 'short answer':
         return <ShortAnswer />
      case 'paragraf':
         return <Paragraf />
      case 'multiple choice':
         return <MultipleChoice />
      case 'dropdown':
         return <DropDown />
      case 'checkbox':
         return <Checkbox />
      case 'date':
         return <DateField />
      case 'time':
         return <Time />
   }
}

