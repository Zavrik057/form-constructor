import { Link } from "react-router-dom";
import './voide_alert.css'

function VoideAlert({ children, link, button }) {
   return (
      <>
         <div className="repositorie-alert">
            <div className="repositorie-alert__message">{children}</div>
            {button && <Link to={link} className="repositorie-alert__button">
               {button}
            </Link>}
         </div>
      </>
   );
}

export default VoideAlert;