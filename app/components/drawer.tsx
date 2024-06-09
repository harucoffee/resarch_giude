import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


import MenuIcon from '@mui/icons-material/Menu';

type Links = {
    name: string;
    url: string;
};

const Links: Links[] = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Reserve', url: '/reserve' },
    { name: 'Contact', url: '/contact'}
  ];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Links.map(({name, url}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
                <Link href={url} underline='none' color="inherit" >
                    <ListItemText primary={name} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}><MenuIcon></MenuIcon></Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
