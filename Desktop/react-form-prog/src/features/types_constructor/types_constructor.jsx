
import ShortTextIcon from '@mui/icons-material/ShortText';
import SortIcon from '@mui/icons-material/Sort';
import AdjustIcon from '@mui/icons-material/Adjust';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export function ChangeType({ type, currentType }) {

   switch (type) {
      case 'short answer': return <ShortAnswer />;
      case 'paragraf': return <Paragraf />;
      case 'multiple choice': return <MultipleChoice />;
      case 'checkbox': return <Checkbox />;
      case 'dropdown': return <Dropdown />;
      case 'date': return <Date />;
      case 'time': return <Time />;
   }
}

const iconFontSize = '26px';

export function ShortAnswer({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'short answer' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <ShortTextIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Short answer</div>
         </div>
      </>
   );
}
export function Paragraf({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'paragraf' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <SortIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Paragraf</div>
         </div>
      </>
   );
}
export function MultipleChoice({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'multiple choice' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <AdjustIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Multiple choice</div>
         </div>
      </>
   );
}
export function Checkbox({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'checkbox' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <CheckBoxIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Checkbox</div>
         </div>
      </>
   );
}
export function Dropdown({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'dropdown' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <ArrowDropDownCircleIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Dropdown</div>
         </div>
      </>
   );
}
export function Date({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'date' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <DateRangeIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Date</div>
         </div>
      </>
   );
}
export function Time({ setType, currentType }) {
   return (
      <>
         <div className={currentType == 'time' ? 'type-button__type active' : 'type-button__type'} onClick={setType}>
            <AccessTimeIcon sx={{ fontSize: iconFontSize }} />
            <div className="type-button__name">Time</div>
         </div>
      </>
   );
}
