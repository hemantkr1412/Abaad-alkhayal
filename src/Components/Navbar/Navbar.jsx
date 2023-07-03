import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo1 from '/logo1.png';
import logo2 from '/logo2.png';
import '../Navbar/Navbar.css'
import Dropdown from './Dropdown';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Solutions', 'Team', 'Contact'];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);
    const [scroll, setScroll] = useState(false);
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const scrolling = () => {
        (window.scrollY >= 2) ? setScroll(true) : setScroll(false);
    }
    window.addEventListener('scroll', scrolling);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        if (isMouseEnter)
            setIsMouseEnter(false)
    };

    const handleMouseEnter = () => {
        // console.log(`mouse enters`);
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        // console.log(`mouse leaves`);
        setIsMouseEnter(false)
        setMobileOpen(false)
    }

    const handleSidebarClick = (event) => {
        // console.log(event.target);
        const clickedElement = event.target;
        if (!clickedElement.classList.contains('solutionLink')) {
            setIsMouseEnter(false)
        }
    };

    const drawer = (
        <Box sx={{
            textAlign: 'center',
            zIndex: '20',
        }} id="sidebar">
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo1} alt="" style={{
                    height: '5rem',
                    marginTop: '.5rem',
                }} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <div style={{
                            padding: '10px',
                            margin: 'auto',
                        }}>
                            {item === 'Solutions' ? (
                                <>
                                    <div style={{ position: 'relative' }} className="solutionDivSidebar">
                                        <a className="navbarLinks solutionLink" onClick={handleMouseEnter} style={{ color: 'black' }}>
                                            {item}
                                        </a>
                                        {isMouseEnter && <Dropdown handleMouseLeave={handleMouseLeave} setMobileOpen={setMobileOpen} />}
                                    </div>
                                </>
                            ) : (
                                <a href={`#${item.toLowerCase()}`} className="navbarLinks otherLinks" onClick={handleDrawerToggle} style={{ color: 'black' }}>
                                    {item}
                                </a>
                            )}
                        </div>
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav"
                    sx={{
                        // background: "transparent",
                        // border: '2px solid red',
                        zIndex: 10,
                        boxShadow: "none",
                        background: scroll ? "#343A4B" : "transparent",
                        position: 'fixed', // Add this line
                        top: 0, // Add this line
                    }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{
                            // border: '2px solid red',
                            width: '100%',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    ml: { sm: 0, md: 4 },
                                }}
                                className='navbarTitle'
                            >
                                <a href="#home">
                                    <img src={logo2} alt="" style={{
                                        height: '5rem',
                                        marginTop: '.5rem',
                                    }} id="navbarLogo" />
                                </a>
                            </Typography>
                            <Box xs={6} sx={{
                                // border: '2px solid red',
                                display: { xs: 'none', sm: 'block' },
                                width: { sm: '70%', md: '50%' },
                            }}>
                                <Box sx={{
                                    width: '100%', display: 'flex',
                                    justifyContent: 'space-evenly'
                                }}>
                                    {navItems.map((item) => (
                                        <div key={item} >
                                            {item === 'Solutions' ? (
                                                <>
                                                    <div
                                                        onMouseOver={handleMouseEnter}
                                                        onMouseOut={handleMouseLeave}
                                                        style={{ height: '2rem' }}
                                                    >
                                                        <a className="solutionLink">
                                                            {item}
                                                        </a>
                                                        {isMouseEnter && <Dropdown handleMouseLeave={handleMouseLeave} setMobileOpen={setMobileOpen} />}
                                                        {/* <Dropdown /> */}
                                                    </div>
                                                </>
                                            ) : (
                                                <a href={`#${item.toLowerCase()}`} className="navbarLinks" style={{ color: 'white' }}>
                                                    {item}
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </Box>
                            </Box>
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
                        onClick={handleSidebarClick}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box >
        </>
    );
}