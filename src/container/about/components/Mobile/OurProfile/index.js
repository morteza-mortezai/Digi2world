import { Grid } from "@material-ui/core";
import useStyles from "../../../style";
import useTranslation from "next-translate/useTranslation";

export default function OurProfile() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <Grid container justify="center" className={classes.ourProfileTextContainer}>
      <Grid container className={classes.ourProfileTextBox}>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.ourProfileBox}>
          <Grid item className={classes.ourProfileBoxItem}>
            120+ consulting engineers, architects and BAs.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
