import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../style";

export default function OurValuesDriveCard({ title, subTitle }) {
  const classes = useStyles();
  return (
    <Grid container direction="column"  className={classes.cardContainer}>
      <Grid item className={classes.cardIconContainer}></Grid>
      <Grid item className={classes.cardTitLeContainer}>
        <Typography variant="h6" className={classes.cardTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.cardDeskContainerMobile}>
        <Typography variant="body2" className={classes.cardSubTitle}>
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
}
