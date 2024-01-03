import React from "react";
import { Grid, Paper, styled } from "@mui/material";

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

const CustomTicketCard = ({ ticket, getUserAvailability, statusIcons }) => {
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
              marginBottom: "0.2rem",
            }}
          >
            {ticket.id}
          </p>
          <ProfileIcon
            userId={ticket.userId}
            getUserAvailability={getUserAvailability}
          />
        </div>
        <div
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FeatureRequest tag={ticket.tag[0]} />
        </div>
      </div>
    </Paper>
  );
};

const TicketGroupPriority = ({
  data,
  groupedTickets_priority,
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
      {priorityValues.map((priority) => (
        <Grid item lg={2.4} key={priority} padding={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomLabel>
              {priorityIcons[priority]}
              <h4
                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
              >
                {priorityLabels[priority]}
              </h4>
              <h4
                style={{
                  margin: "0",
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                {groupedTickets_priority[priority]?.length || 0}
              </h4>
            </CustomLabel>
            <div style={{ marginLeft: "auto" }}>
              <CustomAddButton
                groupId={priority}
                users={data.users}
                status={statusValues}
                priority={priorityLabels}
              />
              <CustomMoreButton />
            </div>
          </div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {groupedTickets_priority[priority]
              ? groupedTickets_priority[priority].map((ticket) => (
                  <li key={ticket.id} style={{ marginBottom: "8px" }}>
                    <CustomTicketCard
                      ticket={ticket}
                      statusIcons={statusIcons}
                      getUserAvailability={getUserAvailability}
                    />
                  </li>
                ))
              : null}
          </ul>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TicketGroupPriority;
