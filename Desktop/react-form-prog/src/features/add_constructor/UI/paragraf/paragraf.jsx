import { Input } from "@mui/material";

function Paragraf() {
   return (
      <>
         <div className="add__content">
            <Input disabled defaultValue="Long answer text" inputProps={'description'} />
         </div>
      </>
   );
}

export default Paragraf;