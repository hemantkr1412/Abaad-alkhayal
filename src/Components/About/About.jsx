import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import aboutImg1 from './assets/about1.png';
import aboutImg2 from './assets/about3.png';
import './About.css'

const About = () => {
    const record = [
        { field: 'Project executed', data: '1830+' },
        { field: ' Data analytics', data: 220 },
        { field: 'Data management', data: 390 },
        { field: 'Satisfied customers', data: '834+' },
    ]

    return (
        <>
            {/* <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" id="about" sx={{ background: '#185CFF', color: 'white', p: 3, marginTop: '1rem' }}>
                <Grid item xs={2}></Grid>
                {
                    record.map((elem, id) => {
                        return (
                            <Grid item xs={2} className="record" key={id}>
                                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {elem.data}
                                </Typography>
                                <Typography variant="body2">
                                    {elem.field}
                                </Typography>
                            </Grid>
                        )
                    })
                }
                <Grid item xs={2} className="record"></Grid>
            </Grid> */}

            {/* WHO WE ARE */}

            {/* <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" sx={{ p: 3 }} className="whoWeAre" id="about">
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Box sx={{ textAlign: 'start' }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            About us
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, textAlign: 'justify' }} gutterBottom>
                            An innovative technology company offering cutting-edge solutions and driving digital transformation. With a deep-rooted commitment to pushing boundaries, we strive to redefine what is achievable in the digital realm. By blending creativity with technical expertise, we empower businesses to unlock their full potential and embark on a transformative journey. We strongly believe that the future is limited only by our imagination. Join us in our endeavor to turn extraordinary into a reality.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ ml: 5 }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={aboutImg1}
                            alt="Image Alt Text"
                        />
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid> */}

            {/* OUR MISSION */}

            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" sx={{ p: 3 }} className="mission" id="about">
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
                    <Card sx={{ boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={aboutImg2}
                            alt="Image Alt Text"
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={5}>
                    <Box sx={{ textAlign: 'start', ml: 5 }} className="missionBox">
                        <Typography variant="h3" gutterBottom sx={{
                            fontWeight: 'bold', mb: 4,
                            display: { xs: 'none', sm: 'block' }
                        }}>
                            Our Mission
                        </Typography>
                        <Typography
                            sx={{
                                typography: 'body1',
                                lineHeight: 1.8,
                                textAlign: 'justify',
                                marginLeft: '0'
                            }} gutterBottom>
                            Our mission is to empower individuals, organizations, and communities by providing innovative and transformative technological solutions while being at the forefront of technological innovation, making a positive social impact and creating a better future through technology. Acting as a tech partner, we assist our clients in identifying various problem areas and ideate, develop and deploy solutions to resolve them.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default About;