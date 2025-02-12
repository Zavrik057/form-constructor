
import PaletteIcon from '@mui/icons-material/Palette';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReplayIcon from '@mui/icons-material/Replay';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

import './navbar.css'
import { Badge, Button, IconButton, Stack, Tooltip } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppState } from '../../App/App';
import axios, { Axios } from 'axios';
import Burger from '../../UI/burger/burger';
import ColoredButton from '../../UI/colored_button/colored_button';
import { useViewport } from 'react-viewport-hooks';
import { useMemo } from 'react';

function Navbar() {

   const { repositories } = useContext(AppState);
   const [menuIsActive, setMenuIsActive] = useState(false);

   const { vw } = useViewport();
   const iconsProps = useMemo(() => {
      return {
         fontSize: '26px',
      }
   }, [vw]);

   return (
      <div className="navbar">
         <NavbarMenu isActive={menuIsActive} />
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
               <NavbarIcons iconsProps={iconsProps} />
            </div>
            <Link to='/repositories'>
               <Badge color="secondary" badgeContent={repositories.length}>
                  <ColoredButton>repositories</ColoredButton>
               </Badge>
            </Link>
            <IconButton sx={{ display: vw > 770 ? 'block' : 'none' }}>
               <MoreVertIcon sx={{ ...iconsProps }} />
            </IconButton>
            <Burger toggle={() => setMenuIsActive(prev => !prev)} />
         </div>
      </div>
   );
}

export default Navbar;

function NavbarIcons({ iconsProps }) {

   const { setSidebarIsOpen } = useContext(AppState);

   const icons = [
      <VisibilityIcon sx={{ ...iconsProps }} />,
      <ReplayIcon sx={{ ...iconsProps }} />,
      <AddLinkIcon sx={{ ...iconsProps }} />,
      <PersonAddAltIcon sx={{ ...iconsProps }} />
   ];
   return (
      <>
         <Stack direction={'row'} spacing={1}>
            <Tooltip title="Customize theme" arrow>
               <IconButton onClick={() => setSidebarIsOpen(true)}>
                  <PaletteIcon sx={{ ...iconsProps }} />
               </IconButton>
            </Tooltip>
            {icons.map(item => <IconButton>{item}</IconButton>)}
         </Stack>
      </>
   )
}

function NavbarMenu({ isActive }) {
   const { vw } = useViewport();
   return (
      <>
         <div className={isActive && vw < 770 ? "navbar-menu" : "navbar-menu none"}>
            <NavbarIcons />
         </div>
      </>
   )
}