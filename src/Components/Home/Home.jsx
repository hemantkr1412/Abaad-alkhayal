import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import home from "./assets/home.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = ({ lang }) => {
	const { t } = useTranslation();

	return (
		<>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					// border: '2px solid red',
					height: { xs: "70vh", sm: "90vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
				}}
				id="homeContainer">
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						// border: '2px solid red',
						height: "68%",
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "block", sm: "none" },
						// '@media (maxWidth: 900px)': { xs: 6 }
					}}
					id="homeImg"></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						// border: '2px solid red',
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Box
						sx={{
							// border: '2px solid blue',
							width: { xs: "90%", sm: "90%", lg: "70%" },
							textAlign: "start",
						}}
						className="homeTextBox">
						<Typography
							variant="h1"
							gutterBottom
							className="homeHead"
							sx={{
								fontWeight: "bold",
								color: "white",
							}}>
							{t("mainHeading")}
						</Typography>
						<Typography
							variant="body1"
							className="homeDesc"
							gutterBottom
							sx={{
								textAlign: "justify",
								color: "white",
								marginBottom: '2rem'
							}}>
							{t("mainSubHeading")}
						</Typography>

						{lang === "en" ?
							<Link
								style={{ marginTop: '1rem' }}
								className="launchBtn"
								to="https://drive.google.com/file/d/1j0sPNmKCAPwZ5olYa4zZnZFjqk5-TI6D/view?usp=sharing"
								target="_blank">
								{t("homeBtn")}
							</Link>
							:
							<Link
								className="launchBtn"
								to="https://drive.google.com/file/d/1ihc7Nzc2lR99R-0su-eQ0bhRQ4ELUnV2/view?usp=sharing"
								target="_blank">
								{t("homeBtn")}
							</Link>
						}
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						height: "80%",
						// border: '2px solid yellow',
						// marginTop: '2rem',
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "none", sm: "block" },
						// '@media (maxWidth: 900px)': { xs: 6 }
					}}
					id="homeImgContainer"></Grid>
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
			</Grid>
		</>
	);
};

export default Home;
