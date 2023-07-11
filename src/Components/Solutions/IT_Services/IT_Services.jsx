import React from "react";
import IT_Service_Card from "./IT_Service_Card.jsx";
import Grid from "@mui/material/Grid";
import "./IT_Services.css";
import { useTranslation } from "react-i18next";
import vector1 from "./assets/img-1.png";
import vector2 from "./assets/img-2.png";
import vector3 from "./assets/img-3.png";
import vector4 from "./assets/img-4.png";
import vector5 from "./assets/img-5.png";
import vector6 from "./assets/img-6.png";
const IT_Services = () => {
	const { t } = useTranslation();
	const ITCardData = [
		{
			id: 1,
			img: vector1,
			title: t(
				"ourSolutions.coreServices.services.DecentralizedPlatforms.heading"
			),

			desc: t(
				"ourSolutions.coreServices.services.DecentralizedPlatforms.text"
			),
		},
		{
			id: 2,
			img: vector2,
			title: t(
				"ourSolutions.coreServices.services.ProprietaryBlockchainSolutions.heading"
			),
			desc: t(
				"ourSolutions.coreServices.services.ProprietaryBlockchainSolutions.text"
			),
		},
		{
			id: 3,
			img: vector3,
			title: t(
				"ourSolutions.coreServices.services.AppDevelopment.heading"
			),
			desc: t("ourSolutions.coreServices.services.AppDevelopment.text"),
		},
		{
			id: 4,
			img: vector4,
			title: t(
				"ourSolutions.coreServices.services.NFT-basedLoyaltyProgrammes.heading"
			),
			desc: t(
				"ourSolutions.coreServices.services.NFT-basedLoyaltyProgrammes.text"
			),
		},
		{
			id: 5,
			img: vector5,
			title: t(
				"ourSolutions.coreServices.services.ManagementInformationSystems.heading"
			),
			desc: t(
				"ourSolutions.coreServices.services.ManagementInformationSystems.text"
			),
		},
		{
			id: 6,
			img: vector6,
			title: t(
				"ourSolutions.coreServices.services.DigitalTransformation.heading"
			),
			desc: t(
				"ourSolutions.coreServices.services.DigitalTransformation.text"
			),
		},
	];
	return (
		<>
			<div id="itservices"></div>
			<div className="serviceDiv">
				<h1>{t("ourSolutions.coreServices.heading")}</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "30%",
						textAlign: "center",
					}}
					className="serviceDesc">
					{t("ourSolutions.coreServices.subHeading")}
				</p>

				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					justifyContent="center">
					<Grid
						item
						xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}></Grid>
					<Grid
						item
						container
						xs={12}
						lg={8}
						spacing={3}
						className="serviceCardContainerDiv">
						{ITCardData.map((data, id) => {
							return (
								<Grid
									item
									xs={6}
									md={4}
									className="serviceCardContainer"
									key={id}>
									<IT_Service_Card
										key={id}
										title={data.title}
										desc={data.desc}
										img={data.img}
									/>
								</Grid>
							);
						})}
					</Grid>
					<Grid
						item
						xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}></Grid>
				</Grid>
			</div>
		</>
	);
};

export default IT_Services;
