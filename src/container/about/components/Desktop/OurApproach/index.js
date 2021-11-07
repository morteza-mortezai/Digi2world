import { Grid, Typography } from "@material-ui/core";
import useStyles from "../../../style";
import useTranslation from "next-translate/useTranslation";
import OurApproachData from "./OurAproachData";

export default function OurApproach() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <Grid container justify="center" className={classes.OurApproachContainer}>
      <Grid container className={classes.OurApproachBox}>
        <Grid item className={classes.titleFlexContainer2}>
          <Typography variant="h3" className={classes.ourApproach}>
            {t("ourApproach")}
          </Typography>
          <Grid item className={classes.titleUnderLine} />
        </Grid>
        <Grid container>
          <OurApproachData />
        </Grid>
      </Grid>
    </Grid>
  );
}
