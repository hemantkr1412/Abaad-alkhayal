import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import aboutImg2 from './assets/about3.png';
import './About.css'

const About = () => {
    return (
        <>
            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" className="mission">
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>

                <Grid item xs={12} sm={6} md={5} className="imgContainer">
                    <Typography variant="h3" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center',
                    }} className="aboutHead">
                        Our Mission
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} className="missionImgContainer">
                        <CardMedia
                            component="img"
                            // height="80%"
                            image={aboutImg2}
                            alt="Image Alt Text"
                            className="missionImg"
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={5}>
                    <Box sx={{ textAlign: 'start', ml: 5 }} className="missionBox">
                        <Typography variant="h3" gutterBottom sx={{
                            fontWeight: 'bold', mb: 4,
                            display: { xs: 'none', sm: 'block' }
                        }} className="aboutHead">
                            Our Mission
                        </Typography>
                        <Typography
                            sx={{
                                typography: 'body1',
                                lineHeight: 1.8,
                                textAlign: 'justify',
                                marginLeft: '0',
                            }} gutterBottom id="aboutInfo">
                            Our mission is to empower individuals, organizations and communities with transformative technological solutions, such as artificial intelligence and blockchain. We make a positive social impact by being at the forefront of technological innovation and striving to create a better future through technology.   As your tech partner, we're committed to identifying problem areas and collaborating with our clients to ideate, develop and deploy solutions that will help resolve them. Whether it's through AI-powered automation or blockchain-enabled data security, we're here to support you every step of the way. Join us in shaping the future of technology, and start building a better tomorrow today.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default About;