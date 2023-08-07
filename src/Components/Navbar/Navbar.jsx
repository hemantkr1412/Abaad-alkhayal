import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import "../Navbar/Navbar.css";
import Dropdown from "./Dropdown";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const drawerWidth = 240;

export default function Navbar({lang,setLang}) {
	const { t } = useTranslation();
	const navItems = [
		{ label: t("navbar.home"), key: "Home" },
		{ label: t("navbar.about"), key: "About" },
		{ label: t("navbar.solutions.heading"), key: "Solutions" },
		{ label: t("navbar.team"), key: "Team" },
		{ label: t("navbar.contact"), key: "Contact" },
	];
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [scroll, setScroll] = useState(false);
	const [isMouseEnter, setIsMouseEnter] = useState(false);

	const scrolling = () => {
		window.scrollY >= 2 ? setScroll(true) : setScroll(false);
	};
	window.addEventListener("scroll", scrolling);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
		if (isMouseEnter) setIsMouseEnter(false);
	};

	const handleMouseEnter = () => {
		// console.log(`mouse enters`);
		setIsMouseEnter(true);
	};
	const handleMouseLeave = () => {
		// console.log(`mouse leaves`);
		setIsMouseEnter(false);
		setMobileOpen(false);
	};

	const handleSidebarClick = (event) => {
		// console.log(event.target);
		const clickedElement = event.target;
		if (!clickedElement.classList.contains("solutionLink")) {
			setIsMouseEnter(false);
		}
	};

	const drawer = (
		<Box
			sx={{
				textAlign: "center",
				zIndex: "20",
			}}
			id="sidebar">
			<Typography variant="h6" sx={{ my: 2 }}>
				<img
					src={logo1}
					alt=""
					style={{
						height: "5rem",
						marginTop: ".5rem",
					}}
				/>
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.key} disablePadding>
						<div
							style={{
								padding: "10px",
								margin: "auto",
							}}>
							{item.key === "Solutions" ? (
								<>
									<div
										style={{ position: "relative" }}
										className="solutionDivSidebar">
										<a
											className="navbarLinks solutionLink"
											onClick={handleMouseEnter}
											style={{ color: "black" }}>
											{item.label}
										</a>
										{isMouseEnter && (
											<Dropdown
												handleMouseLeave={
													handleMouseLeave
												}
												setMobileOpen={setMobileOpen}
											/>
										)}
									</div>
								</>
							) : (
								<a
									href={`#${item.key.toLowerCase()}`}
									className="navbarLinks otherLinks"
									onClick={handleDrawerToggle}
									style={{ color: "black" }}>
									{item.label}
								</a>
							)}
						</div>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					component="nav"
					sx={{
						// border: '2px solid red',
						zIndex: 10,
						boxShadow: "none",
						background: scroll ? "#343A4B" : "transparent",
						position: "fixed",
						top: 0,
					}}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { sm: "none" },
								color: "white",
							}}>
							<MenuIcon />
						</IconButton>
						<Box
							sx={{
								// border: '2px solid red',
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<Typography
								variant="h6"
								component="div"
								sx={{
									display: { xs: "none", sm: "block" },
									ml: { sm: 0, md: 4 },
								}}
								className="navbarTitle">
								<a href="#home">
									<img
										src={logo2}
										alt=""
										style={{
											height: "5rem",
											marginTop: ".5rem",
										}}
										id="navbarLogo"
									/>
								</a>
							</Typography>
							<Box
								xs={6}
								sx={{
									// border: '2px solid red',
									display: { xs: "none", sm: "block" },
									width: { sm: "70%", md: "50%" },
								}}>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
									}}>
									{navItems.map((item) => (
										<div
											key={item.key}
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											{item.key === "Solutions" ? (
												<>
													<div
														onMouseOver={
															handleMouseEnter
														}
														onMouseOut={
															handleMouseLeave
														}
														style={{
															height: "2rem",
															display: "flex",
															alignItems:
																"center",
															// marginTop: "1em",
														}}>
														<a className="solutionLink">
															{item.label}
														</a>
														{isMouseEnter && (
															<Dropdown
																handleMouseLeave={
																	handleMouseLeave
																}
																setMobileOpen={
																	setMobileOpen
																}
															/>
														)}
														{/* <Dropdown /> */}
													</div>
												</>
											) : (
												<a
													href={`#${item.key.toLowerCase()}`}
													className="navbarLinks"
													style={{ color: "white" }}>
													{item.label}
												</a>
											)}
										</div>
									))}
								</Box>
							</Box>
						</Box>
						<LanguageSelect lang={lang} setLang={setLang} />
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						onClick={handleSidebarClick}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</>
	);
}
function LanguageSelect({lang,setLang}) {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	// const [lang, setLang] = useState(i18next.language);

	const handleLanguageChange = (event, value) => {
		i18next.changeLanguage(value);
		setLang(value);
		handleClose(event);
	};
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Stack direction="row" spacing={2}>
			<div>
				<Button
					ref={anchorRef}
					id="composition-button"
					aria-controls={open ? "composition-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}>
					<svg
						className="language-select"
						stroke="white"
						fill="white"
						strokeWidth="0"
						viewBox="0 0 24 24"
						height="24"
						width="24"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
					</svg>
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement="bottom-start"
					transition
					disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom-start"
										? "left top"
										: "left bottom",
							}}>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="composition-menu"
										aria-labelledby="composition-button"
										onKeyDown={handleListKeyDown}>
										<MenuItem
											onClick={(e) =>
												handleLanguageChange(e, "ar")
											}
											value={"ar"}>
											العربية
										</MenuItem>
										<MenuItem
											onClick={(e) =>
												handleLanguageChange(e, "en")
											}
											value={"en"}>
											English
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
}
