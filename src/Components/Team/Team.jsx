import React from "react";
import TeamCard from "./TeamCard.jsx";
import Grid from "@mui/material/Grid";
import "./Team.css";
import { useTranslation } from "react-i18next";
import team_member_1 from "./assets/team1.jpeg";
import team_member_2 from "./assets/team2.jpeg";
import team_member_3 from "./assets/team3.jpeg";
import team_member_4 from "./assets/team4.jpeg";
import team_member_5 from "./assets/team5.jpeg";
import team_member_6 from "./assets/team6.jpeg";
import team_member_7 from "./assets/team7.jpeg";
import team_member_8 from "./assets/team8.jpeg";
import team_member_9 from "./assets/team9.jpg";
import team_member_10 from "./assets/team10.jpg";
import team_member_11 from "./assets/team11.jpg";
const Team = () => {
	const { t } = useTranslation();
	const TeamMembers = [
		{
			id: 1,
			img: team_member_2,
			name: t("getToKnowUsCloser.names.name1"),
			designation: t("getToKnowUsCloser.designations.cofounder"),
		},
		{
			id: 2,
			img: team_member_1,
			name: t("getToKnowUsCloser.names.name2"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.ceo")}`,
		},
		{
			id: 3,
			img: team_member_3,
			name: t("getToKnowUsCloser.names.name3"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.publicRelationsManager")}`,
		},
		{
			id: 4,
			img: team_member_6,
			name: t("getToKnowUsCloser.names.name4"),
			designation: `${t(
				"getToKnowUsCloser.designations.cofounder"
			)} - ${t("getToKnowUsCloser.designations.technology")}`,
		},
		{
			id: 5,
			img: team_member_7,
			name: t("getToKnowUsCloser.names.name5"),
			designation: t("getToKnowUsCloser.designations.programManager"),
		},
		{
			id: 6,
			img: team_member_4,
			name: t("getToKnowUsCloser.names.name6"),
			designation: t(
				"getToKnowUsCloser.designations.businessDevelopmentSpecialist"
			),
		},
		{
			id: 7,
			img: team_member_5,
			name: t("getToKnowUsCloser.names.name7"),
			designation: t(
				"getToKnowUsCloser.designations.accountantSpecialist"
			),
		},
		// {
		//     id: 7,
		//     img: team_member_8,
		//     name: 'Navraj Sharma',
		//     designation: 'Blockchain Developer'
		// },
		// {
		//     id: 9,
		//     img: team_member_9,
		//     name: 'Shubham Jaiswal',
		//     designation: 'Blockchain Developer'
		// },
		// {
		//     id: 10,
		//     img: team_member_10,
		//     name: 'Hemant Kumar',
		//     designation: 'Blockchain Developer'
		// },
		// {
		//     id: 11,
		//     img: team_member_11,
		//     name: 'Vivek Tyagi',
		//     designation: 'Blockchain Developer'
		// },
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
										// img={member.img}
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
