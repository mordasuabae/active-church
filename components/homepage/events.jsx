import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { purple } from "@mui/material/colors";
const displayText = "bauhaus-93";
const typeText = "baumans";
import { data } from "./data";
//import {Swiper,SwiperSlide} from 'swiper/react'
//import { Pagination } from "swiper";
// import Scrollbar from "../scrollbars";

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

  const [carouselClass,setCarouselClass] = React.useState('carousel');
  const handleCarouselScroll = ()=>{
    alert('uj')
    setCarouselClass('carousel-off')
  }
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
        className = 'overlay2'
        fill={true}
        src="/Dots.png"
        alt="background 2"
      />
      <Image
        className = 'overlay2b'
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
                    width={33}
                    height={33}
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
                  width={33}
                  height={33}
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
        
        <div  className='box1'>
          
          <div className = {carouselClass}onScroll={handleCarouselScroll}>
          {events.map((event) => (
            <Box
            sx={{
              ...style.event,
              background: `url(${event?.thumbnail})`,
              backgroundRepeat : 'no-repeat',
              backgroundSize : '100% 700px',
              objectFit : 'contain'
            }}
            >
              <Box sx={style.eventText}>
                <Typography sx={style.eventType}>{event.type}</Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={style.eventTitle}>{event.Title}</Typography>
                  <Typography sx={style.eventTitle}>{event.time}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
          </div>
    
          
        </div>
        
        
        <Box sx={style.box2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((item) =>
              item.type ? "" : <Box sx={style.upcomingEvent}></Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const style = {
  container: {
    overflow : 'hidden',
    position : 'relative'
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
  box1: {
    
  },
  navbar: {
    display: "flex",
    width: "70%",
    alignItems: "center",
    background: "rgb(230, 210, 138)",
    height: "74px",
    boxShadow: "0px 10px 15px -10px #222",
  },
  box2: {
    width: "30%",
    height: "130vh",
    padding: "32px 0px",
    display : 'flex',
    alignItems : 'center',
    flexDirection : 'column'
  },
  box2header: {
    display: "flex",
    width: "30%",
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
  event: {
    background: "purple",
    height: "700px",
    marginRight : '-20px',
    position: "relative",
    width: "85%",
    zIndex: 2,
    borderRadius: "15px",
    boxShadow: "1px 1px 20px #111",
    marginBottom: "32px",
    cursor: "pointer",
    transition: "1s",
  },
  eventText: {
    marginTop: "65%",
    padding: "0px 48px",
    marginBottom: "20px",
    transition : '1s'
  },
  eventType: {
    fontFamily: displayText,
    fontSize: "48px",
    color: "#eee",
    textShadow :'1px 1px 10px #111'
  },
  eventTitle: {
    fontFamily: typeText,
    fontSize: "24px",
    color: "#eee",
    marginRight: "8px",
    textShadow : '1px 1px 10px #111'
  },
  upcomingEvent: {
    background: "purple",
    height: "320px",
    width: "320px",
    marginRight : '-10px',
    position: "relative",
    zIndex: 2,
    borderRadius: "15px",
    boxShadow: "1px 1px 20px #111",
    marginBottom: "16px",
    cursor: "pointer",
  },
};
export default Events;
