import React from "react";
import Attendee from "./Attendee/Attendee";
import { Input } from "semantic-ui-react";
import { StyledAttendee } from "../../../Modules/List/Event/EventDetails/Attendees/AttendeesPopup/AttendeesPopup.styles";

interface AttendeesFormProps {
  name?: string;
  id?: string;
  value: string[] | undefined;
  addAttendee(event: any): void;
}

const AttendeesForm: React.FC<AttendeesFormProps> = ({
  value,
  addAttendee,
}) => {
  const listOfAttendees = value!.map((attendee) => {
    return <StyledAttendee>{attendee}</StyledAttendee>;
  });
  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="New attendee"
          autoComplete="off"
          fluid
          icon="user plus"
          onKeyPress={addAttendee}
          style={{ marginBottom: "5px" }}
        />
      </div>
      <div style={{ overflow: "auto", height: "442px", marginTop: "5px" }}>
        {listOfAttendees.length ? (
          listOfAttendees
        ) : (
          <p className="empty-list">List is empty</p>
        )}
      </div>
    </>
  );
};

export default AttendeesForm;
