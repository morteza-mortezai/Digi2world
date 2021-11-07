import { Grid, Typography } from "@material-ui/core";
import useStyles from "../../../style";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Link from "next/link";

export default function WhatWeDoPage() {
	const classes = useStyles();
	const { t } = useTranslation("common");
	const [lineHeight, setLineHeight] = useState(false);
	return (
		<Grid container className={classes.whatWeDoInside}>
			<Grid container className={classes.whatWeDoInsideRow}>
				<Typography variant="h3" className={classes.whatWeDoTitle}>
					{t("whatWeDo")}
				</Typography>
				<Typography variant="body1" className={classes.whatWeDoDescription}>
					{t("whatWeDoDescription")}
				</Typography>
				<Grid item className={classes.titleUnderLine} />
			</Grid>
			<Grid container className={classes.whatWeDoItemContainer}>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/webAppServices">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(1)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 1 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service1")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/mobAppServices">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(2)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 2 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service2")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/devopsAutomation">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(3)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 3 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service3")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/platformSelection">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(4)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 4 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service4")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/softwarePrototyping">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(5)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 5 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service5")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
				<Grid item md={4} xs={12} className={classes.whatWeDoItem}>
					<Link href="services/databaseDevelopment">
						<a className={classes.whatWeDoLink}>
							<Grid
								item
								className={classes.whatWeDoTextContainer}
								onMouseEnter={() => setLineHeight(6)}
								onMouseLeave={() => setLineHeight(0)}
							>
								<Grid
									item
									className={classes.verticalLine}
									style={{ height: lineHeight === 6 ? 60 : 30 }}
								/>
								<Typography variant="h6" className={classes.whatWeDoText}>
									{t("service6")}
								</Typography>
							</Grid>
						</a>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
}
