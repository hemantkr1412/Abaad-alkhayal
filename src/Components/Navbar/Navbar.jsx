import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../public/logo.png';
import '../Navbar/Navbar.css'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Solutions', 'Team', 'Contact'];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [scroll, setScroll] = useState(false);

    const scrolling = () => {
        (window.scrollY >= 2) ? setScroll(true) : setScroll(false);
    }
    window.addEventListener('scroll', scrolling);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuMouseEnter = () => {
        setMobileOpen(true);
    };

    const handleMenuMouseLeave = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const renderDropdownMenu = (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                top: '60px',
                left: '15px',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                top: '60px',
                left: '15px',
            }}
            onClose={handleMenuClose}
            onMouseEnter={handleMenuMouseEnter}
            // onMouseLeave={handleMenuMouseLeave}
            sx={{
                // border: '2px solid red',
                zIndex: '100',
                marginTop: '1rem',
                padding: '2rem'
            }}
        >
            {/* <MenuItem onClick={handleMenuClose} component={Link} to="#bitSaudi">BitSaudi</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="#bitWallet">BitWallet</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="#itservices">IT Services</MenuItem> */}

            <a href="#bitsaudi" onClick={handleMenuClose} className="dropdownLinks">BitSaudi</a>
            <a href="#bitwallet" onClick={handleMenuClose} className="dropdownLinks">BitWallet</a>
            <a href="#itservices" onClick={handleMenuClose} className="dropdownLinks">IT Services</a>
        </Menu>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav"
                    sx={{
                        background: "white",
                        zIndex: 1,
                        boxShadow: !scroll && "none"
                    }}>
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
                        <Box sx={{
                            // border: '2px solid red',
                            width: '80%',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                                className='navbarTitle'
                            >
                                <img src={logo} alt="" style={{
                                    height: '5rem',
                                    marginTop: '.5rem'
                                }} />
                            </Typography>
                            <Box xs={6} sx={{
                                // border: '2px solid red',
                                display: { xs: 'none', sm: 'block' },
                                width: '60%',
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                {navItems.map((item) => (
                                    < div key={item} >
                                        {item === 'Solutions' ? (
                                            <a
                                                href={`#${item.toLowerCase()}`}
                                                className="navbarLinks"
                                                onMouseEnter={handleMenuOpen}
                                            // onMouseLeave={handleMenuClose}
                                            >
                                                {item}
                                            </a>
                                        ) : (
                                            <a href={`#${item.toLowerCase()}`} className="navbarLinks">
                                                {item}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </Box>
                            <Button variant="contained" startIcon={<PlayCircleOutlineIcon />} sx={{ textTransform: 'none', backgroundColor: '#185CFF' }}>
                                Watch the demo
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box >
            {renderDropdownMenu}
        </>
    );
}