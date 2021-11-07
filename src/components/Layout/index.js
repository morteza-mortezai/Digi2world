import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function MasterLayout({ children }) {
  return (
    <Grid container direction="column" justify="space-between" style={{ minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Grid>
  );
}
