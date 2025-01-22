
import { set, useForm } from 'react-hook-form';
import './constructor.css'
import { Fab, Input, rgbToHex } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createContext, useRef, useState } from 'react';
import ConstructorField from '../../slices/field_constructor/field_constructor';
import ConstructorSubmitButton from '../../UI/button_constructor/button_constructor';

export const ConstructorState = createContext(null);

function Constructor() {
   const [currentField, setCurrentField] = useState(null);
   const [fields, setFields] = useState([Date.now()]);
   const [data, setData] = useState([]);
   const [isSubmited, setIsSubmited] = useState(false);
   const newItem = {
      id: Date.now(),
      question: '',
      required: false,
      type: 'short answer',
      options: [{ id: Date.now(), value: '' }],
      props: [''],
   };
   const [items, setItems] = useState([newItem]);

   function addField() {
      setFields([...fields, Date.now()]);
      setItems([...items, newItem]);
   }
   function changeCurrentField(index) {
      setCurrentField(index);
   }
   function removeField(id) {
      let num;
      fields.forEach((item, index) => {
         item == id ? num = index : num = num;
      });
      setFields(fields.filter(item => item != id));
      setItems(items.filter((item, index) => index != num));
   }
   function submitData() {
      setIsSubmited(true);
      console.log(items);
   }
   function doubleField(index) {
   }

   return (
      <>
         <ConstructorState.Provider value={{ changeCurrentField, currentField, removeField, isSubmited, data, setData, items, setItems, doubleField }}>
            <div className="constructor">
               <div className="button-add">
                  <Fab color="primary" aria-label="add" onClick={addField}>
                     <AddIcon />
                  </Fab>
               </div>
               <form>
                  {fields.map((item, index) => <ConstructorField key={item} index={index} id={item} />)}
               </form>
               <ConstructorSubmitButton submitData={submitData} />
            </div>
         </ConstructorState.Provider>
      </>
   )
}

export default Constructor;