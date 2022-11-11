import { Box, Button, Typography, Input, Grid, TextField } from "@mui/material";
import React from "react";
import axios from "axios";

const ContactUs = () => {
  return (
    <Box
      className="displayText viewText"
      sx={{ background: "#AED4FF", color: "#ffff" }}
    >
      <Box
        display={"flex"}
        paddingTop={10}
        paddingBottom={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{ color: "#FF00FF" }}
          className="displayText viewText"
          textAlign={"center"}
          variant={"h5"}
        >
          A
        </Typography>
        <Typography
          sx={{ color: "#111" }}
          className="displayText "
          textAlign={"center"}
          variant={"h5"}
        >
          bout Us
        </Typography>
      </Box>
      <Box display={"flex"} paddingLeft={5}>
        <Box sx={{ flexGrow: 1, width: "50%" }}>
          <Box display={"flex"}>
            <Typography className=" displayText">Contact: </Typography>
            <Typography sx={{ color: "#111" }} variant={"body1"}>
              0110 000 000
            </Typography>
          </Box>

          <Box display={"flex"}>
            <Typography className=" displayText">Email Address:</Typography>
            <Typography sx={{ color: "#111" }} variant={"body1"}>
              church@heavenabove.glory
            </Typography>
          </Box>

          <Box display={"flex"}>
            <Typography className=" displayText">Address:</Typography>
            <Typography sx={{ color: "#111" }} variant={"body1"}>
              26A Loveday Street South,Selby
            </Typography>
          </Box>
          <Button
            sx={{ background: "#1D1C1A", color: "#FDFD96" }}
            variant={"contained"}
            style={{ textTransform: "none" }}
            className="displayText"
          >
            View Map
          </Button>
        </Box>
        <Box paddingLeft={10}>
          <Grid className=" displayText" container rowSpacing={0.5}>
            <Grid item xs={4}>
              Name & Surname
            </Grid>
            <Grid item xs={8}>
              <Input
                name="name"
                sx={{ borderRadius: "5px", border: 1 }}
                style={{ border: "2px solid" }}
              />
            </Grid>
            <Grid item xs={4}>
              Email Address
            </Grid>
            <Grid item xs={8}>
              <Input
                name="email"
                sx={{ borderRadius: "5px", border: 1 }}
                style={{ border: "2px solid" }}
              />
            </Grid>
            <Grid item xs={4}>
              Description
            </Grid>
            <Grid item xs={8}>
              <TextField
                sx={{ borderRadius: "5px", border: 1, borderColor: "#111" }}
                multiline={true}
                height={20}
                color=""
                style={{ border: "2px solid" }}
              />
            </Grid>
            <Button
              sx={{ background: "#1D1C1A", color: "#FDFD96" }}
              variant={"contained"}
              style={{ textTransform: "none" }}
              className="displayText"
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
