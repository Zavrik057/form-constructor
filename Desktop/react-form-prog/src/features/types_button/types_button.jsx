
import './types_button.css'
import { ChangeType, ShortAnswer, Paragraf, MultipleChoice, Checkbox, Dropdown, Date, Time } from "../../features/types_constructor/types_constructor";
import { useContext, useState } from "react";
import { FieldDataState } from '../../slices/field_constructor/field_constructor';


function ConstructorTypeButton() {

   const { changeCurrentType, currentType, setCurrentType } = useContext(FieldDataState);

   const [isClicked, setIsClicked] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   function setType(type) {
      setCurrentType(type);
      setIsOpen(false);
      changeCurrentType(type);
   }
   function handleClick() {
      setIsClicked(prev => !prev);
      setIsOpen(true);
   }


   return (
      <>
         <div className="type-button" onClick={handleClick}>
            {<ChangeType type={currentType} />}
            <div className={isClicked && isOpen ? 'type-button__menu active' : 'type-button__menu'}>
               <div className="type-button__type-group">
                  <ShortAnswer currentType={currentType} setType={() => setType('short answer')} />
                  <Paragraf currentType={currentType} setType={() => setType('paragraf')} />
               </div>
               <div className="type-button__type-group">
                  <MultipleChoice setType={() => setType('multiple choice')} />
                  <Checkbox currentType={currentType} setType={() => setType('checkbox')} />
                  <Dropdown currentType={currentType} setType={() => setType('dropdown')} />
               </div>
               <div className="type-button__type-group">
                  <Date currentType={currentType} setType={() => setType('date')} />
                  <Time currentType={currentType} setType={() => setType('time')} />
               </div>
            </div>
         </div>
      </>
   );

}
export default ConstructorTypeButton;
