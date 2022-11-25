import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { B } from "react-html5video/dist";
import Test from "../homepage/Test";
import { Gradient } from "@mui/icons-material";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          padding: "0 90px",
          height: 128,
        },
      }}
      className="aboutus"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: "5px wheat solid", width: "100%" }}></Box>
          <Box sx={styles.container}>
            <Box sx={styles.contentBox}>
              <Box
                className="typeText"
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "40px",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="text"
                  sx={{ color: "#FF00FF" }}
                  className="displayText viewText"
                  variant={"h2"}
                  fontSize={40}
                >
                  A
                </Typography>
                <Typography
                  className="displayText viewText"
                  variant={"h2"}
                  fontSize={40}
                  sx={{ fontSize: "40px" }}
                >
                  bout Us
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  padding: "30px 80px",

                  position: "relative",
                }}
              >
                {" "}
                <img
                  style={{
                    height: "200px",
                    width: "30px",
                    margin: "-20px 0 0 0",
                    position: "absolute",
                    left: "40px",
                  }}
                  src="/Tree 1.png"
                />
                <Box
                  sx={{
                    padding: "0 0",
                    // border: "1px solid white",
                    width: "50%",
                  }}
                >
                  <Typography
                    sx={{
                      margin: "20px 0 0 0",
                      textAlign: "justify",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "17px",
                        padding: "0 80px",
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ fontWeight: "300" }}>
                        <span
                          className="link"
                          style={{ color: "wheat", fontWeight: "800" }}
                        >
                          Lorem ipsum
                        </span>{" "}
                        {/* <b> */}
                        dolor sit amet, consectetur adipisicing elit. Qui dicta
                        minus molestiae vel beatae natus eveniet ratione
                        temporibus aperiam harum alias officiis assumenda
                        officia quibusdam deleniti eos cupiditate dolore
                        doloribus! Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Qui dicta minus
                        {/* </b> */}
                      </Typography>
                    </Box>{" "}
                  </Typography>
                  <Typography
                    sx={{ margin: "60px 0 0 0", textAlign: "justify" }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "300", padding: "0 80px" }}>
                        <span
                          className="link"
                          style={{ color: "wheat", fontWeight: "800" }}
                        >
                          Rerum
                        </span>{" "}
                        sed nulla eum vero expedita ex delectus voluptates rem
                        at neque quos facere sequi unde optio aliquam!
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography
                    sx={{ margin: "50px 0 0 52%", justifyContent: "flex-end" }}
                  >
                    <Link
                      className="link"
                      style={{ color: "wheat" }}
                      href="/AboutUs"
                    >
                      <b>More Info </b>&rarr;{" "}
                    </Link>{" "}
                  </Typography>

                  <Box
                    className="layer"
                    sx={{
                      margin: "-5px 0 0 10px",
                      width: "130px",
                      height: "130px",
                      backgroundImage: `url('/Flowers.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    padding: "0 0",
                    // border: "1px solid white",
                    width: "50%",
                  }}
                >
                  <Typography
                    sx={{ margin: "20px 0 0 0", textAlign: "justify" }}
                  >
                    <Box
                      sx={{
                        fontSize: "17px",
                        padding: "0 75px",
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ fontWeight: "300" }}>
                        <span
                          className="link"
                          style={{ color: "wheat", fontWeight: "800" }}
                        >
                          Lorem ipsum
                        </span>{" "}
                        dolor sit amet, consectetur adipisicing elit. Qui dicta
                        minus molestiae vel beatae natus eveniet ratione
                        temporibus aperiam harum alias officiis assumenda
                        officia quibusdam deleniti eos cupiditate dolore
                        doloribus! Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Qui dicta minus
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography
                    sx={{ margin: "60px 0 0 0", textAlign: "justify" }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: "300", padding: "0 75px" }}>
                        <span
                          className="link"
                          style={{ color: "wheat", fontWeight: "800" }}
                        >
                          Rerum
                        </span>{" "}
                        sed nulla eum vero expedita ex delectus voluptates rem
                        at neque quos facere sequi unde optio aliquam!
                      </Typography>
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      zIndex: "100",
                      position: "absolute",
                      top: "-0.9%",
                      right: "-1%",
                      // border: "1px solid white",
                      left: "20",
                      width: "145px",
                      height: "130px",
                      backgroundImage: `url('/Flower.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      margin: "-120px 0 0 10%",
                    }}
                  ></Box>
                </Box>
                <img
                  className="dex"
                  style={{
                    height: "200px",
                    width: "30px",
                    position: "absolute",
                    bottom: "50px",
                    right: "50px",
                    // zIndex: 2,
                  }}
                  src="/Tree 1.png"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

const styles = {
  // container: {
  //   minHeight: "calc(100vh - 70px)",
  //   backgroundSize: "cover",
  //   display: "flex",
  //   alignItems: "center",
  //   width: "100%",
  //   justifyContent: "center",
  // },
  contentBox: {
    width: "100%",
    background: "rgb(68,68,94,0.9)",
    padding: "65px 0",
    textAlign: "center",
    color: "white",
    height: "685px",
    margin: "0 0 0 0",
    // opacity: "0.9",
    boxShadow: "1px 1px #44445e",
    borderBottomLeftRadius: "100px",
    position: "relative",
    backgroundImage: "linear-gradient(45deg,#ff2fe5,#95bdcd 5%,#e7d38a )",
  },
};
