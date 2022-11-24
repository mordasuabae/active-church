import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Icons = () => {
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
      }}
    >
      <ul
        className="icons"
        style={{
          display: "flex",
          justfiyContent: "space-evenly",
          margin: "0 0 0 80px",
        }}
      >
        <li style={{ width: "100px" }}>
          {" "}
          <InstagramIcon />
        </li>
        <li style={{ width: "100px" }}>
          <TwitterIcon />
        </li>
        <li style={{ width: "100px" }}>
          {" "}
          <FacebookIcon />
        </li>
      </ul>
    </Box>
  );
};
export default Icons;
