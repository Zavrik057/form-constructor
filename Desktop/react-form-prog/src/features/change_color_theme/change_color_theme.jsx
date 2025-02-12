import { Grid2 } from "@mui/material";
import { blue, blueGrey, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, orange, red, teal } from "@mui/material/colors";
import './change_color_theme.css'
import { useContext } from "react";
import { AppState } from "../../App/App";

function ChangeColorTheme() {

   const { setColorTheme } = useContext(AppState);

   const colorThemes = [
      {
         mainColor: red[600],
         secondColor: red[800],
         bgColor: red[50],
      },
      {
         mainColor: deepPurple[500],
         secondColor: deepPurple[700],
         bgColor: deepPurple[50],
      },
      {
         mainColor: indigo[600],
         secondColor: indigo[800],
         bgColor: indigo[50],
      },
      {
         mainColor: blue[500],
         secondColor: blue[700],
         bgColor: blue[50],
      },
      {
         mainColor: lightBlue[500],
         secondColor: lightBlue[700],
         bgColor: lightBlue[50],
      },
      {
         mainColor: cyan[500],
         secondColor: cyan[700],
         bgColor: cyan[50],
      },
      {
         mainColor: deepOrange[500],
         secondColor: deepOrange[700],
         bgColor: deepOrange[50],
      },
      {
         mainColor: orange[500],
         secondColor: orange[700],
         bgColor: orange[50],
      },
      {
         mainColor: teal[500],
         secondColor: teal[700],
         bgColor: teal[50],
      },
      {
         mainColor: green[500],
         secondColor: green[700],
         bgColor: green[50],
      },
      {
         mainColor: blueGrey[500],
         secondColor: blueGrey[700],
         bgColor: blueGrey[50],
      },
      {
         mainColor: grey[500],
         secondColor: grey[700],
         bgColor: grey[50],
      },
   ]
   return (
      <>
         <div className="change-theme">
            <div className="change-theme__content">
               <Grid2
                  container
                  direction={'row'}
                  spacing={1.2}
                  columns={6}
               >
                  {colorThemes.map((item, index) => (
                     <>
                        <Grid2 size={1} key={index}>
                           <div
                              className="change-theme__item"
                              style={{ background: item.mainColor }}
                              onClick={() => setColorTheme(item)}
                           ></div>
                        </Grid2>
                     </>
                  ))}
               </Grid2>
            </div>
         </div>
      </>
   );
}

export default ChangeColorTheme;