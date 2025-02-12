
import { useContext } from 'react';
import './form_header.css'
import { AppState } from '../../App/App';
function FormHeader({ data }) {
   const { colorTheme } = useContext(AppState);
   return (
      <>
         <div className="form-header">
            <div
               className="form-header__decor-line"
               style={{ background: colorTheme.mainColor }}
            ></div>
            <div className="form-header__header">
               <div className="form-header__title">{data.title}</div>
               <div className="form-header__text">{data.text}</div>
            </div>
            <div className="form-header__info">*indicates requirement question</div>
         </div>
      </>
   );
}

export default FormHeader;