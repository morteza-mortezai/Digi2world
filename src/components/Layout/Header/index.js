import { Collapse, Grid, Hidden, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import useStyles from "../../../styles";
import ServicesModal from "./servicesModal";
import ServicesCollapse from "./servicesCollapse";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { MasterContext } from "../../../context/MasterContext";
import logo1 from "../../../assets/img/logo1.svg";
import font from "../../../assets/img/font.svg";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

export default function Header() {
	const classes = useStyles();
	const { t, lang } = useTranslation("common");
	const [collapse, setCollapse] = useState(false);
	const [servicesCollapse, setServicesCollapse] = useState(false);
	let { setServicesModal } = useContext(MasterContext);

	const handleEnterService = () => {
		setServicesModal(true);
	};

	const handleLeaveService = () => {
		setServicesModal(false);
	};
	return (
		<>
			<Hidden smDown>
				<Grid container justify="center" style={{backgroundColor:"#fff"}}>
					<Grid container className={classes.colorFullRect}></Grid>
					<Grid container justify="space-between" className={classes.headerBox}>
						<Link href="/">
							<a>
								<Grid
									item
									style={{
										display: "flex",
										alignItems: "center",
										cursor: "pointer",
									}}
								>
									<img
										src={logo1}
										alt="LOGO"
										style={{ width: 70, margin: "15px 5px 15px 15px" }}
									/>
									<img
										src={font}
										alt="font"
										style={{ width: 90, margin: "25px 0 0 5px" }}
									/>
								</Grid>
							</a>
						</Link>
						<nav>
							<ul  style={{marginRight:25}} className={classes.menuContainer}>
								<li>
									<Link href="/about">
										<a className={classes.menuItemLink}>
											<Typography
												variant="body1"
												className={classes.menuItem}
											>
												{t("About")}
											</Typography>
										</a>
									</Link>
								</li>
								<li
									onMouseEnter={handleEnterService}
									onMouseLeave={handleLeaveService}
								>
									<Typography
										variant="body1"
										className={classes.menuItem}
										style={{ cursor: "default" }}
									>
										{t("Services")}
									</Typography>
									<ServicesModal />
								</li>
								{/* <li>
									<Typography variant="body1" className={classes.menuItem}>
										{t("Blogs")}
									</Typography>
								</li> */}
								<li>
									<Link href="/joinUs">
										<a className={classes.menuItemLink}>
											<Typography
												variant="body1"
												className={classes.menuItem}
											>
												{t("JoinUs")}
											</Typography>
										</a>
									</Link>
								</li>
								{/* <li>
									<Typography variant="body1" className={classes.menuItem}>
										{t("Contact")}
									</Typography>
								</li> */}
							</ul>
						</nav>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Grid
					container
					direction="column"
					alignItems="center"
					style={{ position: "relative", userSelect: "none" }}
				>
					<MenuIcon
						style={{ position: "absolute", left: 20, top: 30 }}
						onClick={() => setCollapse(!collapse)}
					/>
					<Grid item style={{ display: "flex" }}>
						<img src={logo1} alt="LOGO" style={{ width: 50, margin: "15px 0" }} />
						<img src={font} alt="font" style={{ width: 70, margin: "15px 0 0 5px" }} />
					</Grid>
				</Grid>
				<Grid container>
					<nav style={{ width: "100%" }}>
						<ul
							className={classes.menuContainerMobile}
							style={{
								marginTop: 0,
								height:
									collapse && servicesCollapse
										? 491
										: collapse && !servicesCollapse
										? 240
										: 0,
								transition: "all 0.25s linear",
							}}
						>
							<li>
								<Link href="/about">
									<a className={classes.menuItemLink}>
										<Typography
											variant="body1"
											className={classes.menuItemMobile}
										>
											{t("About")}
										</Typography>
									</a>
								</Link>
							</li>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									borderBottom: "1px solid #d1d1d1",
								}}
								onClick={() => setServicesCollapse(!servicesCollapse)}
							>
								<Typography
									variant="body1"
									className={classes.menuItemMobile}
									style={{ borderBottom: "none" }}
								>
									{t("Services")}
								</Typography>
								<ChevronRightRoundedIcon
									style={{
										transform: servicesCollapse
											? "rotate(90deg)"
											: "rotate(0deg)",
										transition: "transform 0.25s linear",
									}}
								/>
							</li>
							<Grid
								container
								style={{
									height: servicesCollapse ? 254 : 0,
									overflow: "hidden",
									transition: "all 0.25s linear",
								}}
							>
								<ServicesCollapse setServicesCollapse={setServicesCollapse} />
							</Grid>
							{/* <li>
								<Typography variant="body1" className={classes.menuItemMobile}>
									{t("Blogs")}
								</Typography>
							</li> */}
							<li>
								<Link href="/joinUs">
									<a className={classes.menuItemLink}>
										<Typography
											variant="body1"
											className={classes.menuItemMobile}
										>
											{t("JoinUs")}
										</Typography>
									</a>
								</Link>
							</li>
							{/* <li>
								<Typography
									variant="body1"
									className={classes.menuItemMobile}
									style={{ borderBottom: "none" }}
								>
									{t("Contact")}
								</Typography>
							</li> */}
						</ul>
					</nav>
				</Grid>
			</Hidden>
		</>
	);
}
