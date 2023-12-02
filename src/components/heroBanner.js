import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Hero from "../assets/images/hero.jpg";

const SearchExercisesButton = styled(Button)(({ theme }) => ({
  color: "#5D2C03",
  backgroundColor: "#FF9033",
  fontSize: "18px",
  fontWeight: "500",
  margin: "20px 0",
  width: "250px",
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: "#5D2C03",
    color: "#FF9033",
  },
}));

const HeroBanner = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box sx={{ position: "relative", p: "20px", mt: "180px", ml: "70px" }}>
        <Stack direction="column">
          <Typography variant="h5" color="#FF9033" fontWeight="600">
            Fitness League
          </Typography>
          <Typography variant="h3" color="#5D2C03" fontWeight="bold">
            Eat, Fit <br /> And Repeat
          </Typography>
          <Typography variant="subtitle1" color="#5D2C03">
            Weigh up the most efficient workouts
          </Typography>
          {/* <SearchExercisesButton variant="contained">
            Search Workouts
          </SearchExercisesButton> */}
          <Typography
            fontWeight={600}
            color="#FF9033"
            fontSize="200px"
            sx={{
              opacity: 0.2,
              display: { lg: "block", xs: "none" },
            }}
          >Workouts</Typography>
        </Stack>
      </Box>
      <img
        src={Hero}
        alt="Hero Banner"
        className="hero-banner-img"
        style={{ borderTopLeftRadius: "70px", borderBottomLeftRadius: "70px" }}
      />
    </Stack>
  );
};

export default React.memo(HeroBanner);
