import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './Contact.css'

const Contact = () => {
    return (
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
                        <p className='contactInfo'>ensome@info.co.us</p>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <p className='contactType'>Phone number</p>
                        <p className='contactInfo'>+1601-201-5580</p>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <p className='contactType'>Address</p>
                        <p className='contactInfo'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
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
                        <Input id="component-simple" defaultValue="andrea@gmaol.com" className='input' />
                    </FormControl>

                    <FormControl variant="standard" className='inputDiv'>
                        <InputLabel htmlFor="component-simple" className="inputLabel">Theme</InputLabel>
                        <Input id="component-simple" defaultValue="Job" className='input' />
                    </FormControl>

                    <FormControl variant="standard" className='inputDiv'>
                        <InputLabel htmlFor="component-simple" className="inputLabel">Message</InputLabel>
                        <Input id="component-simple" defaultValue="Message" className='input' />
                    </FormControl>

                    {/* <Button variant="contained" sx={{ background: '#185CFF', color: 'white' }}>Send</Button> */}
                </Box>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}

export default Contact