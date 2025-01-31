
import './form_header.css'
function FormHeader({ data }) {
   return (
      <>
         <div className="form-header">
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