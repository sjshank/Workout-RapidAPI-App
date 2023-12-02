import React, { useReducer, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { WORKOUT_STATE, reducer } from "../reducers/searchReducer";
import { fetchWorkout, workoutFetchOptions } from "../utils/fetchData";
import Exercises from "./exercises";

const SearchButton = styled(Button)(({ theme }) => ({
  color: "#5D2C03",
  backgroundColor: "#FF9033",
  fontSize: "18px",
  fontWeight: "500",
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: "#5D2C03",
    color: "#FF9033",
  },
}));

const SearchExercises = () => {
  const [query, setQuery] = useState("");
  const [workoutState, dispatchWorkoutStateAction] = useReducer(
    reducer,
    WORKOUT_STATE
  );

  const handleSearch = () => {
    if (query) {
      fetchWorkout(
        "https://exercisedb.p.rapidapi.com/exercises?limit=100",
        workoutFetchOptions
      )
        .then((result) => {
          dispatchWorkoutStateAction({
            type: "SET_WORKOUTLIST",
            query: query,
            result: result,
          });
        })
        .catch((err) => {
          console.error("While caliing rapidapi");
        });
    }
  };
  return (
    <Stack
      direction="column"
      sx={{
        mt: "30px",
        p: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        fontSize={{ lg: "40px", xs: "30px" }}
        color="#5D2C03"
      >
        Workouts, You Must Know !
      </Typography>
      <Stack direction="row">
        <Box id="workouts" position="relative" mb="50px" mt="20px">
          <TextField
            fullWidth
            label="Search Workouts"
            sx={{
              height: "75px",
              fontWeight: "500",
              borderRadius: "5px",
              fontSize: "16px",
              width: { lg: "800px", xs: "350px" },
              mr: "20px",
            }}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
          <SearchButton
            variant="contained"
            sx={{
              height: "54px",
              width: {
                lg: "150px",
                xs: "100px",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </SearchButton>
        </Box>
      </Stack>
      {workoutState.workouts.length > 0 && <Exercises exercises={workoutState.workouts}/>}
    </Stack>
  );
};

export default SearchExercises;
