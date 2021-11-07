import { makeStyles } from "@material-ui/core/styles";
import devops from "../../../assets/img/devops.svg";

const useStyles = makeStyles((theme) => ({
  //============================================================================================================
  //Desktop Style
  //============================================================================================================
  topImage: {
    height: 450,
    backgroundColor: "#eee",
    background: `url(${devops})`,
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
    marginBottom:18
  },
}));
export default useStyles;
