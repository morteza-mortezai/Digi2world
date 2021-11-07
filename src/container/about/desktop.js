import { Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import useStyles from "./style";
import OurProfile from "./components/Desktop/OurProfile";
import OurApproach from "./components/Desktop/OurApproach";
import OurValues from "./components/Desktop/OurValues";
import * as Scroll from "react-scroll";
import { MasterContext } from "../../context/MasterContext";

export default function Desktop() {
	let Element = Scroll.Element;
	var scroller = Scroll.scroller;
	let { aboutScrollName, setAboutScrollName } = useContext(MasterContext);
	useEffect(() => {
		scroller.scrollTo(aboutScrollName, {
			duration: 1000,
			delay: 200,
			smooth: true,
			offset: 0, // Scrolls to element + 50 pixels down the page
		});
		setAboutScrollName("");
	}, []);
	const classes = useStyles();
	const { t } = useTranslation("about");

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justify="center"
			style={{ position: "relative" }}
		>
			<Grid container className={classes.imageTopContainer}/>
			<Grid
				container
				direction="column"
				justify="center"
				className={classes.imageTopTitleAndText}
			>
				<Grid item className={classes.textContainer1}>
					<Typography variant="h1" className={classes.homePageTopTitle}>
						{t("topTitle")}
					</Typography>
				</Grid>
				<Grid item className={classes.textContainer1}>
					<Typography variant="body2" className={classes.homePageTopSubTitle}>
						{t("topSubTitle")}
					</Typography>
				</Grid>
			</Grid>
			<Grid container justify="center" className={classes.ourProfile}>
				<Grid item className={classes.titleFlexContainer}>
					<Typography variant="h3" className={classes.ourProfile}>
						{t("ourProfile")}
					</Typography>
					<Grid item className={classes.titleUnderLine} />
				</Grid>
			</Grid>
			<Grid container style={{ marginBottom: 30 }}>
				<OurProfile />
			</Grid>
			<Grid container>
				<OurApproach />
			</Grid>
			<Grid container justify="center" className={classes.ourProfile}>
				<Grid item className={classes.titleFlexContainer}>
					<Typography variant="h3" className={classes.ourProfile}>
						{t("ourValuesDrive")}
					</Typography>
					<Grid item className={classes.titleUnderLine} />
				</Grid>
			</Grid>
			<Element name="OurValues" className="element">
				<Grid container>
					<OurValues />
				</Grid>
			</Element>
		</Grid>
	);
}
