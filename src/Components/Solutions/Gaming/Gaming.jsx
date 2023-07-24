import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import gaming from './assets/gaming.png'
import gaming from './assets/gaming.jpg'
import medical from './assets/medical.jpg'
import engineering from './assets/engineering-2.jpeg'
import entertainment from './assets/music.jpg'
import ecommerce from './assets/ecommerce-2.jpeg'
import gamingBg from './assets/gaming-bg.jpg'
import { Link } from "react-router-dom";
import GamingCarousel from './GamingCarousel';
import { useTranslation } from "react-i18next";
import "./Gaming.css";

const Gaming = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    const [centeredCard, setCenteredCard] = useState(0);

    const { t } = useTranslation();

    const sliderItems = [
        { title: "Engineering", img: engineering },
        { title: "Medical", img: medical },
        { title: "Ecommerce", img: ecommerce },
        { title: "Gaming", img: gaming },
        { title: "Entertainment", img: entertainment },
        // { title: "Entertainment", img: gaming },
        // { title: "Entertainment", img: gaming },
        // { title: "Entertainment", img: gaming },
    ];

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {/* <div className="gamingOverlay"></div> */}
            <div className="gamingDiv serviceDiv gamingOverlay" style={{
                backgroundImage: `url(${gamingBg})`,
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: '6rem 0'
            }}>
                <h1>Gaming/Metaverse</h1>
                <Grid
                    container
                    spacing={{ xs: 3, md: 3 }}
                    justifyContent="center"
                    className="mission">
                    <Grid item xs={12} sm={2} md={1} lg={2} sx={{
                        display: { xs: "none", md: "block" }
                    }}></Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={5}
                        lg={4}
                        id="solutionImgContainer">
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                        <Box
                            sx={{
                                textAlign: "start",
                                ml: { xs: 3, md: 0 },
                                pr: { xs: 3, md: 0 },
                            }}>
                            <Typography
                                sx={{
                                    typography: "body1",
                                    lineHeight: 1.8,
                                    textAlign: "justify",
                                    marginBottom: "4rem",
                                }}
                                gutterBottom
                                className="solutionInfo">
                                {/* {t("copyright")} */}
                                Innovation and immersive experiences are at the forefront of all we do at Abaad Alkhayal. Our team of professionals is committed to expanding the realm of what is practical and charting the course for gaming and the metaverse in the future.
                                We have constructed the strong infrastructure that has hosted more than 500 games over the years. We are a team of exceptional strategic professionals with talents in art, design, engineering, and programming. Our company works with clients as partners rather than just as customers.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={2}
                        md={1}
                        lg={2}
                        sx={{ display: { xs: "none", md: "block" } }}></Grid>
                </Grid>

            </div>


            {/* <Grid container spacing={2}
                className="slider-container"
                sx={{
                    justifyContent: 'center',
                    width: '100vw'
                }}>
                {sliderItems.map((item, index) => (
                    <Card
                        sx={{
                            maxWidth: cardWidth,
                            height: 300,
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            transform: `translateX(calc(${(index - centeredCard) * (cardWidth + spacing)}px))`,
                            zIndex: centeredCard === index ? 1 : 'auto',
                        }}
                        className={`slider-card ${centeredCard === index ? 'centered' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <CardActionArea sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={item.img}
                                alt="green iguana"
                                sx={{ objectFit: 'cover' }}
                                className="sliderImg"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    color: 'white',
                                }}
                                className="sliderCaption"
                            >
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                            </Box>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid> */}

            <GamingCarousel items={sliderItems} active={0} />
        </>
    )
}

export default Gaming;