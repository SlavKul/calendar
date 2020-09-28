import React from "react";
import Event from "./Event/Event";

const Table = ({ events, deleteEvent }) => {
  const listOfEvents = events.map((event) => (
    <Event key={event.id} event={event} deleteEvent={deleteEvent} />
  ));

  return (
    <table className="ui table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Location</th>
          <th>Attendees</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>{listOfEvents}</tbody>
    </table>
  );
};

export default Table;
