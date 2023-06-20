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
                }}>
                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} spacing={3}>
                        {
                            IT_Service_Card_Data.map((data, id) => {
                                return (
                                    <Grid item xs={4}>
                                        <IT_Service_Card key={data.id} title={data.title} desc={data.desc} img={data.img} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        </>
    )
}

export default IT_Services