import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Team.css';

export default function TeamCard(props) {
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
            borderRadius: '6px'
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                // height="70%"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }} className="teamMemberName">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="memberDesignation">
                    {props.designation}
                </Typography>
            </CardContent>
        </Card>
    );
}