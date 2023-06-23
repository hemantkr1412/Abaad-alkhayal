import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import BitwalletImg from './assets/Bitwallet.png';
import { Link } from 'react-router-dom';
import './BitSaudi.css'

const BitWallet = () => {
    return (
        <>
            <div id="bitwallet"></div>
            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" className="mission">
                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} sm={6} md={4} id="solutionImgContainer">
                    <Typography variant="h4" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        display: { xs: 'block', sm: 'none' },
                        textAlign: 'center'
                    }} className="solution">
                        BitWallet
                    </Typography>
                    <Card sx={{ boxShadow: 'none' }} className="solutionImgContainer">
                        <CardMedia
                            component="img"
                            height="90%"
                            image={BitwalletImg}
                            alt="Image Alt Text"
                            className='solutionImg'
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ textAlign: 'start', ml: { xs: 3, md: 0 }, pr: { xs: 3, md: 0 } }}>
                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            mb: 4,
                            display: { xs: 'none', sm: 'block' }
                        }} className='solution'>
                            BitWallet
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, textAlign: 'justify', marginBottom: '4rem' }} gutterBottom className='solutionInfo'>
                            An advanced digital wallet designed to provide users with a secure and convenient way to manage their digital assets. BitWallet allows users to store, send, and receive NFTs in a user-friendly interface and also supports seamless integration with popular decentralized applications (DApps) and decentralized finance (DeFi) platforms, enabling users to access a wide range of financial services and participate in tokenized ecosystems.
                        </Typography>
                        <Link className="launchBtn" to="https://bitmemoirsaudi.netlify.app/#/bitwalletpage" target="_blank">Launch</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: { xs: 'none', md: 'block' } }} ></Grid>
            </Grid>
        </>
    )
}

export default BitWallet;