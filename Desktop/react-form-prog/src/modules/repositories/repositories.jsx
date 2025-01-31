
import { Grid } from "@mui/icons-material";
import { useContext, useEffect, useRef } from "react";
import { RepositoriesState } from "../../App/App";
import { Container, Grid2, Stack } from "@mui/material";
import './repositories.css'
import ReposditorieCard from "../../slices/repositorie_card/repositorie_card";
import gsap from "gsap";

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
         <div className="repositories">
            <Container>
               <Stack spacing={6}>
                  <div className="repositories__banner">The repositories</div>
                  <Grid2 container spacing={3} columns={3}>
                     {repositories.map((item, index) => <ReposditorieCard key={Date.now()} data={item} index={index} repos={repos} />)}
                  </Grid2>
               </Stack>
            </Container>
         </div>
      </>
   );
}

export default Repositories;