import { useContext } from "react";
import FormCheckbox from "./UI/form_checkbox/form_checkbox";
import FormDate from "./UI/form_date/form_date";
import FormDropdown from "./UI/form_dropdown/form_drpdown";
import FormMultipleChoice from "./UI/form_multiple_choice/form_multiple_choice";
import FormParagraf from "./UI/form_paragraf/form_paragraf";
import FormShortAnswer from "./UI/form_short_answer/form_short_answer";
import FormTime from "./UI/form_time/form_time";
import FormField, { FormFieldState } from "../../slices/form_field/form_field";

function FormTypes() {
   const { type } = useContext(FormFieldState);
   return (
      <>
         <SetCurrentType type={type} />
      </>
   );
}

export default FormTypes;

function SetCurrentType({ type }) {
   switch (type) {
      case 'short answer':
         return <FormShortAnswer />
      case 'paragraf':
         return <FormParagraf />
      case 'multiple choice':
         return <FormMultipleChoice />
      case 'dropdown':
         return <FormDropdown />
      case 'checkbox':
         return <FormCheckbox />
      case 'date':
         return <FormDate />
      case 'time':
         return <FormTime />
   }
}