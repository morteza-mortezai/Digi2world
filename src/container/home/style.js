import { makeStyles } from "@material-ui/core/styles";
import homePageCover from "../../assets/img/platformSelection.svg";

const useStyles = makeStyles((theme) => ({
	//============================================================================================================
	//Desktop Style
	//============================================================================================================
	imageTopContainer: {
		height: 450,
		backgroundColor: "#ddd",
		background: `url(${homePageCover})`,
		backgroundSize: "cover",
	},
	imageTopTitleAndText: {
		maxWidth: 1100,
		zIndex: 1,
		height: 450,
		position: "absolute",
	},
	textContainer1: {
		marginBottom: 30,
	},
	homePageTopTitle: {
		fontSize: 60,
		color: "#fff",
		fontWeight: 500,
	},
	homePageTopSubTitle: {
		fontSize: 24,
		fontWeight: 600,
		color: "#fff",
		width: 500,
	},
	buttonCapitalized: {
		textTransform: "initial",
	},
	marginLeft10: {
		marginLeft: 10,
	},
	whatWeDoInsideRow: {
		position: "relative",
	},
	whatWeDoInside: {
		padding: "40px 0",
		maxWidth: 1130,
		position: "relative",
	},
	whatWeDoInsideMobile: {
		padding: "40px 30px",
		maxWidth: 1130,
	},
	whatWeDoTitle: {
		fontWeight: 400,
		width: 283,
		paddingLeft: 15,
	},
	whatWeDoTitleMobile: {
		fontWeight: 400,
		width: 283,
		paddingLeft: 15,
		marginBottom: 45,
	},
	whatWeDoDescription: {
		width: 700,
	},
	whatWeDoDescriptionMobile: {
		width: "95%",
		paddingLeft: 15,
	},
	titleUnderLine: {
		width: 50,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		position: "absolute",
		left: 15,
		top: 60,
	},
	titleUnderLineMobile: {
		width: 50,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		position: "absolute",
		left: 15,
		top: 45,
	},
	whatWeDoItemContainer: {
		padding: "50px 0",
	},
	whatWeDoItem: {
		padding: 15,
		height: "fit-content",
	},
	whatWeDoTextContainer: {
		display: "flex",
		alignItems: "center",
		position: "relative",
		backgroundColor: "#fafafa",
		border: "1px solid #f0f1f1",
		borderRadius: 5,
		cursor: "pointer",
	},
	whatWeDoLink: {
		textDecoration: "none",
		color: "rgb(49,50,55)",
	},
	whatWeDoText: {
		padding: "15px 20px",
		fontSize: 19,
	},
	verticalLine: {
		width: 2,
		height: 30,
		backgroundColor: theme.palette.primary.main,
		position: "relative",
		left: 0,
		top: 0,
		transition: "height 0.3s linear",
	},
	howWePartnerContainer: {
		backgroundColor: "rgb(58,58,60)",
		padding: "250px 20px 70px 20px",
		minHeight: 500,
		position: "relative",
	},
	howWeSliderMobileContainer: {
		backgroundColor: "rgb(58,58,60)",
		padding: "40px 20px",
		minHeight: 300,
	},
	ourValuesDriveContainer: {
		backgroundColor: "#f1f1f1",
	},
	OurValuesDriveBox: {
		maxWidth: 1100,
		padding: "40px 0",
	},
	OurValuesDriveBoxMobile: {
		maxWidth: 1100,
		padding: "40px 30px",
	},
	ourValuesDriveRow: {
		position: "relative",
	},
	ourValuesDriveTitle: {
		fontWeight: 400,
		width: 440,
		paddingLeft: 15,
	},
	ourValuesDriveTitleMobile: {
		fontWeight: 400,
		paddingLeft: 15,
		marginBottom: 40,
	},
	ourValuesDriveDescription: {
		paddingLeft: 15,
	},
	titleUnderLine2: {
		width: 50,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		position: "absolute",
		left: 15,
		top: 100,
	},
	titleUnderLine2Mobile: {
		width: 50,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		position: "absolute",
		left: 15,
		top: 75,
	},
	customerSayContainer: {
		position: "relative",
		backgroundColor: "rgb(58,58,60)",
		minHeight: 500,
	},
	reactAngleImage: {
		width: "100%",
		position: "absolute",
		top: 0,
	},
	//Our Values Drive Card
	OurValuesDriveCardsContainer: {
		marginTop: 50,
	},
	cardIconContainer: {
		width: 110,
		height: 110,
		borderRadius: "100%",
		backgroundColor: theme.palette.primary.main,
		marginBottom: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	cardTitle: {
		fontWeight: 400,
		marginBottom: 20,
	},
	cardDeskContainer: {
		padding: "0 10px",
	},
	cardDeskContainerMobile: {
		padding: "0 10px",
		marginBottom: 30,
	},
	cardSubTitle: {
		fontWeight: 300,
		fontSize: 17,
		textAlign: "center",
	},
	showMoreButtonContainer: {
		marginTop: 60,
	},
	learnMore: {
		backgroundColor: "#fff",
		color: "#000 !important",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "#fff !important",
		},
	},
	//what customer say
	whatCustomerSayBox: {
		maxWidth: 1100,
		paddingBottom: 40,
	},
	whatCustomerSayRow: {
		position: "relative",
		marginTop: 200,
	},
	whatCustomerSayTitle: {
		fontWeight: 400,
		width: 440,
		paddingLeft: 15,
		color: "#fff",
	},
	whatCustomerSayDescription: {
		width: 600,
		color: "#ffffffe0",
	},
	titleUnderLine2: {
		width: 50,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		position: "absolute",
		left: 15,
		top: 100,
	},
	customerSayItemContainer: {
		marginTop: 50,
	},
	firstCustomerSayItem: {
		paddingRight: 10,
	},
	firstBoxComment: {
		padding: 15,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "#f0f1f1",
		borderRadius: 6,
		minHeight: 250,
	},
	secondCustomerSayItem: {
		paddingLeft: 10,
	},
	secondBoxComment: {
		padding: 15,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		backgroundColor: "#f0f1f1",
		borderRadius: 6,
		minHeight: 250,
	},
	commentWriter: {
		fontWeight: "bold",
	},
	WhoWeWorkWithBox: {
		maxWidth: 1100,
		minHeight: 500,
	},
	WhoWeWorkWithRow: {
		position: "relative",
		marginTop: 40,
	},
	WhoWeWorkWithTitle: {
		fontWeight: 400,
		width: 340,
		paddingLeft: 15,
	},
	WhoWeWorkWithDescription: {
		width: 600,
	},
	OurPeopleContainer: {
		backgroundColor: "#f0f1f1",
	},
	ourPeopleBox: {
		maxWidth: 1100,
		minHeight: 500,
	},
	ourPeopleRow: {
		position: "relative",
		marginTop: 40,
	},
	ourPeopleTitle: {
		fontWeight: 400,
		width: 340,
		paddingLeft: 15,
	},
	ourPeopleDescription: {
		width: 700,
	},
	insightContainer: {
		backgroundColor: "rgb(58,58,60)",
		minHeight: 400,
	},
	//============================================================================================================
	//mobile Style
	//============================================================================================================
	imageTopTitleAndTextMobile: {
		backgroundColor: "#f0f",
		height: 300,
	},
}));
export default useStyles;
