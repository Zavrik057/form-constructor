
import './error_message.css'
function ErrorMessage({children}) {
   return (
      <>
      <p className='error-message'>*{children}</p>
      </>
   );
}

export default ErrorMessage;