import React from 'react';
import Grid from '@mui/material/Grid';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='pricingDiv'>
            <h1>Our pricing</h1>
            <Grid container spacing={3} justifyContent="center" sx={{ p: 5 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} className="priceCard">
                </Grid>
                <Grid item xs={2} className="priceCard">
                </Grid>
                <Grid item xs={2} className="priceCard" sx={{
                    background: '#185CFF'
                }}>
                </Grid>
                <Grid item xs={2} className="priceCard">
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div >
    )
}

export default Pricing