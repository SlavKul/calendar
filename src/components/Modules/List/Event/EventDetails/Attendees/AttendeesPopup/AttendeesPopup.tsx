import React from "react";
import { AttendeePopupContainer } from "../../EventDetails.styles";
import { Input, Segment } from "semantic-ui-react";
import { StyledAttendee } from "./AttendeesPopup.styles";

interface Props {
  attendees: string[] | undefined;
}

const AttendeesPopup: React.FC<Props> = ({ attendees }) => {
  const listOfAttendees = attendees!.map((attendee) => {
    return <StyledAttendee>{attendee}</StyledAttendee>;
  });
  return (
    <AttendeePopupContainer>
      <Input
        type="text"
        name="creator"
        placeholder="New attendee"
        autoComplete="off"
        size="mini"
        icon="user plus"
        style={{ marginBottom: "5px" }}
      />
      <>{listOfAttendees.length ? listOfAttendees : <p>List is empty</p>}</>
    </AttendeePopupContainer>
  );
};

export default AttendeesPopup;
