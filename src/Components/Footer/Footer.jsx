import React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {
    return (
        <>

            <Grid container spacing={2} className="footerDiv">
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <img src={logo} alt="" style={{
                        height: '5rem',
                        marginTop: '.5rem'
                    }} />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2} className='linksContainer'>
                    <p>About</p>
                    <a href='#home' className='footerBtn'>Home</a>
                    <a href='#about' className='footerBtn'>About us</a>
                    <a href='#itservices' className='footerBtn'>Services</a>
                    <a href='#bitsaudi' className='footerBtn'>Solutions</a>
                </Grid>

                <Grid item xs={2} className='linksContainer'>
                    <p>Information</p>
                    <a href='#contacts' className='footerBtn'>Contact</a>
                    <a href='#team' className='footerBtn'>Our team</a>
                    <Link to='/' className='footerBtn'>Blog</Link>
                    <Link to='/' className='footerBtn'>FAQ</Link>
                </Grid>

                <Grid item xs={2} className='linksContainer'>
                    <p>Service</p>
                    <Link to='/' className='footerBtn'>Pages</Link>
                    <Link to='/' className='footerBtn'>Elements</Link>
                    <Link to='/' className='footerBtn'>Site map</Link>
                    <Link to='/' className='footerBtn'>Pricing</Link>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
            </Grid>

            <Grid container spacing={2} className="footerDiv">
                <Grid item xs={1}></Grid>
                <Grid item xs={7} sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    borderTop: '2px solid #C9DCEC',
                    paddingTop: '1rem'
                }}>
                    <Box>
                        <p>Contacts</p>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ borderTop: '2px solid #C9DCEC' }}>
                    <Box sx={{
                        color: 'black',
                        fontWeight: 'bold',
                        paddingTop: '1rem'
                    }}>
                        <p>Social</p>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={2} sx={{ fontSize: '14px' }}>
                    <Box>
                        <p>+1 601-201-5580</p>
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{ fontSize: '14px' }}>
                    <Box>
                        <p>03 Laffa restaurant building,
                            Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall,
                            Dubai,United Arab Emirates</p>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <FacebookRoundedIcon sx={{ color: '#185CFF', transform: 'scale(1.1)', cursor: 'pointer' }} />
                        <TwitterIcon className="footerIcons" />
                        <LinkedInIcon className="footerIcons" />
                        <YouTubeIcon className="footerIcons" />
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={2} sx={{
                    fontSize: '14px',
                    borderBottom: '2px solid #C9DCEC',
                    paddingBottom: '1rem'
                }}>
                    <Box>
                        <a href="mailto: support@beimagine.tech" className="footerLink">support@beimagine.tech →</a>
                    </Box>
                </Grid>
                <Grid item xs={9} sx={{
                    fontSize: '14px',
                    borderBottom: '2px solid #C9DCEC',
                    paddingBottom: '1rem'
                }}>
                    <Box>
                        <p style={{ fontWeight: 'bold' }}>Driving directions →</p>
                    </Box>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}

                <Grid item xs={1}></Grid>
                <Grid item xs={2} sx={{ fontSize: '14px' }}>
                    <Box sx={{ pt: 3 }}>
                        <p style={{ color: '#9497A1' }}>Privacy policy →</p>
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{ fontSize: '14px' }}>
                    <Box sx={{ pt: 3 }}>
                        <p style={{ color: '#9497A1' }}>Terms of us →</p>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ pt: 3 }}>
                        <p style={{ color: '#9497A1', fontSize: "14px" }}>© 2023 Aba'ad Alkhayal. All Rights Reserved.</p>
                    </Box>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}

            </Grid>
        </>
    )
}

export default Footer