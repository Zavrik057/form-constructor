
import { Button } from "@mui/material";

function SubmitButton({ submitData }) {
   return (
      <>
         <Button
            type="submit"
            size="large"
            sx={{ background: 'purple', alignSelf: 'center'}}
            variant="contained"
            onClick={submitData}
         >submit</Button>
      </>
   );
}

export default SubmitButton;