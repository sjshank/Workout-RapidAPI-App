import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo.png";

const NavBar = () => {

  return (
    <Stack
      direction="row"
      justifyContent="none"
      sx={{ mt: "30px", gap: { sm: "120px", xs: "40px" } }}
    >
      <Link to="/">
        <img src={logo} alt="app logo" sx={{ margin: "0 20px" }} />
      </Link>
      <Stack
        direction="row"
        spacing={2}
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#FF9033",
            borderBottom: "3px solid #FF9033",
          }}
        >
          Home
        </Link>
        <a
          href="#workouts"
          style={{ textDecoration: "none", color: "#FF9033" }}
        >
          Workouts
        </a>
      </Stack>
    </Stack>
  );
};

export default React.memo(NavBar);
