import { Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "../../../style";

export default function OurPeoplePAge() {
  const classes = useStyles();
  const { t } = useTranslation("common");
  return (
    <Grid container direction="column" className={classes.ourPeopleBox}>
      <Grid container className={classes.ourPeopleRow}>
        <Typography variant="h3" className={classes.ourPeopleTitle}>
          {t("ourPeople")}
        </Typography>
        <Typography variant="body1" className={classes.ourPeopleDescription}>
          {t("ourPeopleDescription")}
        </Typography>
        <Grid item className={classes.titleUnderLine} />
      </Grid>
    </Grid>
  );
}
