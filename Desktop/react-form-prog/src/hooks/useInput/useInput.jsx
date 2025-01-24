import { useRef, useState } from "react";

function useInput( event ) {
   const ref = useRef();

   let time;
   function onChange(e, index) {
      window.clearTimeout(time);

      time = setTimeout(() => {
         event(ref, index);
      }, 500);
   }

   return [ref, onChange];
}

export default useInput;