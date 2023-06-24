import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import BitSaudiImg from './assets/Bitsaudi.png';
import { Link } from 'react-router-dom';
import './BitSaudi.css'

const BitSaudi = () => {
    return (
        <>
            <div id="bitsaudi"></div>
            <h1 style={{
                // border: '2px solid red',
                textAlign: 'center',
                fontSize: '3rem',
                margin: '2rem 0 4rem',
                // marginBottom: '5rem',
            }} className="solutionHead">Our Solutions</h1>
            <Grid container spacing={{ xs: 5, md: 3 }} justifyContent="center" className="mission">
                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} sm={6} md={4} id="solutionImgContainer">
                    <Typography variant="h4" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center'
                    }} className="solution">
                        BitMemoir Saudi
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} className="solutionImgContainer">
                        <CardMedia
                            component="img"
                            height="90%"
                            image={BitSaudiImg}
                            alt="Image Alt Text"
                            className="solutionImg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'start', ml: { xs: 3, md: 0 }, pr: { xs: 3, md: 0 } }}>
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            mb: 4,
                            display: { xs: 'none', sm: 'block' }
                        }} className="solution">
                            BitMemoir Saudi
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, textAlign: 'justify', marginBottom: '4rem' }} gutterBottom className='solutionInfo'>
                            Introducing BitMemoir - the innovative NFT-utility platform that leverages the power of blockchain to enhance document security, authentication, and accessibility. Our diverse bouquet of offerings addresses multiple market problems, with a primary focus on mitigating the risks of creating fake documents and identity theft. Join us in shaping a safer and more secure digital future.
                        </Typography>
                        <Link className="launchBtn" to="https://bitmemoirsaudi.netlify.app/" target="_blank">Launch</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default BitSaudi;