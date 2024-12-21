
import ConstructorField from '../constructor_field/Constructor_field';
import HeaderField from '../header_field/Header_field';
import { set, useForm } from 'react-hook-form';
import './Constructor.css'
import ConstructorButton from '../constructor_button/Constructor_button';
import { Fab, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function Constructor() {

   const [fields, setFields] = useState([
      { id: Date.now() },
   ]);
   const [currentField, setCurrentField] = useState(null);

   function removeField(index) {
      const array = fields.slice(0, fields.length);
      array.splice(index, 1);
      setFields(array);
      // setFields(fields.filter(item => item.id != index ? item : false));
   }
   function onSubmit(data) {
      alert(JSON.stringify(data));
   }

   function addField() {
      setFields([...fields, { id: Date.now() }]);
   }

   // const touchable = [
   //    '_input',
   //    '_button',
   //    '_option__group',
   //    '_delete',
   //    '_more',
   //    '_required',
   //    '_copy',
   // ]
   function changeCurrentField(e, index) {
      // if (currentField == index) {
      //    touchable.includes(e.target.id) ? setCurrentField(prev => prev) : setCurrentField(null);
      // } else {
      //    setCurrentField(index);
      // }
      setCurrentField(index);
   }
   return (
      <>
         <div className="constructor">
            <div className="button-add" onClick={addField}>
               <Fab color="primary" aria-label="add">
                  <AddIcon />
               </Fab>
            </div>
            <form>
               <HeaderField />
               {fields.map((item, index) =>
                  <ConstructorField
                     key={item.id}
                     index={index}
                     changeField={(e) => changeCurrentField(e, index)}
                     currentField={currentField}
                     removeField={() => removeField(index)}
                  />
               )}
               <ConstructorButton />
            </form>
         </div>
      </>
   )
}

export default Constructor;