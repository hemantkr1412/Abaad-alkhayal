import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import BitSaudiImg from "./assets/bitsaudi5.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BitSaudi.css";
import { useTranslation } from "react-i18next";

const BitSaudi = ({lang}) => {
	const [showFullText, setShowFullText] = useState(false);
	const { t } = useTranslation();
	const toggleText = () => {
		setShowFullText(!showFullText);
	};

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 700,
		});
	}, []);

	return (
		<>
			<div id="bitsaudi"></div>
			<h1
				style={{
					// border: '2px solid red',
					textAlign: "center",
					fontSize: "3rem",
					margin: "2rem 0 4rem",
					// marginBottom: '5rem',
				}}
				className="solutionHead">
				{t("ourSolutions.heading")}
			</h1>
			<Grid
				container
				spacing={{ xs: 5, md: 3 }}
				justifyContent="center"
				className="mission">
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
					id="solutionImgContainer">
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							fontWeight: "bold",
							mb: 4,
							display: { xs: "block", sm: "none" },
							textAlign: "center",
						}}
						className="solution">
						{t("ourSolutions.bitmemoirSaudi.heading")}
					</Typography>
					<Card
						sx={{ boxShadow: "none" }}
						className="solutionImgContainer"
						data-aos="fade-up">
						<CardMedia
							component="img"
							height="90%"
							image={BitSaudiImg}
							alt="Image Alt Text"
							className="solutionImg"
						/>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={5} lg={4}>
					<Box
						sx={{
							textAlign: "start",
							ml: { xs: 3, md: 0 },
							pr: { xs: 3, md: 0 },
						}}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								mb: 4,
								display: { xs: "none", sm: "block" },
							}}
							className="solution">
							{t("ourSolutions.bitmemoirSaudi.heading")}
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: lang === "en" ? "justify" : "right",
								marginBottom: "4rem",
							}}
							gutterBottom
							className="solutionInfo">
							{showFullText ? (
								<>
									{t("ourSolutions.bitmemoirSaudi.textLong")}
									<Button
										variant="text"
										onClick={toggleText}
										sx={{
											textTransform: "none",
											color: "#185CFF",
											textDecoration: "underline",
										}}>
										{t(
											"ourSolutions.bitmemoirSaudi.readLess"
										)}
									</Button>
								</>
							) : (
								<>
									{t("ourSolutions.bitmemoirSaudi.textShort")}
									<Button
										variant="text"
										onClick={toggleText}
										sx={{
											textTransform: "none",
											color: "#185CFF",
											textDecoration: "underline",
										}}>
										{t(
											"ourSolutions.bitmemoirSaudi.readMore"
										)}
									</Button>
								</>
							)}
						</Typography>
						<Link
							className="launchBtn"
							to="https://bitmemoirsaudi.netlify.app/"
							target="_blank">
							{t("ourSolutions.launch")}
						</Link>
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
		</>
	);
};

export default BitSaudi;
