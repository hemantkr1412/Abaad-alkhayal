import React from "react";
import TeamCard from "./TeamCard.jsx";
import Grid from "@mui/material/Grid";
import "./Team.css";
import { useTranslation } from "react-i18next";
import hessah from "./assets/hessah.jpeg";
import bander from "./assets/bander.jpeg";
import nikhil from "./assets/nikhil.jpeg";
import anas from "./assets/anas.jpeg";
const Team = () => {
	const { t } = useTranslation();
	const TeamMembers = [
		{
			id: 1,
			img: hessah,
			name: t("getToKnowUsCloser.names.name1"),
			designation: t("getToKnowUsCloser.designations.cofounder"),
		},
		{
			id: 2,
			// img: team_member_1,
			name: t("getToKnowUsCloser.names.name2"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.ceo")}`,
		},
		{
			id: 3,
			img: bander,
			name: t("getToKnowUsCloser.names.name3"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.publicRelationsManager")}`,
		},
		{
			id: 4,
			img: nikhil,
			name: t("getToKnowUsCloser.names.name4"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.technology")}`,
		},
		{
			id: 5,
			// img: team_member_7,
			name: t("getToKnowUsCloser.names.name5"),
			designation: t("getToKnowUsCloser.designations.programManager"),
		},
		{
			id: 6,
			img: anas,
			name: t("getToKnowUsCloser.names.name6"),
			designation: t("getToKnowUsCloser.designations.salesManager"),
		},
		{
			id: 7,
			// img: team_member_4,
			name: t("getToKnowUsCloser.names.name7"),
			designation: t(
				"getToKnowUsCloser.designations.businessDevelopmentSpecialist"
			),
		},
		{
			id: 8,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name8"),
			designation: t(
				"getToKnowUsCloser.designations.accountantSpecialist"
			),
		},
		{
			id: 9,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name9"),
			designation: t(
				"getToKnowUsCloser.designations.hr"
			),
		},
		{
			id: 10,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name10"),
			designation: t(
				"getToKnowUsCloser.designations.blockchainDeveloper"
			),
		},
		{
			id: 11,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name11"),
			designation: t(
				"getToKnowUsCloser.designations.blockchainDeveloper"
			),
		},
		{
			id: 12,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name12"),
			designation: t(
				"getToKnowUsCloser.designations.blockchainDeveloper"
			),
		},
		{
			id: 13,
			// img: team_member_5,
			name: t("getToKnowUsCloser.names.name13"),
			designation: t(
				"getToKnowUsCloser.designations.blockchainDeveloper"
			),
		},
	];
	return (
		<>
			<div id="team"></div>
			<div className="teamDiv">
				<h1 style={{ textAlign: "center" }}>
					{t("getToKnowUsCloser.heading")}
				</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "40%",
						textAlign: "center",
					}}
					className="teamInfo">
					{t("getToKnowUsCloser.subheading")}
				</p>

				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					justifyContent="center">
					<Grid
						item
						xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}></Grid>
					<Grid item container xs={12} lg={8} spacing={3}>
						{TeamMembers.map((member, id) => {
							return (
								<Grid
									item
									xs={6}
									sm={4}
									md={3}
									key={id}
									sx={{
										display: "flex",
										alignItems: "stretch",
									}}>
									<TeamCard
										img={member.img}
										name={member.name}
										designation={member.designation}
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

export default Team;
