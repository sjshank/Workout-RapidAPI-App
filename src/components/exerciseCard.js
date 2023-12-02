import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CustomChip from "../ui/customChip";

const ExerciseCard = ({ exercise }) => {
  return (
    <Paper elevation={3}>
      <Link className="exercise-card" to={`/workout/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack spacing={3} direction="row" m="20px">
          <CustomChip text={exercise.bodyPart} />
          <CustomChip text={exercise.target} />
        </Stack>
        <Typography
          variant="h4"
          color="#5D2C03"
          fontSize="20px"
          fontWeight="600"
          ml="20px"
          pb="20px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Link>
    </Paper>
  );
};

export default ExerciseCard;
