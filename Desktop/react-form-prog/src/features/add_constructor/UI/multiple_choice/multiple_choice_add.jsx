
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import { MultipleChoiceState } from './multiple_choice';
import { useContext } from 'react';
import useInput from '../../../../hooks/useInput/useInput';
import { Input } from '@mui/material';
import { ConstructorState } from '../../../../modules/constructor/constructor';
import { ConstructorAddState } from '../../add_constructor';

function MultipleChoiceAddItem({ item, i }) {

   const { items } = useContext(ConstructorState);
   const { removeItem, changeValue, index, more } = useContext(MultipleChoiceState);
   const [ref, onChange] = useInput(changeValue);
   const { sizeValue } = useContext(ConstructorAddState);

   return (
      <>
         <div className="add__item">
            <div className="add__icon"><AdjustIcon sx={{ fontSize: sizeValue }} /></div>
            <Input inputRef={ref} onChange={(e) => onChange(e, i)} placeholder='set option' className="add__input" inputProps={''} />
            <div className="add__delete" onClick={() => removeItem(item.id, items.questions[index].options[i].id)}>{more.length > 1 && <CloseIcon sx={{ color: 'red' }} />}</div>
         </div>
      </>
   );
}

export default MultipleChoiceAddItem;