import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Floater.css';

const Floater = () => {
    return (
        <div className="floater">
            <IconButton aria-label="instagram">
                <InstagramIcon className="floaterIcon" />
            </IconButton>
            <IconButton aria-label="instagram">
                <TwitterIcon className="floaterIcon" />
            </IconButton>
            <IconButton aria-label="instagram">
                <LinkedInIcon className="floaterIcon" />
            </IconButton>
            <IconButton aria-label="instagram">
                <TelegramIcon className="floaterIcon" />
            </IconButton>
        </div>
    )
}

export default Floater