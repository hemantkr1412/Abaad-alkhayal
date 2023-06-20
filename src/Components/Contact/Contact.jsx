import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div id="contact"></div>
            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" sx={{ p: 3 }} className="contactDiv">
                <Grid item xs={1}></Grid>
                <Grid item xs={6} sx={{ p: 5 }}>
                    <Box sx={{ textAlign: 'start' }}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Left questions? Contacts us now for a free consultation and free trial!
                        </Typography>
                        <Typography sx={{ typography: 'body1', lineHeight: 1.8, mb: 5 }} gutterBottom className='contactType'>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <p className='contactType'>Email address</p>
                            <a href="mailto: support@beimagine.tech" className="contactLink">support@beimagine.tech</a>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <p className='contactType'>Phone number</p>
                            <p className='contactInfo'>+1601-201-5580</p>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <p className='contactType'>Address</p>
                            <p className='contactInfo'>03 Laffa restaurant building,
                                Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall,
                                Dubai,United Arab Emirates</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} className="formOuterDiv">
                    <Box component="div" className="formDiv">
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginLeft: '2rem', marginTop: '1rem' }} >
                            Contact Us
                        </Typography>

                        <FormControl variant="standard" className='inputDiv'>
                            <InputLabel htmlFor="component-simple" className="inputLabel">Name</InputLabel>
                            <Input id="component-simple" defaultValue="Andrea" className='input' />
                        </FormControl>

                        <FormControl variant="standard" className='inputDiv'>
                            <InputLabel htmlFor="component-simple" className="inputLabel">Email</InputLabel>
                            <Input id="component-simple" defaultValue="andrea@gmail.com" className='input' />
                        </FormControl>

                        <FormControl variant="standard" className='inputDiv'>
                            <InputLabel htmlFor="component-simple" className="inputLabel">Theme</InputLabel>
                            <Input id="component-simple" defaultValue="Job" className='input' />
                        </FormControl>

                        <FormControl variant="standard" className='inputDiv'>
                            <InputLabel htmlFor="component-simple" className="inputLabel">Message</InputLabel>
                            <Input id="component-simple" defaultValue="Your message" className='input' />
                        </FormControl>

                        <Button variant="contained" className="formBtn" sx={{ background: '#185CFF', margin: '1rem 2rem 0 0' }}>Send</Button>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    )
}

export default Contact