import { Button, Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "./style";
import WhatWeDo from "./components/Desktop/WhatWeDo";
import OurValuesDrive from "./components/Desktop/OurValuesDrive";
import WhatCustomerSay from "./components/Desktop/WhatCustomerSay";
import rectangle from "../../assets/img/rectangle.svg";
import WhoWeWorkWith from "./components/Desktop/WhoWeWorkWith";
import OurPeople from "./components/Desktop/OurPeople";
import Link from "next/link";
import Slider from "./components/Desktop/Slider";
import Asset from "../../assets/img/Asset.svg";

export default function Desktop() {
	const classes = useStyles();
	const { t } = useTranslation("common");

	return (
		<Grid container justify="center">
			<Grid container className={classes.imageTopContainer}></Grid>
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
				<Grid item className={classes.buttonGroupContainer1}>
					<Link href="/about">
						<a className={classes.whatWeDoLink}>
							<Button
								variant="contained"
								color="primary"
								className={classes.buttonCapitalized}
							>
								{t("AboutUs")}
							</Button>
						</a>
					</Link>
					{/* <Button
						variant="contained"
						color="secondary"
						className={`${classes.buttonCapitalized} ${classes.marginLeft10}`}
					>
						{t("Careers")}
					</Button> */}
				</Grid>
			</Grid>
			<Grid container justify="center" className={classes.whatWeDoContainer}>
				<WhatWeDo />
			</Grid>
			<Grid container justify="center" className={classes.howWePartnerContainer}>
				<img
					src={Asset}
					alt="Asset"
					style={{ width: "100%", position: "absolute", top: 0 }}
				/>
				<Slider />
			</Grid>
			<Grid container justify="center" className={classes.ourValuesDriveContainer}>
				<OurValuesDrive />
			</Grid>
			{/* <Grid container justify="center" className={classes.customerSayContainer}>
        <img src={rectangle} className={classes.reactAngleImage} />
        <WhatCustomerSay />
      </Grid> */}
			{/* <Grid container justify="center" className={classes.WhoWeWorkWithContainer}>
        <WhoWeWorkWith />
      </Grid> */}
			{/* <Grid container justify="center" className={classes.OurPeopleContainer}>
        <OurPeople />
      </Grid> */}
			{/* <Grid container className={classes.insightContainer}></Grid> */}
		</Grid>
	);
}
