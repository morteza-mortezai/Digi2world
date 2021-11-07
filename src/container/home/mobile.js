import { Grid } from "@material-ui/core";
import useStyles from "./style";
import WhatWeDo from "./components/Mobile/WhatWeDo";
import Slider from "./components/Mobile/Slider";
import OurValuesDrive from "./components/Mobile/OurValuesDrive";

export default function Mobile() {
	const classes = useStyles();
	return (
		<Grid container direction="column">
			<Grid container justify="center" className={classes.imageTopTitleAndTextMobile}></Grid>
			<Grid container justify="center" className={classes.whatWeDoContainer}>
				<WhatWeDo />
			</Grid>
			<Grid container justify="center" className={classes.howWeSliderMobileContainer}>
				<Slider />
			</Grid>
			<Grid container justify="center" className={classes.ourValuesDriveContainer}>
				<OurValuesDrive />
			</Grid>
			<Grid container className={classes.insightContainer}></Grid>
		</Grid>
	);
}
