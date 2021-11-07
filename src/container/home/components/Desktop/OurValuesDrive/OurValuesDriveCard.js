import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../style";

export default function OurValuesDriveCard({ title, subTitle,icon }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" className={classes.cardContainer}>
      <Grid item className={classes.cardIconContainer}>
        <img src={icon} style={{width:70,zIndex:3}}/>
      </Grid>
      <Grid item className={classes.cardTitLeContainer}>
        <Typography variant="h6" className={classes.cardTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.cardDeskContainer}>
        <Typography variant="body2" className={classes.cardSubTitle}>{subTitle}</Typography>
      </Grid>
    </Grid>
  );
}
