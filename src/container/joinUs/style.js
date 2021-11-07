import { makeStyles } from "@material-ui/core/styles";
import back from '../../assets/img/joinUs.svg'

const useStyles = makeStyles((theme) => ({
	//============================================================================================================
	//Desktop Style
	//============================================================================================================
	imageTopContainer: {
		height: 450,
		backgroundColor: "#ddd",
		background: `url(${back})`,
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
		maxWidth:"90%"
	},
	homePageTopTitle: {
		fontSize: 40,
		color: "#fff",
		fontWeight: 500,
	},
	homePageTopSubTitle: {
		fontSize: 24,
		fontWeight: 600,
		color: "#fff",
		width: 500,
	},
	whatWeDoLink:{
		textDecoration:"none"
	},
	buttonCapitalized: {
		textTransform: "initial",
	},
	marginLeft10: {
		marginLeft: 10,
	},
	eightItems: {
		padding: "50px 20px",
		backgroundColor: "#fff",
	},
	joinUsItemsInside: {
		maxWidth: 1100,
	},
	itemPointsImage: {
		width: 86,
		height: 86,
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
		marginBottom: 20,
		marginTop: 20,
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	itemPointsTitle: {
		color: "#3a3a3c",
		fontSize: 23,
		fontWeight: 500,
	},
	itemPointsSubTitle: {
		color: "#3a3a3c",
		marginTop: 20,
		fontSize: 17,
		textAlign: "center",
		width: "90%",
	},
	moreAboutButton: {
		backgroundColor: "#f89696",
		textTransform: "capitalize",
		color: "#fff",
		marginTop:45,
		fontSize: 18,
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	//============================================================================================================
	//Desktop Style
	//============================================================================================================
	imageTopContainerMobile: {
		height: 450,
		backgroundColor: "#ddd",
		background: `url(${back})`,
		backgroundSize: "cover",
		userSelect:"none",
		position:"relative"
	},
	imageTopTitleAndTextMobile: {
		width:"90%",
		zIndex: 1,
		height: 450,
		position: "absolute",
		top: 40,
		left:20
	},
	topTitle:{
		color:"#fff",
		fontSize:22,
		marginBottom:20
	},
	topSubTitle:{
		color:"#fff",
		fontSize:18,
		marginBottom:20
	},
	moreAboutButtonMobile: {
		backgroundColor: theme.palette.primary.main,
		textTransform: "capitalize",
		color: "#fff",
		marginTop:45,
		fontSize: 14,
		
	},
}));
export default useStyles;
