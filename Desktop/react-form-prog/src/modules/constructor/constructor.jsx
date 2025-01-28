
import { set, useForm } from 'react-hook-form';
import './constructor.css'
import { Box, Button, Fab, Input, rgbToHex, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createContext, useContext, useRef, useState } from 'react';
import ConstructorField from '../../slices/field_constructor/field_constructor';
import ConstructorSubmitButton from '../../UI/button_constructor/button_constructor';
import { RepositoriesState } from '../../App/App';
import HeaderField from '../../slices/header_constructor/header_constructor';

export const ConstructorState = createContext(null);

function Constructor() {
   const [currentField, setCurrentField] = useState(null);
   const [fields, setFields] = useState([Date.now()]);
   const [data, setData] = useState([]);
   const [header, setHeader] = useState([Date.now()]);
   const [isSubmited, setIsSubmited] = useState(false);
   const { addRepositorie, repositories, setRepositories } = useContext(RepositoriesState);

   // const newItem = {
   //    id: Date.now(),
   //    question: '',
   //    required: false,
   //    type: 'short answer',
   //    options: [{ id: Date.now(), value: '' }],
   //    props: [''],
   // };

   const [items, setItems] = useState({
      headerField: {
         title: '',
         text: '',
      },
      questions: [{
         id: Date.now(),
         question: '',
         required: false,
         type: 'short answer',
         options: [{ id: Date.now(), value: '' }],
         props: [''],
      }],
   });

   function addField() {
      setFields([...fields, Date.now()]);
      setItems({
         ...items, questions: [...items.questions, {
            id: Date.now(),
            question: '',
            required: false,
            type: 'short answer',
            options: [{ id: Date.now(), value: '' }],
            props: [''],
         }]
      });
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
      setItems({ ...items, questions: items.questions.filter((item, index) => index != num) });
   }
   function reset() {
      setItems({
         headerField: {
            title: '',
            text: '',
         },
         questions: [{
            id: Date.now(),
            question: '',
            required: false,
            type: 'short answer',
            options: [{ id: Date.now(), value: '' }],
            props: [''],
         }],
      });
      setFields([Date.now()]);
      setHeader([Date.now()]);
   }
   function submitData() {
      addRepositorie(items);
      reset();
   }

   function doubleField(index) {
   }

   return (
      <>
         <ConstructorState.Provider value={{ changeCurrentField, currentField, removeField, isSubmited, data, setData, items, setItems, doubleField }}>
            <div className="constructor">
               <div className="button-add">
                  <Tooltip title={'add field'}>
                     <Fab color="primary" aria-label="add" onClick={addField}>
                        <AddIcon />
                     </Fab>
                  </Tooltip>
               </div>
               <form>
                  {header.map(item => <HeaderField key={item} />)}
                  {fields.map((item, index) => <ConstructorField key={item} index={index} id={item} />)}
               </form>
               <ConstructorSubmitButton submitData={submitData} />
            </div>
         </ConstructorState.Provider>
      </>
   )
}

export default Constructor;