import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css";

export default function TeamCard(props) {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
		});
	}, []);
	return (
		<Card
			sx={{
				width: "100%",
				height: "100%",
				maxWidth: 345,
				boxShadow: "0px 12px 30px 17px rgba(24, 92, 255, 0.04)",
				borderRadius: "6px",
			}}
			data-aos="fade-up"
			className="teamCard">
			{/* <CardMedia
				component="img"
				// height="350"
				// style={{
				// 	height: window.innerWidth < 600 ? "230px" : "270px",
				// }}
				// alt="green iguana"
				// image={props.img}
				className="teamImg"
			/> */}
			<CardContent className="teamInfoCard">
				<Typography
					gutterBottom
					variant="body1"
					component="div"
					sx={{ fontWeight: "bold" }}
					className="teamMemberName">
					{props.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					className="memberDesignation">
					{props.designation}
				</Typography>
			</CardContent>
		</Card>
	);
}
