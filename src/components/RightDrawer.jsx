import React from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberService from '../service/MemberService';
import { removeMember } from '../store/slices/memberSlice';

const RightDrawer = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const rightList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="myPage" disablePadding 
          onClick={() => {
            navigate('/myPage');
            toggleDrawer(anchor, false)(null);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My Page" />
          </ListItemButton>
        </ListItem>
        <ListItem key="cart" disablePadding 
          onClick={() => {
            navigate('/cart');
            toggleDrawer(anchor, false)(null);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem key="logout" disablePadding 
          onClick={() => {
            dispatch(removeMember());
            MemberService.logout();
            navigate('/login');
            toggleDrawer(anchor, false)(null);
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      
    </Box>
  );
  
  return (
    <>
    {
      ["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}
            style={{color:"white"}}
          >
            <PersonIcon />
            {/* {anchor} */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {rightList(anchor)}
          </Drawer>
        </React.Fragment>
      ))
    }
    </>
  )
}

export default RightDrawer