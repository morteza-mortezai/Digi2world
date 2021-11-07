import { Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "../../../style";

export default function WhoWeWorkWithPage() {
    const classes = useStyles();
    const { t } = useTranslation("common");
  return (
    <Grid container direction="column" className={classes.WhoWeWorkWithBox}>
      <Grid container className={classes.WhoWeWorkWithRow}>
        <Typography variant="h3" className={classes.WhoWeWorkWithTitle}>
          {t("WhoWeWorkWith")}
        </Typography>
        <Typography variant="body1" className={classes.WhoWeWorkWithDescription}>
          {t("WhoWeWorkWithDescription")}
        </Typography>
        <Grid item className={classes.titleUnderLine} />
      </Grid>
    </Grid>
  );
}
