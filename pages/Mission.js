import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "next/link";

const Mission = () => {
  return (
    <Box
      className="typeText"
      sx={{
        height: "2610px",
        width: "100%",
        color: "black",
        backgroundColor: "white",
        padding: "0 100px",
      }}
    >
      <Box
        className="box"
        sx={{
          height: "718px",
          width: "100%",
          backgroundImage: `url('/City.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
            borderRadius: "20px",
            padding: "33% 0",
          }}
        >
          <Typography
            sx={{ color: "#FF00FF", display: "flex", justifyContent: "center" }}
            className="displayText viewText"
            variant={"h2"}
            fontSize={108}
          >
            A
            <Typography
              sx={{ color: "white" }}
              className="displayText "
              variant={"h2"}
              fontSize={108}
            >
              bout
            </Typography>
          </Typography>
          <Typography
            sx={{ color: "white", margin: "-20px 0 0 0" }}
            className="displayText "
            variant={"h2"}
            fontSize={80}
          >
            Us
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "250px",
          width: "100%",
          color: "black",
          backgroundColor: "white",
          padding: "35px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "23px",
            textAlign: "center",
            width: "100%",
            color: "#42475b",
          }}
          className="texttwo"
        >
          <b>Our Mission</b>
        </Typography>
        <Box
          sx={{
            height: "150px",
            padding: "20px 0",
            textAlign: "center",
            color: "#42475b",
          }}
        >
          <Typography sx={{ width: "100%" }} className="aboutusp">
            Luis Vumi laoreet tortor in turpis varius a.Hendreritut element umil
            ilus vumi twipsac dignissim orci mauris neveltue
            porttitor.Lectusdiam risus, acufi duorhbu ieg cjsj ohut
            porttitor.Lillus Vumi laoreet, Vumi laoreet tortor in turpis jusiy
            varius a.Hendreritut elementumil lilus vumi twipsac dignissim
            orcimauris neveltue porttitor. Lectusdiam risus, acufi dourh bu ieg
            cjsj ohut porttitor.Lillus Vumi laoreet
          </Typography>
        </Box>
        <Box
          className="boxtwo"
          sx={{
            height: "718px",
            width: "100%",
            backgroundImage: `url('/Rectangle.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            backgroundColor: "black",
            position: "relative",
          }}
        >
          <Box
            sx={{
              // border: "1px solid yellow",
              width: "50%",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              color: "white",
              height: "100%",
              padding: "30px 110px",
            }}
          >
            <Box
              sx={{
                // border: "1px solid white",
                height: "100%",
                padding: "75px 0 ",
              }}
            >
              <Typography
                sx={{ fontSize: "40px", color: "white", fontWeight: "800px" }}
                variant={"h3"}
                className="texttwo"
              >
                Meet our Pastors
              </Typography>
              {/* sx={{ margin: "10px 0 0 0" }} */}
              <Typography
                sx={{
                  fontWeight: "300",
                  margin: "20px 0 0 0",
                  textAlign: "justify",
                }}
              >
                <span
                  className="link"
                  style={{ color: "wheat", fontWeight: "800" }}
                >
                  Lorem ipsum
                </span>{" "}
                {/* <b> */}
                dolor sit amet, consectetur adipisicing elit. Qui dicta minus
                molestiae temporibus aperiam harum alias officiis assumenda
                officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                {/* </b> */}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "300",
                  margin: "10px 0 0 0",
                  textAlign: "justify",
                }}
              >
                <span
                  className="link"
                  style={{ color: "wheat", fontWeight: "800" }}
                >
                  Lorem ipsum
                </span>{" "}
                {/* <b> */}
                dolor sit amet, consectetur adipisicing elit. Qui dicta minus
                molestiae temporibus aperiam harum alias officiis assumenda
                officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                {/* </b> */}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "300",
                  margin: "10px 0 0 0",
                  textAlign: "justify",
                }}
              >
                <span
                  className="link"
                  style={{ color: "wheat", fontWeight: "800" }}
                >
                  Lorem ipsum
                </span>{" "}
                {/* <b> */}
                dolor sit amet, consectetur adipisicing elit. Qui dicta minus
                molestiae vel beatae natus eveniet ratione temporibus aperiam
                harum alias officiis
                {/* </b> */}
              </Typography>
              <Typography
                sx={{ margin: "20px 0 0 0", justifyContent: "flex-end" }}
              >
                <Link className="link" style={{ color: "wheat" }} href="/">
                  <b>Read More </b>&rarr;{" "}
                </Link>{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "250px",
            width: "100%",
            color: "black",
            backgroundColor: "white",
            padding: "35px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "23px",
              textAlign: "center",
              width: "100%",
              color: "#42475b",
            }}
            className="texttwo"
          >
            <b>Our Vision</b>
          </Typography>
          <Box
            sx={{
              height: "120px",
              padding: "20px 0",
              textAlign: "center",
              color: "#42475b",
            }}
          >
            <Typography sx={{ width: "100%" }} className="aboutusp">
              Luis Vumi laoreet tortor in turpis varius a.Hendreritut element
              umil ilus vumi twipsac dignissim orci mauris neveltue
              porttitor.Lectusdiam risus, acufi duorhbu ieg cjsj ohut
              porttitor.Lillus Vumi laoreet, Vumi laoreet tortor in turpis jusiy
              varius a.Hendreritut elementumil lilus vumi twipsac dignissim
              orcimauris neveltue porttitor. Lectusdiam risus, acufi dourh bu
              ieg cjsj ohut porttitor.Lillus Vumi laoreet
            </Typography>
          </Box>
          <Box
            sx={{
              height: "500px",
              width: "100%",
              color: "black",
              backgroundColor: "white",
              padding: "35px 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                width: "100%",
                color: "#42475b",
              }}
              className="texttwo"
            >
              <b>Meet our Team</b>
            </Typography>
            <Box
              sx={{
                minheight: "10%",
                display: "flex",
                margin: "20px 0 0 0",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/andreapiacquadio.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/nappytwo.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/linkedin.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                >
                  {" "}
                </Box>{" "}
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/nappy.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                >
                  {" "}
                </Box>{" "}
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/simonrobben.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                >
                  {" "}
                </Box>{" "}
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                  margin: "50px 0 0 0",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/haticebaran.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                  margin: "50px 0 0 0",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/anastasiashuraeva.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                  margin: "50px 0 0 0",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/tarzinejackson.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  // border: "1px solid red",
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                  margin: "50px 0 0 0",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/dillon-kydd.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
              <Box
                sx={{
                  // border: "1px solid red",
                  width: "20%",
                  height: "250px",
                  padding: "10px 22px",
                  margin: "50px 0 0 0",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "800px",
                    height: "120px",
                    width: "120px",
                    backgroundImage: `url('/ezekixl-akinnewu.jpg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                    margin: "0 0 0 25px",
                  }}
                ></Box>
                <Typography sx={{ margin: "30px 0 0 60px", color: "#42475b" }}>
                  NAME
                </Typography>
                <Typography sx={{ margin: "-4px 0 0 45px", color: "#42475b" }}>
                  SURNAME
                </Typography>
                <Typography
                  sx={{
                    margin: "-4px 0 0 13%",
                    fontSize: "12px",
                    color: "#42475b",
                  }}
                >
                  Director of Active Youth
                </Typography>
              </Box>
            </Box>

            {/* import paper */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Mission;
