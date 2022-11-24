import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Test = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      height={67}
      sx={{
        background: "hsl(257deg 18% 32%)",
        color: "#fff",
        justifyContent: "space-evenly",
      }}
    >
      <Typography
        className="text"
        sx={{
          color: "#FF1493",
          fontSize: "40px",
          margin: "0 0 0 20px",
          display: "flex",
        }}
      >
        J
        <Typography className="text" sx={{ color: "white", fontSize: "40px" }}>
          {" "}
          oin Us
        </Typography>
      </Typography>
      {/* <Box sx={{ border: "1px solid white", width: "100%" }}>
        <ul sx={{ display: "flex" }}>
          <li>logo</li>
          <li>logo</li>
          <li>logo</li>
        </ul>
      </Box> */}
      {/* <Box
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
                sx={{ color: "#FF1493", fontSize: "40px" }}
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
            <Box sx={{ display: "flex", padding: "30px 0" }}>
              <Box sx={{ padding: "0 80px" }}>
                <Typography
                  sx={{
                    margin: "20px 0 0 0",
                    textAlign: "justify",
                  }}
                >
                  <Box sx={{ fontSize: "17px" }}>
                  
                    <Typography sx={{ fontWeight: "300" }}>
                      <span
                        className="link"
                        style={{ color: "wheat", fontWeight: "800" }}
                      >
                        Lorem ipsum
                      </span>{" "}
                      dolor sit amet, consectetur adipisicing elit. Qui dicta
                      minus molestiae vel beatae natus eveniet ratione
                      temporibus aperiam harum alias officiis assumenda officia
                      quibusdam deleniti eos cupiditate dolore doloribus! Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit. Qui
                      dicta minus
                    </Typography>
                  </Box>{" "}
                </Typography>
                <Typography sx={{ margin: "60px 0 0 0", textAlign: "justify" }}>
                  <Box>
                    <Typography sx={{ fontWeight: "300" }}>
                      <span
                        className="link"
                        style={{ color: "wheat", fontWeight: "800" }}
                      >
                        Rerum
                      </span>{" "}
                      sed nulla eum vero expedita ex delectus voluptates rem at
                      neque quos facere sequi unde optio aliquam!
                    </Typography>
                  </Box>
                </Typography>
                <Typography
                  sx={{ margin: "50px 0 0 65%", justifyContent: "flex-end" }}
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
                    margin: "-20px 0 0 -70px",
                    width: "130px",
                    height: "130px",
                    backgroundImage: `url('/Flowers.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></Box>
              </Box>

              <Box sx={{ padding: "0 80px" }}>
                <Typography sx={{ margin: "20px 0 0 0", textAlign: "justify" }}>
                  <Box sx={{ fontSize: "17px" }}>
                    <Typography sx={{ fontWeight: "300" }}>
                      <span
                        className="link"
                        style={{ color: "wheat", fontWeight: "800" }}
                      >
                        Lorem ipsum
                      </span>{" "}
                      dolor sit amet, consectetur adipisicing elit. Qui dicta
                      minus molestiae vel beatae natus eveniet ratione
                      temporibus aperiam harum alias officiis assumenda officia
                      quibusdam deleniti eos cupiditate dolore doloribus! Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit. Qui
                      dicta minus
                    </Typography>
                  </Box>
                </Typography>
                <Typography sx={{ margin: "60px 0 0 0", textAlign: "justify" }}>
                  <Box>
                    <Typography sx={{ fontWeight: "300" }}>
                      <span
                        className="link"
                        style={{ color: "wheat", fontWeight: "800" }}
                      >
                        Rerum
                      </span>{" "}
                      sed nulla eum vero expedita ex delectus voluptates rem at
                      neque quos facere sequi unde optio aliquam!
                    </Typography>
                  </Box>
                </Typography>
                <Box
                  sx={{
                    margin: "-502px 0 0 102%",
                    width: "145px",
                    height: "130px",
                    backgroundImage: `url('/Flower.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></Box>
             
              </Box>
            </Box> */}
    </Box>
  );
};

export default Test;
