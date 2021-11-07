import { Grid } from "@material-ui/core";
import useStyles from "../../../styles";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function ServicesCollapse({ setServicesCollapse }) {
	const classes = useStyles();
	const { t } = useTranslation("common");
	return (
		<Grid container>
			<Grid container className={classes.servicesCollapseInside}>
				<Link href="/services/webAppServices">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service1")}
						</Grid>
					</a>
				</Link>
				<Link href="/services/mobAppServices">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service2")}
						</Grid>
					</a>
				</Link>
				<Link href="/services/devopsAutomation">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service3")}
						</Grid>
					</a>
				</Link>
				<Link href="/services/platformSelection">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service4")}
						</Grid>
					</a>
				</Link>
				<Link href="/services/softwarePrototyping">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service5")}
						</Grid>
					</a>
				</Link>
				<Link href="/services/databaseDevelopment">
					<a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
						<Grid
							container
							className={classes.servicesModalItemMobileItem}
							onClick={() => setServicesCollapse(false)}
						>
							{t("service6")}
						</Grid>
					</a>
				</Link>
			</Grid>
		</Grid>
	);
}
