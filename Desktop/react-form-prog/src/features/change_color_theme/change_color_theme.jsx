import { Grid2 } from "@mui/material";
import { blue, blueGrey, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, orange, red, teal } from "@mui/material/colors";
import './change_color_theme.css'
import { useContext } from "react";
import { AppState } from "../../App/App";
import CheckIcon from '@mui/icons-material/Check';

function ChangeColorTheme() {

   const { setColorTheme, colorTheme } = useContext(AppState);

   const colorThemes = [
      {
         colorName: 'red',
         mainColor: red[600],
         secondColor: red[800],
         bgColor: red[50],
      },
      {
         colorName: 'deepPurple',
         mainColor: deepPurple[500],
         secondColor: deepPurple[700],
         bgColor: deepPurple[50],
      },
      {
         colorName: 'indigo',
         mainColor: indigo[600],
         secondColor: indigo[800],
         bgColor: indigo[50],
      },
      {
         colorName: 'blue',
         mainColor: blue[500],
         secondColor: blue[700],
         bgColor: blue[50],
      },
      {
         colorName: 'lightBlue',
         mainColor: lightBlue[500],
         secondColor: lightBlue[700],
         bgColor: lightBlue[50],
      },
      {
         colorName: 'cyan',
         mainColor: cyan[500],
         secondColor: cyan[700],
         bgColor: cyan[50],
      },
      {
         colorName: 'deepOrange',
         mainColor: deepOrange[500],
         secondColor: deepOrange[700],
         bgColor: deepOrange[50],
      },
      {
         colorName: 'orange',
         mainColor: orange[500],
         secondColor: orange[700],
         bgColor: orange[50],
      },
      {
         colorName: 'teal',
         mainColor: teal[500],
         secondColor: teal[700],
         bgColor: teal[50],
      },
      {
         colorName: 'green',
         mainColor: green[500],
         secondColor: green[700],
         bgColor: green[50],
      },
      {
         colorName: 'blueGrey',
         mainColor: blueGrey[500],
         secondColor: blueGrey[700],
         bgColor: blueGrey[50],
      },
      {
         colorName: 'grey',
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
                              className={item.colorName === colorTheme.colorName ?
                                 "change-theme__item active" :
                                 "change-theme__item"
                              }
                              style={{ background: item.mainColor }}
                              onClick={() => setColorTheme(item)}
                           >
                              {item.colorName === colorTheme.colorName &&
                                 <CheckIcon sx={{ fontSize: '18px', color: 'white' }} />}
                           </div>
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