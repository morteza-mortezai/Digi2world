import { Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import useStyles from "../../../style";

export default function WhatCustomerSayPage() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Grid container direction="column" className={classes.whatCustomerSayBox}>
      <Grid container className={classes.whatCustomerSayRow}>
        <Typography variant="h3" className={classes.whatCustomerSayTitle}>
          {t("whatCustomerSay")}
        </Typography>
        <Typography variant="body1" className={classes.whatCustomerSayDescription}>
          {t("whatCustomerSayDescription")}
        </Typography>
        <Grid item className={classes.titleUnderLine} />
      </Grid>
      <Grid container className={classes.customerSayItemContainer}>
        <Grid item md={6} className={classes.firstCustomerSayItem}>
          <Grid container className={classes.firstBoxComment}>
            <span>{t("firstCustomerSay")}</span>
            <Grid item>
              <div className={classes.commentWriter}>{t("firstCommentWriter")}</div>
              <div className={classes.writerPosition}>{t("firstWriterPosition")}</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} className={classes.secondCustomerSayItem}>
          <Grid container className={classes.secondBoxComment}>
            <span>{t("secondCustomerSay")}</span>
            <Grid item>
              <div className={classes.commentWriter}>{t("secondCommentWriter")}</div>
              <div className={classes.writerPosition}>{t("secondWriterPosition")}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
