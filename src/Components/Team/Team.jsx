import React from 'react';
import TeamCard from './TeamCard.jsx';
import { TeamMembers } from './TeamMembers.jsx';
import Grid from '@mui/material/Grid';
import './Team.css';

const Team = () => {
    return (
        <>
            <div id="team"></div>
            <div className='teamDiv'>
                <h1 style={{ textAlign: 'center' }}>Get to know us closer</h1>
                <p style={{
                    marginBottom: '3rem',
                    marginTop: '1rem',
                    width: '40%',
                    textAlign: 'center'
                }} className='teamInfo'>
                    Highly skilled professionals with extensive expertise in technology, innovation, and business, dedicated to driving digital transformation and exceeding client expectations.</p>

                <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
                    <Grid item xs={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                    <Grid item container xs={12} lg={8} spacing={3}>
                        {
                            TeamMembers.map((member, id) => {
                                return (
                                    <Grid item xs={6} sm={4} key={id}>
                                        <TeamCard img={member.img} name={member.name} designation={member.designation} />
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

export default Team;