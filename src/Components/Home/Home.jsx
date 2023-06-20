import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import home from './assets/home.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './Home.css'

const Home = () => {
    return (
        <>
            <div id="home"></div>
            <Grid container spacing={2}
                sx={{
                    // border: '2px solid red',
                    marginBottom: '3rem',
                    height: '86vh'
                }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}
                    sx={{
                        height: '100%',
                        // border: '2px solid blue',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Box sx={{ width: '77%', textAlign: 'start' }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Our Design Colorful Like Nature
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            When you come across someone colorful and vibrant maybe in the present it isn't so interesting, but, in the past, it sheds a wonderful light onto living life
                        </Typography>
                        <Button variant="contained" sx={{
                            backgroundColor: '#185CFF',
                            fontWeight: 'bold',
                            textTransform: 'none',
                        }}>Learn more</Button>
                        <Button variant="contained" startIcon={<PlayCircleOutlineIcon />} sx={{ textTransform: 'none', backgroundColor: '#185CFF', margin: '1rem' }}>
                            Watch the demo
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={5}
                    sx={{
                        height: '80%',
                        // border: '2px solid red',
                        marginTop: '2rem',
                        borderBottomLeftRadius: '13rem',
                        backgroundImage: `url(${home})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    {/* <img src={home} alt=""  }} /> */}
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid >
        </>
    )
}

export default Home;