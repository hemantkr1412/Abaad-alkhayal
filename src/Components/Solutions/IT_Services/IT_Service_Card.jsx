import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { css } from '@emotion/react';
import './IT_Services.css';

const CardMediaWrapper = styled(CardMedia)(({ theme }) => css`
  max-width: 100px
`);

export default function IT_Service_Card(props) {
    // console.log(props);

    return (
        <Card sx={{
            maxWidth: 345,
            height: '100%',
            // border: '2px solid red',
            textAlign: 'center',
            padding: '1rem',
            boxShadow: '0px 4px 12px rgba(12, 68, 204, 0.1)',
            borderRadius: '6px',
            margin: 'auto'
        }} className="serviceCard">
            <CardMediaWrapper
                component="img"
                height="40"
                image={props.img}
                alt="green iguana"
                sx={{
                    // border: '2px solid red',
                    margin: 'auto',
                    mt: 2,
                    mb: 3,
                    objectFit: 'contain'
                }}
            />
            <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium' }} className="serviceCardTitle">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card >
    );
}