import { makeStyles } from "@material-ui/core/styles";
 import aboutPageCover from '../../assets/img/joinUs.svg'
const useStyles = makeStyles((theme) => ({
	//============================================================================================================
	//Desktop Style
	//============================================================================================================
	imageTopContainer: {
		height: 400,
		 //width:"100%",
		backgroundColor: "#ddd",
		 background: `url(${aboutPageCover})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	},
	imageTopTitleAndText: {
		maxWidth: 1100,
		zIndex: 1,
		height: 450,
		position: "absolute",
		top: 0,
	},
	textContainer1: {
		marginBottom: 20,
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
	ourProfile: {
		fontWeight: 400,
		padding: 20,
	},
	titleUnderLine: {
		width: 45,
		height: 2,
		backgroundColor: theme.palette.primary.main,
		marginBottom: 40,
	},
	titleFlexContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	titleFlexContainer2: {
		display: "flex",
		flexDirection: "column",
	},
	ourProfileTextContainer: {},
	ourProfileTextBox: {
		maxWidth: 1120,
	},
	ourProfileBox: {
		padding: 10,
	},
	ourProfileBoxItem: {
		border: "1px solid #f0f1f1",
		padding: "30px 15px",
		backgroundColor: "#fafafa",
		borderRadius: 6,
		textAlign: "center",
		fontSize: 20,
	},
	ourApproachBoxItem: {
		border: "1px solid #f0f1f1",
		padding: "30px 15px",
		backgroundColor: "#fafafa",
		borderRadius: 6,
		textAlign: "center",
		fontSize: 20,
	},
	OurApproachContainer: {
		backgroundColor: "rgb(58,58,60)",
	},
	OurApproachBox: {
		maxWidth: 1100,
		padding: "120px 0",
	},
	ourApproach: {
		fontWeight: 400,
		paddingBottom: 20,
		color: "#fff",
	},
	//Our Values Drive Card
	OurValuesDriveCardsContainer: {
		marginTop: 20,
		maxWidth: 1100,
    marginBottom:60,
    userSelect:"none"
	},
	cardIconContainer: {
		width: 110,
		height: 110,
		borderRadius: "100%",
		backgroundColor: theme.palette.primary.main,
		marginBottom: 20,
	},
	cardTitle: {
		fontWeight: 400,
		marginBottom: 20,
	},
	cardDeskContainer: {
		padding: "0 10px",
	},
	cardSubTitle: {
		fontWeight: 300,
		fontSize: 17,
		textAlign: "center",
		marginBottom: 10,
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
	ourApproachText: {
		color: "#fff",
		maxWidth: 600,
		marginBottom: 20,
	},
	//============================================================================================================
	//mobile Style
	//============================================================================================================
	imageTopTitleAndTextMobile: {
		backgroundColor: "#f0f",
		height: 300,
	},
	ourProfileTextContainer: {
		padding: "0 30px",
	},
	OurApproachContainerMobile: {
		backgroundColor: "rgb(58,58,60)",
		padding: "0 30px",
	},
	OurValuesDriveBoxMobile: {
		padding: "0 30px",
	},
  cardSubTitleMobile: {
    fontWeight: 300,
    fontSize: 17,
    textAlign: "left",
    marginBottom: 10,
  },
  cardSubTitleMobile: {
		fontWeight: 300,
		fontSize: 17,
		textAlign: "left",
		marginBottom: 10,
	},
  cardDeskContainerMobile: {
		padding: "0",
    marginBottom:50
	},
}));
export default useStyles;
