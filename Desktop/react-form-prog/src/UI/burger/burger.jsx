
import MenuIcon from '@mui/icons-material/Menu';
import './burger.css'

function Burger({ handleBurger }) {
   return (
      <>
         <div className="burger" onClick={handleBurger}>
            <MenuIcon sx={{ fontSize: '30px' }} />
         </div>
      </>
   );
}

export default Burger;