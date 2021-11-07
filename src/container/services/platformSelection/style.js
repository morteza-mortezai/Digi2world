import { makeStyles } from "@material-ui/core/styles";
import platformSelection from "../../../assets/img/platformSelection.svg";

const useStyles = makeStyles((theme) => ({
  //============================================================================================================
  //Desktop Style
  //============================================================================================================
  topImage: {
    height: 450,
    backgroundColor: "#eee",
    background: `url(${platformSelection})`,
    backgroundSize: "cover",
  },
  textBox: {
    maxWidth: 1100,
  },
  textBoxMobile: {
    maxWidth: 1100,
    padding:"0 15px"
  },
  arrowRight: {
    fontSize: 20,
    marginRight: 20,
    color: theme.palette.primary.main,
  },
  servicesIncludeContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 18,
  },
}));
export default useStyles;
