import React from "react";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import CircleIcon from "@mui/icons-material/Circle";

const CustomRadio = ({ tag }) => {
  return (
    <Paper style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
      <Radio
        disabled={true}
        icon={<CircleIcon style={{ fontSize: 20 }} />}
        color="default"
        size="small"
        style={{ marginRight: 4, padding: 0, marginBottom: "0.2rem" }}
      />
      <span style={{ fontSize: 13 }}>{tag}</span>
    </Paper>
  );
}

export default CustomRadio;
