import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import gaming from './assets/gaming.jpg';
import medical from './assets/medical.jpg';
import engineering from './assets/engineering-2.jpeg';
import architecture from './assets/architecture.jpeg';
import ecommerce from './assets/ecommerce-2.jpeg';
import gamingBg from './assets/gaming-bg.jpg';
import GamingCarousel from './GamingCarousel';
import { useTranslation } from "react-i18next";
import "./Gaming.css";

const Gaming = ({ lang }) => {
    const { t } = useTranslation();

    const sliderItems = [
        { title: t("ourSolutions.gaming.application.engineering"), img: engineering },
        { title: t("ourSolutions.gaming.application.medical"), img: medical },
        { title: t("ourSolutions.gaming.application.ecommerce"), img: ecommerce },
        { title: t("ourSolutions.gaming.application.gaming"), img: gaming },
        { title: t("ourSolutions.gaming.application.architecture"), img: architecture },
        // { title: "Entertainment", img: gaming },
        // { title: "Entertainment", img: gaming },
        // { title: "Entertainment", img: gaming },
    ];

    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <div id="gaming"></div>
            <div className="gamingDiv serviceDiv gamingOverlay" style={{
                backgroundImage: `url(${gamingBg})`,
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                marginBottom: '6rem',
                padding: '5rem 0'
            }}>
                <h1>{t("ourSolutions.gaming.heading")}</h1>
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
                                    textAlign: lang === "en" ? "justify" : "right",
                                    // textAlign: "justify",
                                    marginBottom: "4rem",
                                }}
                                gutterBottom
                                className="solutionInfo">
                                {/* {t("copyright")} */}
                                {t("ourSolutions.gaming.text")}
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

            <GamingCarousel items={sliderItems} active={0} />
        </>
    )
}

export default Gaming;