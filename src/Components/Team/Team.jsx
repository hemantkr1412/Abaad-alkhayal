import React from 'react';
import TeamCard from './TeamCard.jsx'
import { TeamMembers } from './TeamMembers.jsx'
import Grid from '@mui/material/Grid';
import './Team.css'
import Paper from '@mui/material/Paper';

const Team = () => {
    return (
        <>
            <div className='teamDiv'>
                <h1 style={{ textAlign: 'center' }}>Get to know us closer</h1>
                <p style={{
                    marginBottom: '3rem',
                    textAlign: "center"
                }}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>

                <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
                    <Grid item xs={2}></Grid>
                    <Grid item container xs={8} spacing={3}>
                        {
                            TeamMembers.map((member, id) => {
                                return (
                                    <Grid item xs={4}>
                                        <TeamCard key={id} img={member.img} name={member.name} designation={member.designation} />
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

export default Team