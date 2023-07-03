import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from './assets/about1.jpg';
import aboutImg2 from './assets/about2.png';
import './About.css'

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 400,
        });
    }, [])
    return (
        <>
            {/* ABOUT SECTION */}

            <div id="about"></div>

            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" className="mission" sx={{ mb: 5 }}>
                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>

                <Grid item xs={12} sm={6} md={5} lg={4} className="imgContainer" sx={{
                    display: { xs: 'block !important', sm: 'none !important' }
                }}>
                    <Typography variant="h3" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center',
                        color: 'white'
                    }} className="aboutHead">
                        Who We Are
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} data-aos="fade-up" className="aboutImgContainer">
                        <CardMedia
                            component="img"
                            // height="80%"
                            image={aboutImg1}
                            sx={{ objectFit: 'cover' }}
                            alt="Image Alt Text"
                            className="aboutImg"
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <Box sx={{ textAlign: 'start' }} className="aboutBox">
                        <Typography variant="h3" gutterBottom sx={{
                            fontWeight: 'bold', mb: 4,
                            display: { xs: 'none', sm: 'block' },
                            textAlign: 'start',
                            color: 'white'
                        }} className="aboutHead">
                            Who We Are
                        </Typography>
                        <Typography
                            sx={{
                                typography: 'body1',
                                lineHeight: 1.8,
                                textAlign: 'justify',
                                marginRight: '0',
                                color: 'white'
                            }} gutterBottom id="aboutInfo">
                            We are a Saudi-based software company that leverages the latest technologies like blockchain and artificial intelligence to help businesses thrive in the digital age. With a passion for innovation and a drive to surpass limits, we deliver unparalleled solutions that empower enterprises to reach new heights. Combining technical prowess with creative flair, we bring forth transformative experiences that unlock your business's true potential. Join us on an exciting journey to break new ground in the digital realm.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={4} className="imgContainer" sx={{
                    // border: '2px solid red',
                    display: { xs: 'none', sm: 'block' }
                }}>
                    <Card sx={{ boxShadow: 'none' }} data-aos="fade-up" className="aboutImgContainer">
                        <CardMedia
                            component="img"
                            // height="80%"
                            image={aboutImg1}
                            sx={{ objectFit: 'cover' }}
                            alt="Image Alt Text"
                            className="aboutImg"
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>

            {/* MISSION SECTION */}

            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" className="mission" sx={{
                // border: '2px solid red',
            }}>
                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>

                <Grid item xs={12} sm={6} md={5} lg={4} className="imgContainer">
                    <Typography variant="h3" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center',
                        color: 'white'
                    }} className="aboutHead">
                        Our Mission
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} data-aos="fade-up" className="missionImgContainer">
                        <CardMedia
                            component="img"
                            // height="80%"
                            image={aboutImg2}
                            sx={{ objectFit: 'cover' }}
                            alt="Image Alt Text"
                            className="missionImg"
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <Box sx={{ textAlign: 'start' }} className="missionBox">
                        <Typography variant="h3" gutterBottom sx={{
                            fontWeight: 'bold', mb: 4,
                            display: { xs: 'none', sm: 'block' },
                            color: 'white'
                        }} className="aboutHead">
                            Our Mission
                        </Typography>
                        <Typography
                            sx={{
                                typography: 'body1',
                                lineHeight: 1.8,
                                textAlign: 'justify',
                                marginLeft: '0',
                                color: 'white'
                            }} gutterBottom id="aboutInfo">
                            Our mission is to empower individuals, organizations and communities with transformative technological solutions, such as artificial intelligence and blockchain. We make a positive social impact by being at the forefront of technological innovation and striving to create a better future through technology.   As your tech partner, we're committed to identifying problem areas and collaborating with our clients to ideate, develop and deploy solutions that will help resolve them. Whether it's through AI-powered automation or blockchain-enabled data security, we're here to support you every step of the way. Join us in shaping the future of technology, and start building a better tomorrow today.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default About;