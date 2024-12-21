
import './Constructor_options.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormControlLabel, IconButton, Switch } from '@mui/material';

function ConstructorOptions({ removeField }) {
   return (
      <>
         <div className="options" id='_option__group'>
            <div className="options__group"> 
               <IconButton id='copy' className='_copy'>
                  <ContentCopyIcon />
               </IconButton>
               <IconButton className='_delete' onClick={removeField}>
                  <DeleteIcon />
               </IconButton>
            </div>
            <div className="options__group">
               <FormControlLabel className='_required' sx={{ order: 2 }} required control={<Switch />} label="Required" />
               <IconButton id='more' className='_more'>
                  <MoreVertIcon />
               </IconButton>
            </div>
         </div>
      </>
   );
}

export default ConstructorOptions;