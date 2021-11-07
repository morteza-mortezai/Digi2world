import { Fade, Grid } from "@material-ui/core";
import { useContext } from "react";
import { MasterContext } from "../../../context/MasterContext";
import useStyles from "../../../styles";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function ServicesModal() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  let { servicesModal } = useContext(MasterContext);
  return (
    <Fade in={servicesModal}>
      <Grid container className={classes.servicesModalContainer}>
        <Grid item className={classes.servicesModalRectangle} />
        <Grid container className={classes.servicesModalInside}>
          <Link href="/services/webAppServices">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service1")}
              </Grid>
            </a>
          </Link>
          <Link href="/services/mobAppServices">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service2")}
              </Grid>
            </a>
          </Link>
          <Link href="/services/devopsAutomation">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service3")}
              </Grid>
            </a>
          </Link>
          <Link href="/services/platformSelection">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service4")}
              </Grid>
            </a>
          </Link>
          <Link href="/services/softwarePrototyping">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service5")}
              </Grid>
            </a>
          </Link>
          <Link href="/services/databaseDevelopment">
            <a style={{ textDecoration: "none", color: "#000", width: "100%" }}>
              <Grid container className={classes.servicesModalItem}>
                {t("service6")}
              </Grid>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Fade>
  );
}
