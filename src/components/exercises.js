import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from './exerciseCard';

const Exercises = ({exercises}) => {
  return (
    <Box
      p="20px">
        <Typography variant='h4' mb="46px" textAlign='center'>Showing {exercises.length} Results</Typography>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="50px">
          {exercises.map(exercise=>{
            return <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>
          })}
        </Stack>
      </Box>
  )
}

export default Exercises