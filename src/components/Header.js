import React ,{useState} from 'react'
import { AppBar, Box ,Divider,Drawer,IconButton,Toolbar,Typography} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow:1}}>
        <RestaurantIcon/>
            My Restaurant
        </Typography>
        <Divider/>
          <ul className="mobile-navigation">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/Menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/About'}>About</Link>
            </li>
            <li>
              <Link to={'/Contact'}>Contact</Link>
            </li>
          </ul>
        </Box>
  )
  return (
    <>
       <Box>
        <AppBar component={"nav"} sx={{bgcolor:'black'}}>
        <Toolbar>
        <IconButton 
        color="inherit" 
        aria-label="open drawer"
        edge="start" 
        sx={{mr:2,display:{sm:"none"}}}
        onClick={handleDrawerToggle}
        >
          <MenuIcon/>
        </IconButton>
        <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow: 1}}>
        <RestaurantIcon/>
            My Restaurant
        </Typography>
        <Box sx={{display:{xs:"none",sm:"block"}}}>
          <ul className="navigation-menu">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/Menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/About'}>About</Link>
            </li>
            <li>
              <Link to={'/Contact'}>Contact</Link>
            </li>
          </ul>
        </Box>
        </Toolbar>    
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'},width :"300px" }}>
              {drawer}
            </Drawer>
        </Box>
        <Toolbar/>
       </Box>
    </> 
  );
};
export default Header;
