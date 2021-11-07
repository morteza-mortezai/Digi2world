import React from 'react'
import useStyles from '../../../style';
import useTranslation from "next-translate/useTranslation";
import { Grid, Typography } from '@material-ui/core';
import ourApproach from '../../../../../assets/img/ourApproach.svg'
export default function OurApproachData() {
      const classes = useStyles();
      const { t } = useTranslation("about");
    return (
      <>
      <Grid container item md={6} direction="column" style={{paddingRight:30}}>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText1")}
        </Typography>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText2")}
        </Typography>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText3")}
        </Typography>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText4")}
        </Typography>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText5")}
        </Typography>
        <Typography variant="body2" className={classes.ourApproachText}>
          {t("OurApproachText6")}
        </Typography>
      </Grid>
      <Grid item container md={6}>
        <img src={ourApproach} alt="ourApproach" style={{width:"100%"}}/>
      </Grid>
      </>
    );
}
