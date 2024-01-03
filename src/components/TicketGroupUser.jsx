import React from "react";
import { Grid, Paper, Box, styled } from "@mui/material";

import CustomMoreButton from "./CustomMoreButton";
import CustomAddButton from "./CustomAddButton";
import FeatureRequest from "./FeatureRequest";
import ProfileIcon from "./ProfileIcon";
import StatusIcon from "./StatusIcon";

const CustomLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  padding: "0px",
});

const CustomTicketCard = ({ ticket, priorityIcons, statusIcons }) => {
  return (
    <Paper style={{ padding: "8px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: 14,
              marginBottom: "0.4rem",
            }}
          >
            {ticket.id}
          </p>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <StatusIcon status={ticket.status} statusIcons={statusIcons} />
          <p
            style={{
              marginTop: "0",
              paddingTop: "0",
              fontSize: 15,
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            {ticket.title}
          </p>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {priorityIcons[ticket.priority]}
          <FeatureRequest tag={ticket.tag[0]} />
        </div>
      </div>
    </Paper>
  );
};

const TicketGroupUser = ({
  data,
  groupedTickets_user,
  priorityIcons,
  statusIcons,
  priorityValues,
  priorityLabels,
  statusValues,
}) => {
  const getUserAvailability = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user?.available || false;
  };

  return (
    <React.Fragment>
      {Object.keys(groupedTickets_user).map((userId) => (
        <Grid item lg={2.4} key={userId} padding={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomLabel>
              <ProfileIcon
                userId={userId}
                getUserAvailability={getUserAvailability}
              />
              <h4
                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
              >
                {data.users.map((user) =>
                  user.id === userId ? user.name : null
                )}
              </h4>
              <h4
                style={{
                  margin: "0",
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                {groupedTickets_user[userId]?.length || 0}
              </h4>
            </CustomLabel>
            <div style={{ marginLeft: "auto" }}>
              <CustomAddButton
                groupId={userId}
                users={data.users}
                status={statusValues}
                priority={priorityLabels}
              />
              <CustomMoreButton />
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groupedTickets_user[userId].map((ticket) => (
              <li key={ticket.id} style={{ marginBottom: "8px" }}>
                <CustomTicketCard
                  ticket={ticket}
                  getUserAvailability={getUserAvailability}
                  priorityIcons={priorityIcons}
                  statusIcons={statusIcons}
                />
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TicketGroupUser;
