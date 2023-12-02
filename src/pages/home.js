import React from "react";
import Box from "@mui/material/Box";
import HeroBanner from "../components/heroBanner";
import SearchExercises from "../components/searchExercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
    </Box>
  );
};

export default Home;
