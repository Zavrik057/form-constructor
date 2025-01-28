import { Grid2 } from "@mui/material";
import './repositories_card.css'

function ReposditorieCard({ item }) {
   return (
      <>
         <Grid2 size={1}>
            <div className="repositorie-card">
               <div className="repositorie-card__title"></div>
               <div className="repositories-card__answers"></div>
            </div>
         </Grid2>
      </>
   );
}

export default ReposditorieCard;