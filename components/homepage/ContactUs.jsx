import { Box, Button, Typography, Input, Grid, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import { useState } from "react";
// import Marquee from "react-fast-marquee";
import Modal from "@mui/material/Modal";
import style from "../../styles/Banner.module.css";

//import Image from './images/Montains.png'; // Import using relative path


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //===============Modal=============
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //===============End================

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("./api/contact.js", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        res.send();
      }
    });
  };

  return (
    <Box sx={{ background: "#e1eef5", color: "#ffff" , height:"830px",width:"100%",ontFamily:"sans serif", fontWeight:"bold"}}>
      {/*Purple mountain*/}
    <Box><img src="/Montains.png" alt="mountain"  width={1350} height={300}/></Box>

      {/*About us heading text*/}

      <Box sx={cloudContainer}>
        <Box className={style.contactUsCloud1}></Box>
        <Box
        sx={{ display: "flex", alignItems: "center",marginRight:"100px"}}
        paddingTop={2}
        justifyContent="center"
      >
        <Typography
          sx={{ color: "#FF00FF" }}
          className="displayText viewText"
          variant={"h2"}
          fontSize={40}
        >
          A
        </Typography>
        <Typography
          sx={{ color: "#42475B" }}
          className="displayText "
          variant={"h2"}
          fontSize={40}
        >
          bout Us
        </Typography>
      </Box>
        <Box className={style.contactUsCloud2}></Box>
      </Box>

      {/* left Side */}
      <Box sx={contactUsSection} paddingRight={7}>

        <Box sx={{marginBottom:"30px"}}>
          <Box sx={{ display: "flex", alignItems:"center", justifyContent:"center"}}>
            <Typography sx={{fontSize:"23px", fontWeight:"bolder", paddingRight:"10px"}}>Contact: </Typography>
  
            <Typography sx={{ color: "#42475B" }}>
              0110 000 000
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection:"column", marginTop:"5px"}}>
            <Typography sx={{fontSize:"22px", fontWeight:"bolder"}}>Email Address:</Typography>
            <Typography sx={{ color: "#42475B" }}>
              church@heavenabove.glory
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginTop:"5px" }}>
            <Typography sx={{fontSize:"22px", fontWeight:"bolder"}}>Address:</Typography>
            <Typography sx={{ color: "#42475B", marginLeft:"5px"}}>
              26A Loveday
            </Typography>
          </Box>
          <Typography sx={{ color: "#42475B" }}>
            Street South,Selby
          </Typography>

          <Box marginTop={4} />
          <Box
            onClick={handleOpen}
            sx={{ background: "#42475B", color: "#E7D38A", fontWeight:"bold", fontSize:"16px", height:"35px",width:"120px",display:"flex", alignItems:"center", justifyContent:"center", marginTop:"10px", borderRadius:"2px", cursor:"pointer"}}
          >
            View Map
          </Box>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                bgcolor: "background.paper",
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              
              <Box sx={{display:'flex'}}>
                <Box sx={{flexGrow:'1'}} />
                <Button onClick={handleClose} sx={{background: "#42475B", color: "#E7D38A", marginBottom:"10px"}} variant="contained" >X</Button>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.401982051986!2d28.041989499999996!3d-26.216125099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e95f6a6c0db%3A0xc2e1d5cdfa4a5cb3!2sThe%20Active%20Church!5e0!3m2!1sen!2sza!4v1668431475133!5m2!1sen!2sza"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </Box>
          </Modal>
        </Box>



        {/* grid */}
        <Box sx={nameSection} >
          <Grid >

            <Box sx={{display:"flex"}}>
            <Grid item sx={{fontSize:"18px"}}>
              Name & Surname
            </Grid>
            <Grid item >
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                style={{ border: "2px solid #42475B", width:"350px", height:"50px", marginLeft:"15px",borderRadius: "5px" }}
              />
            </Grid>

            </Box>

           


           <Box sx={{display:"flex", marginTop:"15px"}}>
            <Box sx={{fontSize:"18px"}}>
              Email Address
            </Box>

           <Box sx={{fontSize:"22px"}}>
              <Input
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                sx={{ border: "2px solid #42475B" , width:"350px", height:"50px", marginLeft:"48px",borderRadius:"5px"}}
              />
            </Box>
           </Box>

            <Box sx={{display:"flex", marginTop:"15px"}}>
            <Box sx={{fontSize:"17px", display:"flex", justfiyContent:"center",flexDirection:"column", width:"90px"}}>
              Description
              <Box
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                sx={{ background: "#42475B", color: "#E7D38A", fontWeight:"bold", fontSize:"14px", height:"35px",width:"85px",display:"flex", alignItems:"center", justifyContent:"center", marginTop:"10px", borderRadius:"2px", cursor:"pointer"}}
                 >
                Submit
              </Box>
            </Box>

            <Grid item sx={{fontSize:"22px"}}>
              <TextField
                fullWidth
                width={"100%"}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={2.6}
                multiline={true}
                sx={{ border: "2px solid #42475B", width:"392px", height:"95px", marginLeft:"60px",borderRadius:"5px"}}
              />
            </Grid>
            </Box>

          </Grid>
        </Box>

      </Box>
    </Box>
  );
};

export default ContactUs;

const contactUsSection = {
  display:"flex",
  alignItems:"Center",
  justifyContent:"center",
  justifyContent:"space-evenly",
  fontFamily:"sans serif"
}


const nameSection = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  height:"260px",
  justifyContent:"space-between",
  marginTop:"10px"
}

const cloudContainer = {
  width:"100%",
  height:"200px",
  display:"flex",
  alignItems:'center',
  justifyContent:"center",
  marginBottom:"30px",
  justifyContent:"space-evenly",
  marginTop:"-60px"
}