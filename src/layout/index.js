import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/navBar";
import AppRoute from "../route";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <AppRoute />
      <Footer />
    </Box>
  );
};

export default Layout;
