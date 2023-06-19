import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import './Services.css'
import { styled } from '@mui/system';
import { css } from '@emotion/react';

const CardMediaWrapper = styled(CardMedia)(({ theme }) => css`
  max-width: 100px
`);

export default function ServiceCard(props) {
    // const classes = useStyles();
    console.log(props);

    return (
        <Card sx={{
            maxWidth: 345,
            height: '100%',
            // border: '2px solid red',
            textAlign: 'center',
            padding: '2rem',
            boxShadow: '0px 4px 12px rgba(12, 68, 204, 0.1)',
            borderRadius: '6px'
        }}>
            {/* <CardActionArea sx={{ border: '2px solid red' }}> */}
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
            // className={classes.cardMedia}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium' }}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions sx={{ display: 'inline', mx: 'auto', fontWeight: 'medium' }}>
                <Button variant="text" size='small' endIcon={<EastIcon />} sx={{ color: '#185CFF' }}>
                    Read more
                </Button>
            </CardActions>
        </Card >
    );
}