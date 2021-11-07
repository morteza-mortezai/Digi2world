import { Grid } from "@material-ui/core";
import useStyles from "../../../style";
import useTranslation from "next-translate/useTranslation";

export default function OurProfile() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <Grid container justify="center" className={classes.ourProfileTextContainer}>
      <Grid container className={classes.ourProfileTextBox}>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile1")}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile2")}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile3")}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile4")}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile5")}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            {t("ourProfile6")}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
