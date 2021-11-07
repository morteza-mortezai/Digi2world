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
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("softPrototypingTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP4")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP5")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("softPrototypingP8")}</p>
      </Grid>
    </Grid>
  );
}
