
import PaletteIcon from '@mui/icons-material/Palette';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReplayIcon from '@mui/icons-material/Replay';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

import './navbar.css'
import { Badge, Button, IconButton, Stack } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { RepositoriesState } from '../../App/App';
import axios, { Axios } from 'axios';

function Navbar() {

   const api = 'https://nvnotmjnzrcpvnorscmh.supabase.co';
   const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bm90bWpuenJjcHZub3JzY21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NTEzMDYsImV4cCI6MjA0NzAyNzMwNn0.gw6wGUpKqSKJC82ERwa73qEmVEMTIjaXTLiAR_LlE8I';

   // useEffect(() => {
   //    fetch('http://localhost:3006/cells')
   //       .then(res => res.json())
   //       .then(data => console.log(data))
   //       .catch(err => console.log(err));
   // }, []);

   const { repositories } = useContext(RepositoriesState);

   const size = '26px';
   const icons = [
      <PaletteIcon sx={{ fontSize: size }} />,
      <VisibilityIcon sx={{ fontSize: size }} />,
      <ReplayIcon sx={{ fontSize: size }} />,
      <AddLinkIcon sx={{ fontSize: size }} />,
      <PersonAddAltIcon sx={{ fontSize: size }} />
   ]

   const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      '&:hover': {
         backgroundColor: deepPurple[700],
      },
   }));

   function showRepositories() {
      console.log(repositories);
   }

   return (
      <div className="navbar">
         <div className="container">
            <div className="navbar__content">
               <div className="navbar__logo">
                  <Link to='/'>
                     <div className="navbar__image">
                        <img src="./images/logo.png" alt="no image" />
                     </div>
                  </Link>
                  <div className="navbar__title"> form constructor</div>
               </div>
               <div className="navbar__icons">
                  <Stack direction={'row'} spacing={1}>
                     {icons.map(item => <IconButton >{item}</IconButton>)}
                     <ColorButton onClick={showRepositories} sx={{ padding: '10px 20px', textTransform: 'capitalize' }}>publish</ColorButton>
                     <Link to='/repositories'>
                        <Badge color="secondary" badgeContent={repositories.length}>
                           <ColorButton sx={{ padding: '10px 20px', textTransform: 'capitalize' }}>repositories</ColorButton>
                        </Badge>
                     </Link>
                     <IconButton>
                        <MoreVertIcon sx={{ fontSize: size }} />
                     </IconButton>
                  </Stack>
               </div>
               <div className="navbar__links"></div>
               <div className="navbar__account"></div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;