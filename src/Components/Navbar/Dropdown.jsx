import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";

const Dropdown = ({ handleMouseLeave, setMobileOpen }) => {
	const { t } = useTranslation();
	return (
		<>
			<List
				sx={{
					// border: '2px solid red',
					color: "black",
					padding: 0,
					backgroundColor: "white",
					position: "absolute",
					top: { xs: "1.5rem", sm: "4rem" },
					width: { xs: "10rem", sm: "auto" },
					zIndex: "100",
					boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
					borderRadius: "4px",
				}}>
				<ListItem disablePadding>
					<div style={{ margin: "auto" }}>
						<a
							href="#bitsaudi"
							onClick={() => {
								handleMouseLeave();
								setMobileOpen(false);
							}}
							className="dropdownLinks">
							{t("navbar.solutions.bitsaudi")}
						</a>

						<a
							href="#bitwallet"
							onClick={() => {
								handleMouseLeave();
								setMobileOpen(false);
							}}
							className="dropdownLinks">
							{t("navbar.solutions.bitwallet")}
						</a>
						<a
							href="#gaming"
							onClick={() => {
								handleMouseLeave();
								setMobileOpen(false);
							}}
							className="dropdownLinks">
							{t("navbar.solutions.gaming")}
						</a>

						<a
							href="#itservices"
							onClick={() => {
								handleMouseLeave();
								setMobileOpen(false);
							}}
							className="dropdownLinks">
							{t("navbar.solutions.itservices")}
						</a>
					</div>
				</ListItem>
			</List>
		</>
	);
};

export default Dropdown;
