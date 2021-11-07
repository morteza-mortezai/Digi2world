import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles";
import useTranslation from "next-translate/useTranslation";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo1 from "../../../assets/img/logo1.svg";
import font from "../../../assets/img/font.svg";
import Link from "next/link";
export default function Footer() {
	const classes = useStyles();
	const { t } = useTranslation("common");

	return (
		<>
			<Hidden smDown>
				<Grid container justify="center" className={classes.footerContainer}>
					<Grid container className={classes.footerBox}>
						<Grid item md={4} className={classes.footerSection}>
							<Grid item style={{ display: "flex" }}>
								<img src={logo1} alt="LOGO" style={{ width: 50 }} />
								<img
									src={font}
									alt="font"
									style={{ width: 70, margin: "15px 0 0 5px" }}
								/>
							</Grid>
							<Grid item className={classes.footerUnderLogo}>
								{t("footerUnderLogo")}
							</Grid>
						</Grid>
						{/* <Grid item md={2} className={classes.footerSection}>
							<Grid item className={classes.footerSectionTitle}>
								{t("menu")}
							</Grid>
							<Link href="/joinUs">
								<a style={{ textDecoration: "none", color: "#000" }}>
									<Grid item className={classes.footerMenuItem}>
										{t("JoinUs")}
									</Grid>
								</a>
							</Link>
							<Link href="/about">
								<a style={{ textDecoration: "none", color: "#000" }}>
									<Grid item className={classes.footerMenuItem}>
										{t("About")}
									</Grid>
								</a>
							</Link> */}
							{/* <Link href="/about">
								<a style={{ textDecoration: "none", color: "#000" }}>
									<Grid item className={classes.footerMenuItem}>
										{t("Blogs")}
									</Grid>
								</a>
							</Link> */}
							{/* <Link href="/about">
								<a style={{ textDecoration: "none", color: "#000" }}>
									<Grid item className={classes.footerMenuItem}>
										{t("Contact")}
									</Grid>
								</a>
							</Link> */}
						{/* </Grid> */}
						<Grid item md={3} className={classes.footerSection}>
							<Grid item className={classes.footerSectionTitle}>
								{t("getInTouch")}
							</Grid>
							<Grid item className={classes.footerMenuItem}>
								01794642873
							</Grid>
							<Grid item className={classes.footerMenuEmail}>
								info@digi2world.de
							</Grid>
							<Grid item className={classes.footerMenuCity}>
								{t("city")}
							</Grid>

							<Grid item className={classes.footerMenuAddress}>
								{t("address1")}
							</Grid>
							<Grid item className={classes.footerMenuAddress}>
								{t("address2")}
							</Grid>
							<Grid item className={classes.footerMenuAddress}>
								{t("address3")}
							</Grid>
						</Grid>
						<Grid item md={3} className={classes.footerSection}>
						
							<Grid container>
							    <Link href="https://www.linkedin.com/in/shahrbano-ghanavati-0aa119163/">
								<a style={{textDecoration:"none"}}> 
								<Grid item className={classes.contactUSIconLinkedin}>
									in 
								</Grid>
								</a>
								</Link>
								{/* <TwitterIcon className={classes.contactUSIcon} />
								<GitHubIcon className={classes.contactUSIcon} /> */}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Grid container direction="column" className={classes.footerBoxMobile}>
					{/* <Grid item className={classes.footerSection}>
						<Grid item style={{ display: "flex" }}>
							<img src={logo1} alt="LOGO" style={{ width: 50 }} />
							<img
								src={font}
								alt="font"
								style={{ width: 70, margin: "15px 0 0 5px" }}
							/>
						</Grid>
						<Grid item className={classes.footerUnderLogo}>
							{t("footerUnderLogo")}
						</Grid>
					</Grid>
					<Grid item className={classes.footerSection}> */}
						{/* <Grid item className={classes.footerSectionTitleMobile}>
							{t("menu")}
						</Grid>
						<Grid item className={classes.footerMenuItem}>
							{t("JoinUs")}
						</Grid>
						<Grid item className={classes.footerMenuItem}>
							{t("About")}
						</Grid>
						<Grid item className={classes.footerMenuItem}>
							{t("Services")}
						</Grid>
						{/* <Grid item className={classes.footerMenuItem}>
							{t("Blogs")}
						</Grid> */}
					{/* </Grid> */} */}
					<Grid item className={classes.footerSection}>
						<Grid item className={classes.footerSectionTitleMobile}>
							{t("getInTouch")}
						</Grid>
						<Grid item className={classes.footerMenuItem} style={{ marginTop: 0 }}>
							1800 983 338
						</Grid>
						<Grid item className={classes.footerMenuEmail}>
							contactus@shinesolutions.com
						</Grid>
						<Grid item className={classes.footerMenuCity}>
							{t("city")}
						</Grid>

						<Grid item className={classes.footerMenuAddress}>
							{t("address1")}
						</Grid>
						<Grid item className={classes.footerMenuAddress}>
							{t("address2")}
						</Grid>
						<Grid item className={classes.footerMenuAddress}>
							{t("address3")}
						</Grid>
					</Grid>
					<Grid item md={3} className={classes.footerSection}>
						<Grid item className={classes.footerSectionTitleMobile}>
							{t("connectWithUS")}
						</Grid>
						<Grid container>
							<Grid item className={classes.contactUSIconLinkedin}>
								in
							</Grid>
							<TwitterIcon className={classes.contactUSIcon} />
							<GitHubIcon className={classes.contactUSIcon} />
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
		</>
	);
}
