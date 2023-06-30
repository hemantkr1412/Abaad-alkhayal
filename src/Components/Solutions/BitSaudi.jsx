import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import BitSaudiImg from './assets/bitsaudi5.png';
import { Link } from 'react-router-dom';
import './BitSaudi.css'

const BitSaudi = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

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
                            {showFullText ? (
                                <>
                                    A NFT-utility platform dedicated to tackle the pervasive problems of fake documents and identity theft. Leveraging the immutable nature of blockchain, BitMemoir is a one-stop solution that offers a diverse range of use cases like the creation of secure and verifiable digital credentials, Skills Passport, Medical Passport, NFT as souvenirs, Warranty/Guarantee Cards and also NFT-based Loyalty Programmes.
                                    The beauty of BitMemoir's services lies in its plug and play nature, enabling seamless integration and adoption across various industries and organizations. By providing a reliable and decentralized infrastructure, the platform paves the way for a more trustworthy and transparent future, empowering individuals and businesses alike to confidently manage their digital identities while mitigating the risks associated with fake documents and identity theft. Join us in shaping a safer and more secure digital future.
                                    <Button variant="text" onClick={toggleText} sx={{
                                        textTransform: 'none',
                                        color: '#73b9ff',
                                        textDecoration: 'underline'
                                    }}>Read less</Button>
                                </>
                            ) : (
                                <>
                                    A NFT-utility platform dedicated to tackle the pervasive problems of fake documents and identity theft. Leveraging the immutable nature of blockchain, BitMemoir is a one-stop solution that offers a diverse range of use cases like the creation of secure and verifiable digital credentials, Skills Passport, Medical Passport, NFT as souvenirs, Warranty/Guarantee Cards and also NFT-based Loyalty Programmes.
                                    <Button variant="text" onClick={toggleText} sx={{
                                        textTransform: 'none',
                                        color: '#73b9ff',
                                        textDecoration: 'underline'
                                    }}>Read more</Button>
                                </>
                            )}
                        </Typography>
                        {/* {!showFullText && (
                            <Button variant="text" onClick={toggleText}>Read more</Button>
                        )}
                        {showFullText && (
                            <Button variant="text" onClick={toggleText}>Read less</Button>
                        )} */}
                        <Link className="launchBtn" to="https://bitmemoirsaudi.netlify.app/" target="_blank">Launch</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default BitSaudi;