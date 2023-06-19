import * as React from 'react';
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
import logo from './assets/logo.png'
import '../Navbar/Navbar.css'

const drawerWidth = 240;
const navItems = ['Home', 'Services', 'About Us', 'Team', 'Pricing', 'Contacts'];

export default function Navbar() {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
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

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: "white" }}>
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
                            sx={{
                                // flexGrow: 1,
                                display: { xs: 'none', sm: 'block' },
                                // color: 'black',
                                // width: 'fit-content'
                            }}
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
                                <Button key={item} sx={{ color: 'black', textTransform: 'none' }}>
                                    {item}
                                </Button>
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
                        keepMounted: true, // Better open performance on mobile.
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
    );
}