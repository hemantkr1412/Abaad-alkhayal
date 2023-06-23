import React from 'react';
import IT_Service_Card from './IT_Service_Card.jsx'
import { IT_Service_Card_Data } from './IT_Service_Card_Data.jsx'
import Grid from '@mui/material/Grid';
import './IT_Services.css';

const IT_Services = () => {
    return (
        <>
            <div id="itservices"></div>
            <div className='serviceDiv' >
                <h1>Our Core Services</h1>
                <p style={{
                    marginBottom: '3rem',
                    marginTop: '1rem',
                    width: '30%',
                    textAlign: 'center'
                }} className='serviceDesc'>
                    We offer wide range of comprehensive IT services and deliver tailor-made, robust, and scalable solutions to meet unique needs of businesses.</p>

                <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
                    <Grid item xs={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                    <Grid item container xs={12} lg={8} spacing={3} className="serviceCardContainerDiv">
                        {
                            IT_Service_Card_Data.map((data, id) => {
                                return (
                                    <Grid item xs={6} md={4} className="serviceCardContainer" key={id}>
                                        <IT_Service_Card key={id} title={data.title} desc={data.desc} img={data.img} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                </Grid>
            </div>
        </>
    )
}

export default IT_Services