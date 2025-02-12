
import { set, useForm } from 'react-hook-form';
import './constructor.css'
import { Box, Button, Fab, Input, rgbToHex, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { createContext, useContext, useRef, useState } from 'react';
import ConstructorField from '../../slices/field_constructor/field_constructor';
import SubmitButton from '../../UI/submit_button/button_constructor';
import { AppState } from '../../App/App';
import HeaderField from '../../slices/header_constructor/header_constructor';
import ColoredButton from '../../UI/colored_button/colored_button';
import FormButtons from '../../slices/form_buttons/form_buttons';
import { deepPurple } from '@mui/material/colors';
import DefaultButton from '../../UI/default_button/default_button';

export const ConstructorState = createContext(null);

function Constructor() {
   const [currentField, setCurrentField] = useState(0);
   const [data, setData] = useState([]);
   const [header, setHeader] = useState([Date.now()]);
   const [isSubmited, setIsSubmited] = useState(false);
   const { addRepositorie, colorTheme } = useContext(AppState);

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
      setItems({ ...items, questions: items.questions.filter((_, index) => index != id) });
   }
   function dubbleItem(index) {
      setItems({
         ...items, questions: [...items.questions, {
            id: Date.now(),
            question: items.questions[index].question,
            required: items.questions[index].required,
            type: items.questions[index].type,
            options: items.questions[index].options,
            props: items.questions[index].props,
         }]
      });
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
      setHeader([Date.now()]);
   }
   async function submitData() {
      addRepositorie(items);
      setCurrentField(0);
      await new Promise(resolve => setTimeout(resolve, 100));
      reset();
   }

   return (
      <>
         <ConstructorState.Provider value={{ changeCurrentField, currentField, removeField, isSubmited, data, setData, items, setItems, dubbleItem }}>
            <div className="constructor" style={{ background: colorTheme.bgColor }}>
               <form>
                  {header.map(item => <HeaderField key={item} />)}
                  {items.questions.map((item, index) => <ConstructorField key={item.id} index={index} id={index} />)}
                  <FormButtons>
                     <ColoredButton disabled={items.questions.length > 0 ? false : true} submitData={submitData}>submit</ColoredButton>
                     <DefaultButton onClick={addField}>add field ...</DefaultButton>
                  </FormButtons>
               </form>
            </div>
         </ConstructorState.Provider>
      </>
   )
}

export default Constructor;