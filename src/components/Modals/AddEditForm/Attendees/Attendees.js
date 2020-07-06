import React from "react";
import "./Attendees.css";
import Attendee from "./Attendee/Attendee";
import { Input } from "semantic-ui-react";

const Attendees = (props) => {
  const { attendees } = props;
  const listOfAttendess = attendees.map((attendee, index) => {
    return (
      <Attendee
        key={index}
        name={attendee}
        removeAttendee={() => props.removeAttendee(index)}
      />
    );
  });
  return (
    <>
      <label>Attendees:</label>
      <div
        style={{
          borderBottom: ".5px solid rgba(34,36,38,.15)",
        }}
      >
        <Input
          type="text"
          name="creator"
          placeholder="New attendee"
          autoComplete="off"
          icon="user plus"
          onKeyPress={props.addNewAttendee}
          style={{ marginBottom: "5px" }}
        />
      </div>
      <div style={{ overflow: "auto", height: "442px", marginTop: "5px" }}>
        {listOfAttendess.length ? (
          listOfAttendess
        ) : (
          <p className="empty-list">List is empty</p>
        )}
      </div>
    </>
  );
};

export default Attendees;
