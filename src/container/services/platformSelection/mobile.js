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
        <h2 style={{ fontWeight: "600", fontSize: 24 }}>{t("platSelectTitle1")}</h2>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP1")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP2")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP3")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP4")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP5")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP6")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP7")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP8")}</p>
        <p style={{ marginTop: 0, fontSize: 18, maxWidth: 600 }}>{t("platSelectP9")}</p>
      </Grid>
    </Grid>
  );
}
