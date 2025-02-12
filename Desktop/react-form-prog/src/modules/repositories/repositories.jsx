
import { Grid } from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import { AppState } from "../../App/App";
import { Container, Grid2, Stack } from "@mui/material";
import './repositories.css'
import ReposditorieCard from "../../slices/repositorie_card/repositorie_card";
import gsap from "gsap";
import BackgroundDecor from "../../UI/background_decor/background_decor";
import ColoredButton from "../../UI/colored_button/colored_button";
import { Link } from "react-router-dom";
import VoideAlert from "../../UI/voide_alert/voide_alert";
import { useViewport } from "react-viewport-hooks";

function Repositories() {
   const { vw } = useViewport();
   const { repositories } = useContext(AppState);
   const repos = useRef([]);
   useEffect(() => {
      gsap.from(repos.current, {
         y: -100,
         duration: 0.2
      });
      gsap.to(repos.current, {
         duration: 0.2,
         opacity: 1,
         y: 0,
         stagger: 0.1,
         ease: "back.in",
      });
   }, []);
   return (
      <>
         <div className="repositories relative">
            <BackgroundDecor />
            <div className="repositories-content z-40 relative">
               <Container sx={{ position: 'relative' }}>
                  <Stack direction={'column'} spacing={6}>
                     <div className="repositories__banner">The repositories</div>
                     {repositories.length == 0 && <VoideAlert
                        link={'/'}
                        button={<ColoredButton>set repositorie</ColoredButton>}>
                        you haven't any repositories
                     </VoideAlert>
                     }
                     <Grid2
                        container
                        spacing={3}
                        columns={vw > 1010 ? 3 : vw > 580 ? 2 : 1}
                     >{repositories.map((item, index) => <ReposditorieCard key={index} data={item} index={index} repos={repos} />)}
                     </Grid2>
                  </Stack>
               </Container>
            </div>
         </div>
      </>
   );
}

export default Repositories;