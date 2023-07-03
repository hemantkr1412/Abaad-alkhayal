import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import BitSaudiImg from './assets/bitsaudi5.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BitSaudi.css'

const BitSaudi = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 700,
        });
    }, [])

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
                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} sm={6} md={5} lg={4} id="solutionImgContainer">
                    <Typography variant="h4" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center'
                    }} className="solution">
                        BitMemoir Saudi
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} className="solutionImgContainer" data-aos="fade-up">
                        <CardMedia
                            component="img"
                            height="90%"
                            image={BitSaudiImg}
                            alt="Image Alt Text"
                            className="solutionImg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <Box sx={{ textAlign: 'start', ml: { xs: 3, md: 0 }, pr: { xs: 3, md: 0 } }}>
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            mb: 4,
                            display: { xs: 'none', sm: 'block' }
                        }} className="solution">
                            BitMemoir Saudi
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, textAlign: 'justify', marginBottom: '4rem' }} gutterBottom className='solutionInfo'>
                            {showFullText ? (
                                <>
                                    Our BitMemoir is an NFT-utility platform designed to address the widespread issues of counterfeit documents and identity theft. By harnessing the immutable properties of blockchain technology, BitMemoir offers a comprehensive solution that caters to a variety of needs. Our platform enables the creation of secure and verifiable digital credentials, such as Skills Passport and Medical Passport, as well as providing NFTs for souvenirs, Warranty/Guarantee Cards, and Loyalty Programs.

                                    What sets BitMemoir apart is its user-friendly and customizable approach. Our plug and play system allows for effortless integration and adoption within different industries and organizations. With a reliable and decentralized infrastructure, we are paving the way for a future built on trust and transparency. Whether you are an individual or a business, our platform empowers you to confidently manage your digital identity, while minimizing the risks associated with counterfeit documents and identity theft.

                                    Join us in shaping a safer and more secure digital future. Together, we can create a world where authenticity is assured and identities are protected.
                                    <Button variant="text" onClick={toggleText} sx={{
                                        textTransform: 'none',
                                        color: '#185CFF',
                                        textDecoration: 'underline'
                                    }}>Read less</Button>
                                </>
                            ) : (
                                <>
                                    Our BitMemoir is an NFT-utility platform designed to address the widespread issues of counterfeit documents and identity theft. By harnessing the immutable properties of blockchain technology, BitMemoir offers a comprehensive solution that caters to a variety of needs. Our platform enables the creation of secure and verifiable digital credentials, such as Skills Passport and Medical Passport, as well as providing NFTs for souvenirs, Warranty/Guarantee Cards, and Loyalty Programs.
                                    <Button variant="text" onClick={toggleText} sx={{
                                        textTransform: 'none',
                                        color: '#185CFF',
                                        textDecoration: 'underline'
                                    }}>Read more</Button>
                                </>
                            )}
                        </Typography>
                        <Link className="launchBtn" to="https://bitmemoirsaudi.netlify.app/" target="_blank">Launch</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default BitSaudi;