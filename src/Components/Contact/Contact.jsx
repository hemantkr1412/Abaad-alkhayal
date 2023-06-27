import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import './Contact.css'

const formDetail = [
    { label: 'Name', placeholder: "Andrea" },
    { label: 'Email', placeholder: "andrea@gmail.com" },
    { label: 'Purpose', placeholder: "Select purpose" },
    { label: 'Message', placeholder: "Your message" }
]
const Contact = () => {
    const [inputDetails, setInputDetails] = useState({})
    const [userQuery, setUserQuery] = useState([]);

    const inputEvent = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        console.log(name, val);
        setInputDetails({ ...inputDetails, [name]: val });
    }

    const submitForm = () => {
        setUserQuery((prev) => [...userQuery, inputDetails])
    }

    return (
        <>
            <div id="contact"></div>
            <Typography variant="h5" gutterBottom sx={{
                // border: '2px solid red',
                display: { xs: 'block', md: 'none' },
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '2rem',
                background: '#F1F6FA'
            }} id="contactHead">
                Feel free to reach out for further details
            </Typography>
            <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" sx={{ p: 3 }} className="contactDiv">
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                <Grid item xs={12} sm={6} sx={{ p: 5 }} id="contactContainer">
                    <Box sx={{ textAlign: 'start' }}>

                        <Typography variant="h4" gutterBottom sx={{
                            fontWeight: 'bold',
                            display: { xs: 'none', md: 'block' }
                        }}>
                            Feel free to reach out for further details
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            <p className='contactType'>Email address</p>
                            <a href="mailto: support@beimagine.tech" className="contactLink">support@beimagine.tech</a>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <p className='contactType'>Address</p>
                            <p className='contactInfo'>03 Laffa restaurant building,
                                Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall,
                                Dubai,United Arab Emirates</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4} className="formOuterDiv">
                    <Box component="div" className="formDiv">
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginLeft: '2rem', marginTop: '1rem' }} >
                            Contact Us
                        </Typography>
                        {
                            formDetail.map((elem, id) => {
                                return (
                                    <FormControl variant="standard" className='inputDiv' key={id}>
                                        <InputLabel htmlFor="component-simple" className="inputLabel">{elem.label}</InputLabel>
                                        {elem.label === 'Purpose' ? (
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                // value={age}
                                                // onChange={handleChange}
                                                label="Purpose"
                                                name="Purpose"
                                                sx={{ minWidth: 195 }}
                                                onChange={inputEvent}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                                                <MenuItem value="Product or Service Information">Product or Service Information</MenuItem>
                                                <MenuItem value="Partnership or Collaboration">Partnership or Collaboration</MenuItem>
                                                <MenuItem value="Technical Support">Technical Support</MenuItem>
                                                <MenuItem value="Feedback or Suggestions">Feedback or Suggestions</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                        ) : (
                                            <Input id="component-simple" defaultValue={elem.placeholder} className='input' onChange={inputEvent} name={elem.label} />
                                        )}
                                    </FormControl>

                                )
                            })
                        }
                        <Button variant="contained" className="formBtn" sx={{ background: '#185CFF', margin: '1rem 2rem 0 0' }} onClick={submitForm}>Send</Button>
                    </Box>
                </Grid>
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
            </Grid>
        </>
    )
}

export default Contact