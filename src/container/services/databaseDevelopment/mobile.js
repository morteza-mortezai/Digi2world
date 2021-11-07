import { Grid } from "@material-ui/core";
import useStyles from "./style";
import useTranslation from "next-translate/useTranslation";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Desktop() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Grid container direction="column" alignItems="center">
      <Grid container className={classes.topImage}></Grid>
      <Grid container direction="column" className={classes.textBoxMobile}>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("dataDevelopmentTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP4")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP5")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP8")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("dataDevelopmentP9")}</p>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("dataDevelopmentTitle2")}</h2>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("dataDevelopmentService1")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("dataDevelopmentService2")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("dataDevelopmentService3")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("dataDevelopmentService4")}</span>
        </div>
      </Grid>
    </Grid>
  );
}
