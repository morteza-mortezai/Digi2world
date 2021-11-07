import React from "react";
import useStyles from "../../../style";
import useTranslation from "next-translate/useTranslation";
import { Grid, Typography } from "@material-ui/core";

export function OurValuesCardSubTitle1Component() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <Grid container style={{marginBottom:30}}>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle1p1")}
      </Typography>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle1p2")}
      </Typography>
    </Grid>
  );
}

export function OurValuesCardSubTitle2Component() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle2p1")}
      </Typography>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle2p2")}
      </Typography>
    </>
  );
}

export function OurValuesCardSubTitle3Component() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle3p1")}
      </Typography>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle3p2")}
      </Typography>
    </>
  );
}

export function OurValuesCardSubTitle4Component() {
  const classes = useStyles();
  const { t } = useTranslation("about");

  return (
    <>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle4p1")}
      </Typography>
      <Typography variant="body2" className={classes.cardSubTitleMobile}>
        {t("OurValuesCardSubTitle4p2")}
      </Typography>
    </>
  );
}
