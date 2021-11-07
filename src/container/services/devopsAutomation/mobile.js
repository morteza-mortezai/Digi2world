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
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("devopsTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP4")}</p>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("devopsTitle2")}</h2>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("devopsService1")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("devopsService2")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("devopsService3")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("devopsService4")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("devopsService5")}</span>
        </div>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP5")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP8")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("devopsP9")}</p>
      </Grid>
    </Grid>
  );
}
