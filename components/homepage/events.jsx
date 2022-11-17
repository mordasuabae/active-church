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
    { img: "Instagram", href: "https://www.instagram.com/theactivechurch" },
    { img: "Twitter", href: "https://www.twitter.com/theactivechurch" },
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
      {/* <Box sx={style.overlay1}>
        <Image
          style={style.overlay1}
          width={800}
          height={800}
          src="/bg1.png"
          alt="b"
        />
      </Box> */}
      
      
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
      <Box className={styles.dotsBg}>
      <Box className={styles.dots}>
      <Image
        
        layout = 'fill'
        src="/Dots.png"
        alt="background 2"
        style={{marginLeft:'40px'}}
      />
      </Box>
      <Box className={styles.dots}>
      <Image
        
        layout = 'fill'
        src="/Dots.png"
        alt="background 2"
        style={{marginLeft:'40px'}}
      />
      </Box>
      </Box>
        <Box className={styles.box1}>
          <Box sx={style.divider}></Box>
          
            {events.map((event) => (
              <Box className={styles["event-wrapper"]}>
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
                      <Typography sx={style.eventTitle}>
                        {event.Title}1
                      </Typography>
                      <Typography sx={style.eventTitle}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
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
                      <Typography sx={style.eventTitle}>
                        {event.Title}2
                      </Typography>
                      <Typography sx={style.eventTitle}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
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
                      <Typography sx={style.eventTitle}>
                        {event.Title}3
                      </Typography>
                      <Typography sx={style.eventTitle}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
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
                      <Typography sx={style.eventTitle}>
                        {event.Title}4

                      </Typography>
                      <Typography sx={style.eventTitle}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          
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
    // background : 'red',
    // zIndex : 100
    
    background: "#44475D",
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
    display: "flex",
    background : 'url(/bg1.png)',
    backgroundRepeat : 'no-repeat',
    objectFit : 'contain',
    backgroundSize : '1000px',
  },
  overlay1: {
    position: "absolute",
    top: "-20px",
    left: "-80px",
    width: "100%",
    height: "100vh",
    transform: "scale(0.9,0.9)",
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
    fontSize: "38px",
    height: "74px",
    paddingLeft: "68px",
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
  divider: {
    height: "140vh",
    width: "20px",
    background: "rgba(103, 107, 138, 255)",
    position: "absolute",
    left: "63.5%",
    bottom: "0px",
  },
};
export default Events;
