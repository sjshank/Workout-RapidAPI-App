import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Stack justifyContent="center">
        <p
          style={{
            borderTop: "2px solid #FF9033",
            alignSelf: "center",
            width:'100%'
          }}
        ></p>
        <Typography
          variant="caption"
          style={{ color: "#5D2C03", margin: "20px", textAlign: "center" }}
        >
          Author Saurabh Shankariya. Made with React & Material UI
        </Typography>
      </Stack>
    </footer>
  );
};

export default React.memo(Footer);
