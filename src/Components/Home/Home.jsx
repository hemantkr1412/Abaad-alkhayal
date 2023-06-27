import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import home from './assets/home.jpg'
import Typography from '@mui/material/Typography';
import './Home.css'

const Home = () => {
    return (
        <>
            <div id="home"></div>
            <Grid container spacing={2}
                sx={{
                    // border: '2px solid red',
                    height: { xs: '70vh', sm: '86vh' }
                }}>
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} sm={5}
                    sx={{
                        height: '68%',
                        // border: '2px solid red',
                        backgroundImage: `url(${home})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        display: { xs: 'block', sm: 'none' },
                        '@media (maxWidth: 900px)': { xs: 6 }
                    }}>
                </Grid>
                <Grid item xs={12} sm={6} md={5}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '@media (maxWidth: 900px)': { xs: 6 }
                    }}>
                    <Box sx={{
                        width: { xs: '90%', sm: '90%', md: '77%' },
                        textAlign: 'start'
                    }} className="homeTextBox">
                        <Typography variant="h3" gutterBottom className="homeHead" sx={{
                            fontWeight: 'bold',
                        }}>
                            Who We Are
                        </Typography>
                        <Typography variant="h6" className="homeDesc" gutterBottom sx={{
                            textAlign: 'justify',
                        }}>
                            We are a Saudi-based software company that leverages the latest technologies like blockchain and artificial intelligence to help businesses thrive in the digital age. With a passion for innovation and a drive to surpass limits, we deliver unparalleled solutions that empower enterprises to reach new heights. Combining technical prowess with creative flair, we bring forth transformative experiences that unlock your business's true potential.Join us on an exciting journey to break new ground in the digital realm.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={5}
                    sx={{
                        height: '80%',
                        // border: '2px solid red',
                        marginTop: '2rem',
                        backgroundImage: `url(${home})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        display: { xs: 'none', sm: 'block' },
                        '@media (maxWidth: 900px)': { xs: 6 }
                    }} id="homeImgContainer">
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid >
            <div id="about"></div>
        </>
    )
}

export default Home;