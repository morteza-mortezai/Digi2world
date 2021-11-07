import { Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import useStyles from "./style";
import useTranslation from "next-translate/useTranslation";
import OurProfile from './components/Mobile/OurProfile'
import OurApproach from './components/Mobile/OurApproach'
import OurValues from './components/Mobile/OurValues'
import { MasterContext } from "../../context/MasterContext";
import * as Scroll from "react-scroll";

export default function Mobile() {
	const classes = useStyles();
    const { t } = useTranslation("about");
    let Element = Scroll.Element;
	var scroller = Scroll.scroller;
    let { aboutScrollName, setAboutScrollName } = useContext(MasterContext);

    useEffect(() => {
		scroller.scrollTo(aboutScrollName, {
			duration: 1000,
			delay: 200,
			smooth: true,
			offset: 0, 
		});
		setAboutScrollName("");
	}, []);
	return (
		<Grid container>
			<Grid container justify="center" className={classes.imageTopTitleAndTextMobile}></Grid>
			<Grid container justify="center" className={classes.ourProfile}>
				<Grid item className={classes.titleFlexContainer}>
					<Typography variant="h3" className={classes.ourProfile}>
						{t("ourProfile")}
					</Typography>
					<Grid item className={classes.titleUnderLine} />
				</Grid>
			</Grid>
			<Grid container style={{ marginBottom: 30 }}>
				<OurProfile />
			</Grid>
            <Grid container>
				<OurApproach />
			</Grid>
            <Element name="OurValues" className="element">
				<Grid container>
					<OurValues />
				</Grid>
			</Element>
		</Grid>
	);
}
