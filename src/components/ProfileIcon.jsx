import React from "react";
import Tooltip from "@mui/material/Tooltip";

import icon from "../assets/pic.webp";
import onlineIcon from "../assets/Green_sphere.svg.png";
import offlineIcon from "../assets/circle-xxl.png";

const ProfileIcon = ({ userId, getUserAvailability }) => {
  return (
    <Tooltip
      title={getUserAvailability(userId) ? "Online" : "Offline"}
      followCursor
    >
      <div style={{ position: "relative" }}>
        <img
          src={icon}
          alt="icon"
          style={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
          }}
        />
        <img
          src={getUserAvailability(userId) ? onlineIcon : offlineIcon}
          alt={getUserAvailability(userId) ? "Online" : "Offline"}
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
      </div>
    </Tooltip>
  );
};

export default ProfileIcon;
