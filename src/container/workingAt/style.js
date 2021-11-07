import { makeStyles } from "@material-ui/core/styles";
import homePageCover from '../../assets/img/hrPage.svg'

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
		top: 70,
	},
	textContainer1: {
		marginBottom: 30,
	},
	homePageTopTitle: {
		fontSize: 40,
		userSelect:"none",
		color: "#fff",
		fontWeight: 500,
	},
	homePageTopSubTitle: {
		fontSize: 24,
		userSelect:"none",
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
	eightItems: {
		userSelect:"none",
		padding: "50px 20px",
		backgroundColor: "#fff",
	},
	joinUsItemsInside: {
		userSelect:"none",
		maxWidth: 1100,
	},
	itemPointsTitle: {
		color: "#3a3a3c",
		fontSize: 23,
		fontWeight: 500,
	},
	itemPointsDescription: {
		color: "#3a3a3c",
		fontSize: 18,
		width:"90%",
		margin:"20px 0"
	},
}));
export default useStyles;
