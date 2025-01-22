
import './options_constructor.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormControlLabel, IconButton, Switch } from '@mui/material';
import { useContext } from 'react';
import { ConstructorState } from '../../modules/constructor/constructor';
import { FieldDataState } from '../../slices/field_constructor/field_constructor';

function ConstructorOptions({ id }) {

   const { removeField, doubleField } = useContext(ConstructorState);
   const { changeRequirements, index } = useContext(FieldDataState);
   return (
      <>
         <div className="options" id='_option__group'>
            <div className="options__group">
               <IconButton id='copy' className='_copy'>
                  <ContentCopyIcon />
               </IconButton>
               <IconButton className='_delete' onClick={() => removeField(id)}>
                  <DeleteIcon />
               </IconButton>
            </div>
            <div className="options__group">
               <FormControlLabel className='_required' sx={{ order: 2 }} control={<Switch onChange={event => changeRequirements(event)} />} label="Required" />
               <IconButton id='more' className='_more'>
                  <MoreVertIcon />
               </IconButton>
            </div>
         </div>
      </>
   );
}

export default ConstructorOptions;