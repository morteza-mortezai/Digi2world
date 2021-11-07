import { Button, Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "./style";
import Link from "next/link";

export default function Desktop() {
	const classes = useStyles();
	const { t } = useTranslation("joinUs");

	return (
		<Grid container direction="column" justify="center" alignItems="center">
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
					<Button
						variant="contained"
						color="secondary"
						className={`${classes.buttonCapitalized} ${classes.marginLeft10}`}
					>
						{t("Careers")}
					</Button>
				</Grid>
			</Grid>
			<Grid container justify="center" className={classes.eightItems}>
				<Grid container className={classes.joinUsItemsInside}>
					<Grid
						item
						container
						md={6}
						direction="column"
						className={classes.itemPointsContainer}
					>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle1")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription1")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle2")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription2")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle3")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription3")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle4")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription4")}</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						container
						md={6}
						direction="column"
						className={classes.itemPointsContainer}
					>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle5")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription5")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle6")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription6")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle7")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription7")}</Grid>
						</Grid>
						<Grid container direction="column">
							<Grid item className={classes.itemPointsTitle}>
								{t("itemPointsTitle8")}
							</Grid>
							<Grid item className={classes.itemPointsDescription}>{t("itemPointsDescription8")}</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
