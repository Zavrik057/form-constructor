
import { set, useForm } from 'react-hook-form';
import './constructor.css'
import { Box, Button, Fab, Input, rgbToHex, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createContext, useContext, useRef, useState } from 'react';
import ConstructorField from '../../slices/field_constructor/field_constructor';
import SubmitButton from '../../UI/submit_button/button_constructor';
import { RepositoriesState } from '../../App/App';
import HeaderField from '../../slices/header_constructor/header_constructor';
import ColoredButton from '../../UI/colored_button/colored_button';
import FormButtons from '../../slices/form_buttons/form_buttons';
import { deepPurple } from '@mui/material/colors';
import DefaultButton from '../../UI/default_button/default_button';

export const ConstructorState = createContext(null);

function Constructor() {
   const [currentField, setCurrentField] = useState(0);
   const [fields, setFields] = useState([Date.now()]);
   const [data, setData] = useState([]);
   const [header, setHeader] = useState([Date.now()]);
   const [isSubmited, setIsSubmited] = useState(false);
   const { addRepositorie, repositories, setRepositories } = useContext(RepositoriesState);

   const [items, setItems] = useState({
      headerField: {
         title: 'untitled form',
         text: '',
      },
      questions: [{
         id: Date.now(),
         question: `question1`,
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
            question: `quesiton${items.questions.length + 1}`,
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
            title: 'untitled form',
            text: '',
         },
         questions: [{
            id: Date.now(),
            question: `question1`,
            required: false,
            type: 'short answer',
            options: [{ id: Date.now(), value: '' }],
            props: [''],
         }],
      });
      setFields([Date.now()]);
      setHeader([Date.now()]);
   }
   async function submitData() {
      addRepositorie(items);
      await new Promise(resolve => setTimeout(resolve, 100));
      reset();
   }

   return (
      <>
         <ConstructorState.Provider value={{ changeCurrentField, currentField, removeField, isSubmited, data, setData, items, setItems }}>
            <div className="constructor">
               <form>
                  {header.map(item => <HeaderField key={item} />)}
                  {fields.map((item, index) => <ConstructorField key={item} index={index} id={item} />)}
                  <FormButtons>
                     <ColoredButton disabled={fields.length > 0 ? false : true} submitData={submitData}>submit</ColoredButton>
                     <DefaultButton onClick={addField}>add field ...</DefaultButton>
                  </FormButtons>
               </form>
            </div>
         </ConstructorState.Provider>
      </>
   )
}

export default Constructor;