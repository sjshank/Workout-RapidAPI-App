import React from "react";
import Chip from "@mui/joy/Chip";

const CustomChip = ({ text }) => {
    console.log("target Rendered");
  return (
    <Chip
      variant="solid"
      size="lg"
      sx={{
        fontSize: "18px",
        color: "#5D2C03",
        backgroundColor: "#FF9033",
        textTransform: "capitalize",
      }}
    >
      {text}
    </Chip>
  );
};

export default CustomChip;