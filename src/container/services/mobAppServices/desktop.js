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
      <Grid container direction="column" className={classes.textBox}>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("mobAppTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP4")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP5")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP8")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("mobAppP9")}</p>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("mobAppTitle2")}</h2>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("mobAppService1")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("mobAppService2")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("mobAppService3")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("mobAppService4")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("mobAppService5")}</span>
        </div>
      </Grid>
    </Grid>
  );
}
