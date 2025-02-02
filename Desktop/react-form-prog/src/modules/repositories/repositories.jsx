
import { Grid } from "@mui/icons-material";
import { useContext, useEffect, useRef } from "react";
import { RepositoriesState } from "../../App/App";
import { Container, Grid2, Stack } from "@mui/material";
import './repositories.css'
import ReposditorieCard from "../../slices/repositorie_card/repositorie_card";
import gsap from "gsap";
import BackgroundDecor from "../../UI/background_decor/background_decor";
import ColoredButton from "../../UI/colored_button/colored_button";
import { Link } from "react-router-dom";

function Repositories() {
   const { repositories } = useContext(RepositoriesState);
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
            <div className="repositories-content absolute z-40 inset-0">
               <Container>
                  <Stack direction={'column'} spacing={6}>
                     <div className="repositories__banner">The repositories</div>
                     {repositories.length == 0 && <div className="repositorie-alert">
                        <div className="repositorie-alert__message">you havent's any repositories</div>
                        <Link to='/' className="repositorie-alert__button">
                           <ColoredButton>set repositories</ColoredButton>
                        </Link>
                     </div>}
                     <Grid2 container spacing={3} columns={3}>
                        {repositories.map((item, index) => <ReposditorieCard key={Date.now()} data={item} index={index} repos={repos} />)}
                     </Grid2>
                  </Stack>
               </Container>
            </div>
         </div>
      </>
   );
}

export default Repositories;