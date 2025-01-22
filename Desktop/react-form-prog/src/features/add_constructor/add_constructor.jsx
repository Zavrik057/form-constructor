
import './add_constructor.css'
import Checkbox from "./UI/checkbox";
import ShortAnswer from "./UI/short_answer";
import Date from "./UI/date";
import Time from "./UI/time";
import MultipleChoice from "./UI/multiple_choice";
import DropDown from "./UI/dropdown";
import Paragraf from "./UI/paragraf";
import { useContext } from 'react';
import { FieldDataState } from '../../slices/field_constructor/field_constructor';

function ContructorAdd() {

   const { currentType } = useContext(FieldDataState);
   return (
      <>
         <div className="add">
            <SetCurrentType currentType={'checkbox'} />
         </div>
      </>
   );
}

export default ContructorAdd;

function SetCurrentType({ currentType }) {
   switch (currentType) {
      case 'shortAnswer':
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
         return <Date />
      case 'time':
         return <Time />
   }
}

