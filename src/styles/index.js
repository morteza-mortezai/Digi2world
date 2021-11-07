import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // -----------------------------------------------------------------------------------------
  //                                      Header Style
  // -----------------------------------------------------------------------------------------
  colorFullRect: {
    height: 5,
    backgroundColor: theme.palette.primary.main,
  },
  headerBox: {
    maxWidth: 1100,
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    listStyle: "none",
    "& > li": {
      marginLeft: 20,
    },
    "& > li > p": {
      fontSize: 18,
    },
    marginTop:24
  },
  menuContainerMobile:{
    display: "flex",
    flexDirection:"column",
    flexWrap: "nowrap",
    listStyle: "none",
    backgroundColor:"#fff",
    width:"100%",
    overflow:"hidden",
    marginBottom:0,
    padding:"0 15px",
    userSelect:"none"
  },
  menuItem: {
    fontWeight: 400,
    userSelect: "none",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: "normal",
    transition: "color 0.2s linear",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuItemMobile:{
    fontSize:18,
    padding:"10px 0",
    borderBottom:"1px solid #d1d1d1"
  },
  menuItemLink: {
    fontSize: 18,
    textDecoration: "none",
    fontWeight: 400,
    color: "#313237",
  },
  //services modal
  servicesModalContainer: {
    position: "absolute",
    width: 260,
    paddingTop: 15,
  },
  servicesModalRectangle: {
    width: 30,
    height: 30,
    position: "absolute",
    backgroundColor: "#d9d9d9",
    transform: "rotate(45deg)",
    top: 10,
    left: 15,
    zIndex: 3,
  },
  servicesModalInside: {
    top: 55,
    zIndex: 3,
    backgroundColor: "#d9d9d9",
    borderRadius: 3,
  },
  servicesCollapseInside: {
    top: 55,
    zIndex: 3,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  servicesModalItem: {
    padding: "10px 15px",
    borderBottom: "1px solid rgb(211,211,211)",
    cursor: "pointer",
    transition: "color 0.3s linear",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  servicesModalItemMobileItem: {
    padding: "10px 15px",
    cursor: "pointer",
    transition: "color 0.3s linear",
  },
  // -----------------------------------------------------------------------------------------
  //                                      Footer Style
  // -----------------------------------------------------------------------------------------
  footerContainer: {
    backgroundColor: "#fff",
  },
  footerBox: {
    maxWidth: 1100,
    padding: "40px 0 20px 0",
    userSelect:"none"
  },
  footerBoxMobile: {
    padding: "40px 10px",
    backgroundColor: "#fff",
    userSelect:"none"
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 15,
  },
  footerUnderLogo: {
    marginTop: 50,
  },
  footerSectionTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  footerSectionTitleMobile: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:25
  },
  footerMenuItem: {
    marginTop: 20,
  },
  footerMenuCity: {
    fontWeight: "bold",
    marginTop: 30,
  },
  contactUSIcon: {
    color: "#fff",
    fontSize: 40,
    width: 40,
    height: 40,
    backgroundColor: theme.palette.primary.main,
    padding: "7px !important",
    borderRadius: "100%",
    marginRight: 14,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#af5819",
    },
  },
  contactUSIconLinkedin: {
    color: "#fff",
    width: 40,
    height: 40,
    fontSize: 24,
    fontFamily: "Titillium Web",
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    marginRight: 14,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#af5819",
    },
  },
}));
export default useStyles;
