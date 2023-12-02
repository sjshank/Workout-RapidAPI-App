import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWorkout, workoutFetchOptions } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import WorkoutDetail from "../components/workoutDetail";

const Exercise = () => {
  const { id } = useParams();
  const [workoutDetail, setWorkoutDetail] = useState({});
  useEffect(() => {
    fetchWorkout(
      "https://exercisedb.p.rapidapi.com/exercises/exercise/".concat(id),
      workoutFetchOptions
    )
      .then((result) => {
        setWorkoutDetail(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <Box>
      <WorkoutDetail {...workoutDetail} />
    </Box>
  );
};

export default Exercise;
