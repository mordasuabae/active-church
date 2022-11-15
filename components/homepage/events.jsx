import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { purple } from "@mui/material/colors";
const displayText = "bauhaus-93";
const typeText = "baumans";
import { data } from "./data";
import styles from "../../styles/Home.module.css";

function Events() {
  const icons = [
    { img: "Church", type: "category", eventType: "Sunday Service" },
    { img: "Youth-icon", type: "category", eventType: "Active Youth" },
    { img: "Bible", type: "category", eventType: "Bible Studies" },
    { img: "Music", type: "category", eventType: "Active Worship" },
    { img: "Kids", type: "category", eventType: "Children's Church" },
    // {
    //   img: "Active-Foundation-Icon",
    //   type: "category",
    //   eventType: "Active Foundation",
    // },
    { img: "Instagram", href: "https://www.istagram.com" },
    { img: "Twitter", href: "https://www.twitter.com" },
    { img: "Facebook", href: "https://www.facebook.com/theactivechurch/" },
  ];
  const [currentState, setCurrentState] = React.useState({
    event: icons[0].eventType,
    index: 0,
  });
  //const [events,setEvents] = React.useState([]);

  const events = data.filter((event, i) => event.type === currentState.event);

  const handleSelect = (statename, index) => {
    //alert(statename + ' : ' + currentState.event)
    setCurrentState({ event: statename, index: index });
  };

  const [carouselClass, setCarouselClass] = React.useState("carousel");
  const handleCarouselScroll = () => {
    alert("uj");
    setCarouselClass("carousel-off");
  };
  const bgSize = 28;
  return (
    <Box sx={style.container}>
      <Box sx={style.overlay1}>
        <Image
          style={style.overlay1}
          width={1200}
          height={720}
          layout="contain"
          src="/bg1.png"
          alt="b"
        />
      </Box>
      <Image
        className={styles.dots}
        fill={true}
        src="/Dots.png"
        alt="background 2"
      />
      <Image
        className={styles["dots-2"]}
        fill={true}
        src="/Dots.png"
        alt="background 2"
      />
      <Box style={style.header}>
        <Box sx={style.navbar}>
          {icons.map((icon, i) => {
            return icon.type == "category" ? (
              <Tooltip title={icon.eventType}>
                <Box
                  key={i}
                  sx={{
                    ...style.icon,
                    background:
                      currentState.event === icon.eventType
                        ? "rgb(210, 190, 118)"
                        : style.navbar.background,
                  }}
                  onClick={() => handleSelect(icon.eventType, i)}
                >
                  <Image
                    width={bgSize}
                    height={bgSize}
                    src={`/Page-2-Icons/${icon.img}.png`}
                    alt="icon"
                  />
                </Box>
              </Tooltip>
            ) : (
              <Link
                target={"_blank"}
                style={style.icon}
                href={icon.href ? icon?.href : "#"}
              >
                <Image
                  width={bgSize}
                  height={bgSize}
                  src={`/Page-2-Icons/${icon.img}.png`}
                  alt="icon"
                />
              </Link>
            );
          })}
        </Box>
        <Typography sx={style.box2header}>Upcoming Events</Typography>
      </Box>
      <Box style={style.main}>
        <Box className={styles.box1}>
          <Box className = {styles.carousel}>
          {events.map((event) => (
            <Box
              className={styles.event}
              sx={{
                ...style.event,
                background: `url(${event?.thumbnail})!important`,
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "100% 750px  !important",
                objectFit: "contain !important",
              }}
            >
              <Box className={styles["event-overlay"]}></Box>
              <Box sx={style.eventText}>
                <Typography sx={style.eventType}>{event.type}</Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={style.eventTitle}>{event.Title}</Typography>
                  <Typography sx={style.eventTitle}>{event.time}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
          </Box>
          <Box className = {styles.carousel}>
          {events.map((event) => (
            <Box
              className={styles.event}
              sx={{
                ...style.event,
                background: `url(${event?.thumbnail})!important`,
                backgroundRepeat: "no-repeat !important",
                backgroundSize: "100% 750px  !important",
                objectFit: "contain !important",
              }}
            >
              <Box className={styles["event-overlay"]}></Box>
              <Box sx={style.eventText}>
                <Typography sx={style.eventType}>{event.type}</Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={style.eventTitle}>{event.Title}</Typography>
                  <Typography sx={style.eventTitle}>{event.time}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
          </Box>
        </Box>

        <Box sx={style.box2}>
          <Box sx={{ ...style.upcomingEvent, height: "45vh" }}></Box>
          <Box sx={{ ...style.upcomingEvent, height: "40vh" }}></Box>
          <Box sx={{ ...style.upcomingEvent, height: "35vh" }}></Box>
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    overflow: "hidden",
    position: "relative",
  },
  header: {
    display: "flex",
    width: "100%",
    position: "relative",
    zIndex: 100,
  },
  icon: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "1s",
    width: `${100 / 8}%`,
  },
  main: {
    width: "100%",
    background: "#44475D",
    display: "flex",
  },
  overlay1: {
    position: "absolute",
    top: "30px",
  },
  overlay2: {
    position: "absolute",
  },
  box1: {},
  navbar: {
    display: "flex",
    width: "65%",
    alignItems: "center",
    background: "rgb(230, 210, 138)",
    height: "74px",
    boxShadow: "0px 10px 15px -10px #222",
  },
  box2: {
    width: "35%",
    height: "130vh",
    padding: "25px 0px",
    // display : 'flex',
    // alignItems : 'center',
    // flexDirection : 'column'
  },
  box2header: {
    display: "flex",
    width: "35%",
    padding: "8px 0px",
    background: "rgb(68, 71, 93)",
    color: "white",
    alignItems: "center",
    fontFamily: displayText,
    fontSize: "42px",
    height: "74px",
    paddingLeft: "34px",
    boxShadow: "0px 10px 15px -10px #222",
  },
  event: {},
  eventText: {
    position: "absolute",
    top: "80%",
    left: "40px",
    transition: "1s",
  },
  eventType: {
    fontFamily: displayText,
    fontSize: "48px",
    color: "#eee",
    // textShadow: "1px 1px 10px #111",
  },
  eventTitle: {
    fontFamily: typeText,
    fontSize: "24px",
    color: "#eee",
    marginRight: "8px",
    textShadow: "1px 1px 10px #111",
  },
  upcomingEvent: {
    background: "purple",
    height: "40vh",
    width: "44vh",
    marginLeft: "70px",
    position: "relative",
    zIndex: 2,
    borderRadius: "15px",
    boxShadow: "14px 14px 15px 1px #111",
    marginBottom: "17px",
    cursor: "pointer",
  },
};
export default Events;
