import React from 'react';
import ServiceCard from './ServiceCard.jsx'
import { servicesCardData } from './ServiceCardData.jsx'
import Grid from '@mui/material/Grid';
import './Services.css'
import Paper from '@mui/material/Paper';

// export default function SpacingGrid() {
// const [spacing, setSpacing] = React.useState(2);

// const handleChange = () => {
//     setSpacing(Number());
// };

//     const jsx = `
// // <Grid container spacing={${spacing}}>
// `;

const Services = () => {
    return (
        <>
            <div className='serviceDiv'>
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
                            servicesCardData.map((data, id) => {
                                return (
                                    <Grid item xs={4}>
                                        <ServiceCard key={id} title={data.title} desc={data.desc} img={data.img} />
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

export default Services