import { useRef, useState } from "react";

function useInput(event) {
   const ref = useRef();
   const [val, setValue] = useState('');

   let time;
   function onChange(e, index) {
      setValue(e.target.value);
      window.clearTimeout(time);

      time = setTimeout(() => {
         event(ref, index);
      }, 500);
   }

   return [ref, onChange, val];
}

export default useInput;