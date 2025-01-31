import { Grid2 } from "@mui/material";
import './repositories_card.css'
import { Link } from "react-router-dom";

function ReposditorieCard({ data, index, repos }) {

   const title = data.form.headerField.title;
   return (
      <>
         <Grid2 size={1}>
            <Link to={'/repositorie/' + index} className="repositorie-card" ref={el => repos.current[index] = el} style={{opacity: 0}}>
               <div className="repositorie-card__decor">{index + 1}</div>
               <div className="repositorie-card__content">
                  <div className="repositorie-card__title">{title}</div>
                  <div className="repositories-card__answers"></div>
               </div>
            </Link>
         </Grid2>
      </>
   );
}

export default ReposditorieCard;