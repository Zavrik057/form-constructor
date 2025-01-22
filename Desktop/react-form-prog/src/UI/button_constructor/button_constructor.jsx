
import { Button } from "@mui/material";

function ConstructorSubmitButton({ submitData }) {
   return (
      <>
         <Button
            type="submit"
            size="large"
            sx={{ background: 'purple' }}
            variant="contained"
            onClick={submitData}
         >submit</Button>
      </>
   );
}

export default ConstructorSubmitButton;