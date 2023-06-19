import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import team_member_1 from './assets/team_member_1.png'

export default function ImgMediaCard(props) {
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
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.designation}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}