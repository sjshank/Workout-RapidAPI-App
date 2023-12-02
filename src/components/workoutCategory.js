import React, { useEffect, useState } from "react";
import { fetchWorkout, workoutFetchOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const WorkoutCategory = () => {
  const [workoutCategory, setWorkoutCategory] = useState([]);
  useEffect(() => {
    if (
      window.sessionStorage &&
      !window.sessionStorage.getItem("workout_category")
    ) {
      fetchWorkout(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=50",
        workoutFetchOptions
      )
        .then((result) => {
          setWorkoutCategory(result);
          sessionStorage.setItem("workout_category", result);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setWorkoutCategory(
        Array.from(window.sessionStorage.getItem("workout_category").split(","))
      );
    }
  }, []);
  const handleChange = () => {};
  return (
    <Stack justifyContent="center" direction="row">
      <Box
        sx={{ width:'800px' }}
      >
        <FormControl
          fullWidth
        >
          <InputLabel id="body-part-lbl">Body Part as Category</InputLabel>
          <Select
            id="body-part"
            value=""
            label="Body Part as Category"
            onChange={handleChange}
          ></Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default WorkoutCategory;
