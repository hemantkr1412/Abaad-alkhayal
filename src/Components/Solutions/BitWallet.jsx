import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardMedia } from "@mui/material";
import BitwalletImg from "./assets/bitwallet3.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BitSaudi.css";
import { useTranslation } from "react-i18next";

const BitWallet = ({ lang }) => {
	const { t } = useTranslation();
	useEffect(() => {
		AOS.init({
			offset: 80,
			duration: 300,
		});
	}, []);

	return (
		<>
			<div id="bitwallet"></div>
			<Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center" className="mission">
				<Grid item xs={12} sm={2} md={1} lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>

				<Grid item xs={12} sm={6} md={5} lg={4} id="solutionImgContainer">
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
						{t("ourSolutions.bitWallet.heading")}
					</Typography>
					<Card
						sx={{ boxShadow: "none" }}
						className="solutionImgContainer">
						<CardMedia
							component="img"
							height="90%"
							image={BitwalletImg}
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
								textAlign: lang === "en" ? "justify" : "right",
							}}
							className="solution">
							{t("ourSolutions.bitWallet.heading")}
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
							{t("ourSolutions.bitWallet.textShort")}
						</Typography>
						<Link
							className="launchBtn"
							to="https://bitmemoirsaudi.netlify.app/#/bitwalletpage"
							target="_blank">
							{t("ourSolutions.launch")}
						</Link>
					</Box>
				</Grid>
				<Grid item xs={12} sm={2} md={1} lg={2} sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid>
		</>
	);
};

export default BitWallet;
