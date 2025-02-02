import { createContext, useContext, useState } from "react";
import { RepositoriesState } from "../../App/App";
import { useParams } from "react-router-dom";
import Navbar from "../../modules/navbar/navbar";
import RepositorieChoice from "../../features/repositorie_choice/repositorie_choice";
import Form from "../../modules/form/form";
import Answers from "../../modules/answers/answers";

export const FormState = createContext(null);
function CurrentRepositoriePage() {

   const { id } = useParams();
   const [currentLink, setCurrentLink] = useState('questions');

   function changeCurrentLink(link) {
      setCurrentLink(link);
   }

   return (
      <>
         <FormState.Provider value={{ id, changeCurrentLink, currentLink }}>
            <Navbar />
            <RepositorieChoice />
            <Form />
            <Answers />
         </FormState.Provider>
      </>
   );
}

export default CurrentRepositoriePage;