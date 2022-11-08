import { Box, Button, Typography, Input, Grid } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box className="displayText viewText" sx={{ background: "#b5e2ff" }}>
      <Typography className="displayText viewText">Contact-us</Typography>
      <Box display={"flex"}>
        <Box sx={{ flexGrow: 1, width: "50%" }}>
          <Typography className=" viewText">Contact</Typography> 0110000000
          <Typography>Email Address:</Typography>church@heavenabove.glory
          <Typography>Address:</Typography>26A Loveday Street South,Selby
          <Button className="viewText">View Map</Button>
        </Box>
        <Box top={0}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1}}
            spacing={(0,5)}
          >
            <Grid item xs={6}>
              <Typography> Name & Surname</Typography>
            </Grid>
            <Grid item xs={6}>
              <Input sx={{ borderRadius: "5px", border: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography> Email Address</Typography>
            </Grid>
            <Grid item xs={6}>
              <Input sx={{ borderRadius: "5px", border: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Description</Typography>
            </Grid>
            <Grid item xs={6}>
              <Input sx={{ borderRadius: "5px", border: 1 }} multiline={true} height={20} />
            </Grid>
            <Button>Submit</Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
