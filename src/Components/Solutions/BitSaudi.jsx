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
                textAlign: 'center',
                fontSize: '3rem',
                marginTop: '1rem',
                marginBottom: '3rem',
            }}>Our Solutions</h1>
            <Grid container spacing={{ xs: 5, md: 3 }} justifyContent="center" className="mission">
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="90%"
                            image={BitSaudiImg}
                            alt="Image Alt Text"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ textAlign: 'start', ml: 5 }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            BitMemoir Saudi
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, textAlign: 'justify', marginBottom: '4rem' }} gutterBottom>
                            A unique NFT-utility platform leveraging blockchain technology to enhance the security, authenticity, and accessibility of documents. BitMemoir resolves multiple market problems through its diverse bouquet of offerings. The platform primarily focuses on negating the possibility of creating fake documents and identity theft.
                        </Typography>
                        <Link className="launchBtn" to="https://bitmemoirsaudi.netlify.app/" target="_blank">Launch</Link>
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    )
}

export default BitSaudi;