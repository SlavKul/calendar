import React, { useState } from "react";
import { EventContainer, Card, PicBlock } from "./Event.styles";
import EventDate from "./EventDate/EventDate";
import EventDetails from "./EventDetails/EventDetails";
import Notes from "./EventDetails/Notes/Notes";
import { EventModel } from "../../../App.definitions";

interface EventProps {
  event: EventModel;
}
//font-family Montserrat, sans-serif
const Event: React.FC<EventProps> = ({ event }) => {
  const [isIconVisible, setIconVisibility] = useState<boolean>(false);
  const [isNoteVisible, toggleNotes] = useState<boolean>(false);

  return (
    <Card
      onMouseOver={() => setIconVisibility(true)}
      onMouseLeave={() => {
        setIconVisibility(false);
        /*toggleNotes(false)*/
      }}
    >
      <EventContainer>
        <EventDate startDate={event.startTime} eventType={event.eventType} />
        <PicBlock></PicBlock>
        <EventDetails
          event={event}
          isIconVisible={isIconVisible}
          isNoteVisible={isNoteVisible}
          showNotes={() => toggleNotes(!isNoteVisible)}
        />
      </EventContainer>
      {isNoteVisible && event.notes ? <Notes notes={event.notes} /> : null}
    </Card>
  );
};

export default Event;
