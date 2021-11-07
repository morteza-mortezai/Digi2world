import { Button, Grid, Typography } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import { MasterContext } from "../../../../../context/MasterContext";
import useStyles from "../../../style";
import OurValuesDriveCard from "./OurValuesDriveCard";
import Link from "next/link";
import icon1 from '../../../../../assets/img/2.svg'
import icon2 from '../../../../../assets/img/4.svg'
import icon3 from '../../../../../assets/img/3.svg'
import icon4 from '../../../../../assets/img/1.svg'

export default function OurValuesDrivePage() {
  const classes = useStyles();
  const { t } = useTranslation("common");
  let { setAboutScrollName } = useContext(MasterContext);
  const handleScrollAbout = () => {
    setAboutScrollName("OurValues");
  };
  return (
    <Grid container className={classes.OurValuesDriveBox}>
      <Grid container className={classes.ourValuesDriveRow}>
        <Typography variant="h3" className={classes.ourValuesDriveTitle}>
          {t("OurValuesDrive")}
        </Typography>
        <Typography variant="body1" className={classes.ourValuesDriveDescription}>
          {t("OurValuesDriveDescription")}
        </Typography>
        <Grid item className={classes.titleUnderLine2} />
      </Grid>
      <Grid container justify="space-between" className={classes.OurValuesDriveCardsContainer}>
        <Grid item md={3}>
          <OurValuesDriveCard title={t("OurValuesCardTitle2")} subTitle={t("OurValuesCardSubTitle2")} icon={icon1}/>
        </Grid>
        <Grid item md={3}>
          <OurValuesDriveCard title={t("OurValuesCardTitle1")} subTitle={t("OurValuesCardSubTitle1")} icon={icon2}/>
        </Grid>
        <Grid item md={3}>
          <OurValuesDriveCard title={t("OurValuesCardTitle4")} subTitle={t("OurValuesCardSubTitle4")} icon={icon3}/>
        </Grid>
        <Grid item md={3}>
          <OurValuesDriveCard title={t("OurValuesCardTitle3")} subTitle={t("OurValuesCardSubTitle3")} icon={icon4}/>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.showMoreButtonContainer}>
        <Link href="/about">
          <a className={classes.whatWeDoLink}>
            <Button
              variant="contained"
              className={`${classes.buttonCapitalized} ${classes.learnMore}`}
              onClick={handleScrollAbout}
            >
              {t("learnMore")}
            </Button>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
}
