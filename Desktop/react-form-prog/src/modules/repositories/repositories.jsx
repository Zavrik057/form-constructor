
import { Grid } from "@mui/icons-material";
import { useContext } from "react";
import { RepositoriesState } from "../../App/App";
import { Container, Grid2, Stack } from "@mui/material";
import './repositories.css'
import ReposditorieCard from "../../slices/repositorie_card/repositorie_card";

function Repositories() {
   const { repositories } = useContext(RepositoriesState);
   return (
      <>
         <div className="repositories">
            <Container>
               <Stack spacing={6}>
                  <div className="repositories__banner">The repositories</div>
                  <Grid2 container spacing={3} columns={3}>
                     {repositories.map(item => <ReposditorieCard />)}
                  </Grid2>
               </Stack>
            </Container>
         </div>
      </>
   );
}

export default Repositories;