import { Button, Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "../../../style";
import OurValuesDriveCard from "./OurValuesDriveCard";
import {
	OurValuesCardSubTitle1Component,
	OurValuesCardSubTitle2Component,
	OurValuesCardSubTitle3Component,
	OurValuesCardSubTitle4Component,
} from "./OurValuesData";

export default function OurValuesDrivePage() {
	const classes = useStyles();
	const { t } = useTranslation("common");

	return (
		<Grid container justify="center" className={classes.OurValuesDriveBoxMobile}>
			<Grid
				container
				justify="space-between"
				className={classes.OurValuesDriveCardsContainer}
			>
				<Grid item md={3}>
					<OurValuesDriveCard
						title={t("OurValuesCardTitle2")}
						subTitle={<OurValuesCardSubTitle2Component />}
					/>
				</Grid>
				<Grid item md={3}>
					<OurValuesDriveCard
						title={t("OurValuesCardTitle1")}
						subTitle={<OurValuesCardSubTitle1Component />}
					/>
				</Grid>
				<Grid item md={3}>
					<OurValuesDriveCard
						title={t("OurValuesCardTitle4")}
						subTitle={<OurValuesCardSubTitle4Component />}
					/>
				</Grid>
				<Grid item md={3}>
					<OurValuesDriveCard
						title={t("OurValuesCardTitle3")}
						subTitle={<OurValuesCardSubTitle3Component />}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
