import { Hidden } from "@material-ui/core";
import Desktop from "./desktop";
import Mobile from "./mobile";
import ContextProvider from './context'
export default function Index() {
  return (
    <ContextProvider>
      <Hidden smDown>
        <Desktop />
      </Hidden>
      <Hidden mdUp>
        <Mobile />
      </Hidden>
    </ContextProvider>
  );
}
