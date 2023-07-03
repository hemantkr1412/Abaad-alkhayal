import React from 'react';
import Grid from '@mui/material/Grid';
import logo from '/logo1.png';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <Grid container spacing={2} className="footerDiv">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
                    <img src={logo} alt="" style={{
                        height: '5rem',
                        marginTop: '.5rem',
                    }} id="footerImg" />
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }} id="footerIcons">
                    <Box>
                        <InstagramIcon sx={{ color: '#185CFF', transform: 'scale(1.4)', cursor: 'pointer' }} />
                        <TwitterIcon className="footerIcons" />
                        <LinkedInIcon className="footerIcons" />
                        <TelegramIcon className="footerIcons" />
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <p style={{
                color: '#9497A1',
                fontSize: "14px",
                textAlign: 'center',
                // margin: '1rem',
                paddingBottom: '1rem',
                background: '#D5D7D4'
            }}>
                © 2023 Aba'ad Alkhayal. All Rights Reserved.
            </p>
        </>
    )
}

export default Footer