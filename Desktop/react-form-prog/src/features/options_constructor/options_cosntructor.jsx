
import './options_constructor.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormControlLabel, IconButton, Switch } from '@mui/material';
import { useContext, useMemo } from 'react';
import { ConstructorState } from '../../modules/constructor/constructor';
import { FieldDataState } from '../../slices/field_constructor/field_constructor';
import { useViewport } from 'react-viewport-hooks';

function ConstructorOptions({ id }) {

   const { removeField, dubbleItem } = useContext(ConstructorState);
   const { changeRequirements, index } = useContext(FieldDataState);

   const { vw } = useViewport();
   const iconsProps = useMemo(() => {
      return {
         fontSize: vw > 770 ? '20px' : '17px',
      }
   }, [vw]);
   return (
      <>
         <div className="options" id='_option__group'>
            <div className="options__group">
               <IconButton id='copy' className='_copy' onClick={() => dubbleItem(index)}>
                  <ContentCopyIcon sx={{ ...iconsProps }} />
               </IconButton>
               <IconButton className='_delete' onClick={() => removeField(id)}>
                  <DeleteIcon sx={{ ...iconsProps }} />
               </IconButton>
            </div>
            <div className="options__group">
               <FormControlLabel className='_required' sx={{ order: 2 }} control={<Switch onChange={event => changeRequirements(event)} sx={{ ...iconsProps }} />} label="Required" />
               <IconButton id='more' className='_more'>
                  <MoreVertIcon sx={{ ...iconsProps }} />
               </IconButton>
            </div>
         </div>
      </>
   );
}

export default ConstructorOptions;