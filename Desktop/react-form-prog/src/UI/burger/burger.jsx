
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './burger.css'
import { useState } from 'react';
import { TvOff } from '@mui/icons-material';

function Burger({ toggle }) {
   const [isClicked, setIsClicked] = useState(false);
   const burgerProps = {
      fontSize: '30px',
   }
   function handleBurger() {
      toggle();
      setIsClicked(prev => !prev);
   }
   return (
      <>
         <div className="burger" onClick={handleBurger}>
            {isClicked ? <CloseIcon sx={{ ...burgerProps }} /> : <MenuIcon sx={{ ...burgerProps }} />}
         </div>
      </>
   );
}

export default Burger;