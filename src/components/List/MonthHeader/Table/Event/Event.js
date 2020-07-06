import React from "react";
import { Button, Icon } from "semantic-ui-react";
import moment from "moment";

function formatDate(startTime, endTime) {
  const start = moment(startTime);
  const end = moment(endTime);
  if (start.format("MM.DD") !== end.format("MM.DD")) {
    return `${start.format("MM.DD hh:mm")} - ${end.format("MM.DD hh:mm")}`;
  }
  return `${start.format("MM.DD hh:mm")} - ${end.format("hh:mm")}`;
}

const Event = ({ event, deleteEvent }) => {
  console.log("Rendered Event");
  return (
    <tr>
      <td>{formatDate(event.startTime, event.endTime)}</td>
      <td>{event.title}</td>
      <td>{event.location}</td>
      <td>{event.attendees.length}</td>
      <td>
        <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default Event;
