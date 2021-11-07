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
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("webAppTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP4")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP5")}</p>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("webAppTitle2")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP8")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("webAppP9")}</p>
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("webAppTitle3")}</h2>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("webAppService1")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("webAppService2")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("webAppService3")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("webAppService4")}</span>
        </div>
        <div className={classes.servicesIncludeContainer}>
          <ArrowForwardIosIcon className={classes.arrowRight} />
          <span>{t("webAppService5")}</span>
        </div>
      </Grid>
    </Grid>
  );
}
