import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import AOS from "aos";
import "aos/dist/aos.css";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { PopupWidget } from "react-calendly";

const Contact = () => {
	const { t } = useTranslation();
	const formDetail = [
		{
			label: t("contact.name"),
			placeholder: t("contact.namePlaceholder"),
			key: "Name",
		},
		{
			label: t("contact.email"),
			placeholder: t("contact.emailPlaceholder"),
			key: "Email",
		},
		{
			label: t("contact.purpose.heading"),
			placeholder: t("contact.purposePlaceholder"),
			key: "Purpose",
		},
		{
			label: t("contact.message"),
			placeholder: t("contact.messagePlaceholder"),
			key: "Message",
		},
	];
	const [dataAos, setDataAos] = useState("");
	const [open, setOpen] = React.useState(false);
	const [openMeet, setOpenMeet] = useState(false);
	const [inputDetails, setInputDetails] = useState({
		Name: "",
		Email: "",
		Purpose: "",
		Message: "",
	});

	const handleToClose = (event, reason) => {
		if ("clickaway" == reason) return;
		setOpen(false);
	};

	const inputEvent = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		// console.log(name, val);
		setInputDetails({ ...inputDetails, [name]: val });
	};

	const submitForm = (event) => {
		event.preventDefault();
		// console.log(`submit forms runs`);

		const config = {
			SecureToken: "26802cb0-6999-4fb5-8d33-b75d9d1c7736",
			To: "hello@beimagine.tech",
			From: "hello@beimagine.tech",
			Subject: "Abaad Alkhayal Contact Form",
			Body: `
            Name: ${inputDetails.Name}<br>
            Email: ${inputDetails.Email}<br>
            Purpose: ${inputDetails.Purpose}<br>
            Message: ${inputDetails.Message}
          `,
		};
		if (window.Email) {
			window.Email.send(config)
				.then((data) => {
					// console.log(data);
					setOpen(true);
					setInputDetails({
						Name: "",
						Email: "",
						Purpose: "",
						Message: "",
					});
				})
				.catch((error) => {
					setOpen(true);
				});
		}
	};

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 400,
		});
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth < 400) {
				setDataAos("fade-up");
			} else {
				setDataAos("zoom-in-left");
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div id="contact"></div>
			<Typography
				variant="h5"
				gutterBottom
				sx={{
					// border: '2px solid red',
					display: { xs: "block", md: "none" },
					fontWeight: "bold",
					textAlign: "center",
					fontSize: "2rem",
				}}
				id="contactHead">
				{t("contact.heading")}
			</Typography>
			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				sx={{ p: 3 }}
				className="contactDiv">
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
				<Grid item xs={12} sm={6} sx={{ p: 5 }} id="contactContainer">
					<Box sx={{ textAlign: "start" }}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								display: { xs: "none", md: "block" },
							}}>
							{t("contact.heading")}
						</Typography>

						<Box sx={{ mt: 4 }}>
							<p>{t("contact.emailAddress")}</p>
							<a
								href="mailto: sales@abaadalkhayal.com"
								className="contactLink">
								sales@abaadalkhayal.com
							</a>
						</Box>

						<Box sx={{ mt: 4 }}>
							<p>{t("contact.addressHeading")}</p>
							<p className="contactInfo">
								{t("contact.address")}
							</p>
						</Box>

						<PopupWidget
							url="https://calendly.com/ankit-oea/30min"
							rootElement={document.getElementById("contactContainer")}
							text="Schedule meeting"
							textColor="#ffffff"
							color="#00a2ff"
						// className="custom-popup-widget"
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
					className="formOuterDiv">
					<Box component="div" className="formDiv" data-aos={dataAos}>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								fontWeight: "bold",
								marginLeft: "2rem",
								marginTop: "1rem",
								color: "black",
							}}>
							{t("contact.contactUs")}
						</Typography>
						<form onSubmit={submitForm}>
							{formDetail.map((elem, id) => {
								{
									/* console.log(elem) */
								}
								return (
									<FormControl
										variant="standard"
										className="inputDiv"
										key={id}
										onSubmit={submitForm}>
										<InputLabel
											htmlFor="component-simple"
											className="inputLabel">
											{elem.label}
										</InputLabel>
										{elem.label ===
											t("contact.purpose.heading") ? (
											<Select
												labelId="demo-simple-select-standard-label"
												id="demo-simple-select-standard"
												label="Purpose"
												name="Purpose"
												sx={{ minWidth: 195 }}
												value={inputDetails.Purpose}
												onChange={inputEvent}>
												<MenuItem value="Work with us">
													{t(
														"contact.purpose.workWithUs"
													)}
												</MenuItem>
												<MenuItem value="Product or Service Information">
													{t(
														"contact.purpose.productServiceInfo"
													)}
												</MenuItem>
												<MenuItem value="Partnership or Collaboration">
													{t(
														"contact.purpose.partnershipCollaboration"
													)}
												</MenuItem>
												<MenuItem value="Feedback or Suggestions">
													{t(
														"contact.purpose.feedbackSuggestion"
													)}
												</MenuItem>
												<MenuItem value="Other">
													{t(
														"contact.purpose.others"
													)}
												</MenuItem>
											</Select>
										) : (
											<Input
												id="component-simple"
												placeholder={elem.placeholder}
												className="input"
												onChange={inputEvent}
												name={elem.label}
												value={inputDetails[elem.key]}
											/>
										)}
									</FormControl>
								);
							})}
							<Button
								type="submit"
								variant="contained"
								className="formBtn"
								sx={{ margin: "1rem 2rem 0 0" }}>
								{t("contact.send")}
							</Button>
						</form>
					</Box>
				</Grid>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
			</Grid>

			<Snackbar
				anchorOrigin={{
					horizontal: "center",
					vertical: "top",
				}}
				open={open}
				autoHideDuration={1500}
				// message={t("formSubmittedSuccessfully")}
				sx={{
					"& .MuiSnackbarContent-root": {
						backgroundColor: "#4caf50",
						color: "#fff",
					},
				}}
				onClose={handleToClose}
				action={
					<React.Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleToClose}>
							<CancelIcon />
						</IconButton>
					</React.Fragment>
				}
			/>
		</>
	);
};

export default Contact;
