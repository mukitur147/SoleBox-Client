import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Dashboard.css'
import useFirebase from '../../Hooks/useFirebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import CustomerReviews from './Reviews/CustomerReviews';
import Payment from './Payment/Payment';
import AddProducts from './AddProducts/AddProducts';
import ManageProducts from './ManageProducts/ManageProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import Terms from './Terms/Terms';



const drawerWidth = 270;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const {logOut,admin,user}=useFirebase()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div className="dashboard-list">
        <Toolbar />
        <h4><b>SoleBox</b></h4>
        <Divider />
        <List>
        <ListItem>
        <Link to={`${url}`}>Term and Conditions</Link>
        </ListItem>
      
          
         
         
        {admin ? <Box>
          <ListItem>
        <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
        </ListItem>
        <ListItem>
        <Link to={`${url}/addProducts`}>Add a Product</Link>
        </ListItem>
        <ListItem>
        <Link to={`${url}/manageProducts`}>Manage Products</Link>
        </ListItem>
        <ListItem>
        <Link to={`${url}/makeAdmin`}>Make an Admin</Link>
        </ListItem>
        </Box>
        :
        <Box>
          <ListItem>
        <Link to={`${url}/payment`}>Payment</Link>
        </ListItem>
        <ListItem>
        <Link to={`${url}/myOrders`}>My Orders</Link>
        </ListItem>
        <ListItem>
        <Link to={`${url}/customerReview`}>Review</Link>
        </ListItem>
        </Box>
        
        }
        <ListItem>
        <Link to="/">Back to Homepage</Link>
        </ListItem>
        <ListItem>
        <button onClick={logOut} className="navs-button ms-3">Logout</button>
        </ListItem>
        </List>

      
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

  return (
      
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'rgb(26, 25, 25)'

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
         <Terms></Terms>
        </Route>
        <Route path={`${path}/payment`}>
         <Payment></Payment>
        </Route>
        <Route path={`${path}/myOrders`}>
         <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/customerReview`}>
         <CustomerReviews></CustomerReviews>
        </Route>
        <Route path={`${path}/manageOrders`}>
         <ManageOrders></ManageOrders>
        </Route>
        <Route path={`${path}/addProducts`}>
         <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/manageProducts`}>
         <ManageProducts></ManageProducts>
        </Route>
        <Route path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>

      </Box>
      
    </Box>
    
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
