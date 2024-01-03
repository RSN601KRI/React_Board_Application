import React from "react";
import Tooltip from "@mui/material/Tooltip";

const StatusIcon = ({ status, statusIcons }) => {
  return (
    <Tooltip title={status} followCursor>
      <img
        src={statusIcons[status]}
        alt={status}
        style={{
          marginTop: "0.2rem",
          width: "14px",
          height: "14px",
          marginRight: "0.3rem",
        }}
      />
    </Tooltip>
  );
};

export default StatusIcon;
