import { Input } from "@mui/material";

function ShortAnswer() {
   return (
      <>
         <div className="add__content">
            <Input disabled defaultValue="Short answer text" inputProps={'description'} />
         </div>
      </>
   );
}

export default ShortAnswer;