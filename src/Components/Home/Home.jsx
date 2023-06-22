import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import home from './assets/home.png'
import Typography from '@mui/material/Typography';
import './Home.css'

const Home = () => {
    return (
        <>
            <div id="home"></div>
            <Grid container spacing={2}
                sx={{
                    // border: '2px solid red',
                    marginBottom: '3rem',
                    height: { xs: '70vh', sm: '86vh' }
                }}>
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} sm={5}
                    sx={{
                        height: '68%',
                        // border: '2px solid red',
                        backgroundImage: `url(${home})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        display: { xs: 'block', sm: 'none' },
                        '@media (max-width: 900px)': { xs: 6 }
                    }}>
                </Grid>
                <Grid item xs={12} sm={6} md={5}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '@media (max-width: 900px)': { xs: 6 }
                    }}>
                    <Box sx={{ width: '77%', textAlign: 'start' }} className="homeTextBox">
                        <Typography variant="h3" gutterBottom className="homeHead" sx={{
                            fontWeight: 'bold',
                        }}>
                            Who We Are
                        </Typography>
                        <Typography variant="h6" className="homeDesc" gutterBottom sx={{
                            textAlign: 'justify',
                        }}>
                            With a deep-rooted commitment to pushing boundaries, we strive to redefine what is achievable in the digital realm. By blending creativity with technical expertise, we empower businesses to unlock their full potential and embark on a transformative journey.
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
                        '@media (max-width: 900px)': { xs: 6 }
                    }}>
                    {/* <img src={home} alt=""  }} /> */}
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid >
            <div id="about" style={{ height: '2rem' }}></div>
        </>
    )
}

export default Home;