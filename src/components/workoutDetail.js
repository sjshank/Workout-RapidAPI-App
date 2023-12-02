import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BodyPart from "../assets/icons/body-part.png";
import Equip from "../assets/icons/equipment.png";
import Target from "../assets/icons/target.png";

const WorkoutDetail = ({ bodyPart, equipment, gifUrl, target, instructions, name }) => {
  return (
    <Stack direction="row" gap="50px" alignItems="center" m={10}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Box
        sx={{
          alignSelf: "flex-start",
          flexGrow: "2",
          textAlign: "center",
          textTransform: "capitalize",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        <Typography
          variant="h3"
          color="#FF9033"
          sx={{ borderBottom: "3px solid #FF9033" }}
        >
          {name}
        </Typography>
        <Typography
          color="#5D2C03"
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            lineHeight: 2,
          }}
        >
          {instructions ? instructions.join(" ") : ""}
        </Typography>
        <Stack direction="row" mb={5}>
          <img src={BodyPart} alt={bodyPart} className="icon-img"/>
          <p style={{alignSelf:'center', color:"#5D2C03", marginLeft:'5px'}}>{bodyPart}</p>
        </Stack>
        <Stack direction="row" mb={5}>
          <img src={Equip} alt={equipment} className="icon-img"/>
          <p style={{alignSelf:'center', color:"#5D2C03", marginLeft:'5px'}}>{equipment}</p>
        </Stack>
        <Stack direction="row" mb={5}>
          <img src={Target} alt={target} className="icon-img"/>
          <p style={{alignSelf:'center', color:"#5D2C03", marginLeft:'5px'}}>{target}</p>
        </Stack>
      </Box>
    </Stack>
  );
};

export default WorkoutDetail;
