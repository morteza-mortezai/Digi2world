import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import palette from "./palette";
let theme = createMuiTheme({
  palette: palette,
  direction: "ltr",
  spacing: 2,
  typography: {
    h1: {
      fontSize: 35,
    },

    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 28,
    },
    h4: {
      fontSize:24
    },
    h5: {
      fontSize: 23
    },
    h6: {
      fontSize: 20
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16
    },
    caption: {
      fontSize: 14
    },
    allVariants: {
      fontFamily: "Titillium Web",
    },
  },
});
export default responsiveFontSizes(theme);
