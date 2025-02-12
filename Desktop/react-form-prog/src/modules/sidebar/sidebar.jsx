
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './sidebar';
import { useContext } from 'react';
import { AppState } from '../../App/App';
import ChangeColorTheme from '../../features/change_color_theme/change_color_theme';
function Sidebar() {

   const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppState);
   const DrawerList = (
      <Box sx={{ width: '20vw' }} role="presentation" onClick={() => setSidebarIsOpen(false)}>
         <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <ChangeColorTheme />
      </Box>
   );
   return (
      <>
         <Drawer
            anchor='right'
            open={sidebarIsOpen}
            onClose={() => setSidebarIsOpen(false)}
         >{DrawerList}</Drawer>
      </>
   );
}

export default Sidebar;