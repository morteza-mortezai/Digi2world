import { Button, Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "./style";
import Link from "next/link";
import consulting from "../../assets/img/consulting.svg";
import discrimination from "../../assets/img/discrimination.svg";
import environment from "../../assets/img/environment.svg";
import flexibility from "../../assets/img/flexibility.svg";
import KnowledgeSharing from "../../assets/img/Knowledge sharing.svg";
import personalLife from "../../assets/img/personal life.svg";
import pressure from "../../assets/img/pressure.svg";
import rewards from "../../assets/img/rewards.svg";

export default function Desktop() {
	const classes = useStyles();
	const { t } = useTranslation("joinUs");

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<Grid container className={classes.imageTopContainerMobile}>
				<Grid
					container
					direction="column"
					justify="center"
					className={classes.imageTopTitleAndTextMobile}
				>
					<Grid container className={classes.topTitle}>
						{t("topTitle")}
					</Grid>
					<Grid container className={classes.topSubTitle}>
						{t("topSubTitle")}
					</Grid>
					<Grid item className={classes.buttonGroupContainer1}>
						<Link href="/contactus">
							<a className={classes.whatWeDoLink}>
								<Button
									variant="contained"
									color="primary"
									className={classes.buttonCapitalized}
								>
									{t("topButton")}
								</Button>
							</a>
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Grid container justify="center" className={classes.eightItems}>
				<Grid container className={classes.joinUsItemsInside}>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img
								src={KnowledgeSharing}
								alt="KnowledgeSharing"
								style={{ width: "80%" }}
							/>
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle1")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle1")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={flexibility} alt="flexibility" style={{ width: "80%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle2")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle2")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img
								src={discrimination}
								alt="discrimination"
								style={{ width: "80%" }}
							/>
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle3")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle3")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={consulting} alt="consulting" style={{ width: "80%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle4")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle4")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={environment} alt="environment" style={{ width: "80%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle5")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle5")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={rewards} alt="rewards" style={{ width: "70%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle6")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle6")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={personalLife} alt="personalLife" style={{ width: "80%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle7")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle7")}
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={3}
						direction="column"
						alignItems="center"
						className={classes.itemPointsContainer}
					>
						<Grid item className={classes.itemPointsImage}>
							<img src={pressure} alt="pressure" style={{ width: "80%" }} />
						</Grid>
						<Grid item className={classes.itemPointsTitle}>
							{t("itemPointsTitle8")}
						</Grid>
						<Grid item className={classes.itemPointsSubTitle}>
							{t("itemPointsSubTitle8")}
						</Grid>
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Link href="/working-at-digi2world">
						<a style={{ textDecoration: "none" }}>
							<Button variant="contained" className={classes.moreAboutButtonMobile}>
								{t("moreAboutWorking")}
							</Button>
						</a>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
}
