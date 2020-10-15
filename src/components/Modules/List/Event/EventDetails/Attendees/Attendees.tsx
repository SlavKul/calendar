import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { WrapperDetail } from "../EventDetails.styles";
import AttendeesPopup from "./AttendeesPopup/AttendeesPopup";

interface AttendeesProps {
  visible?: boolean;
  attendees: string[] | undefined;
}

const Attendees: React.FC<AttendeesProps> = ({ visible, attendees }) => {
  const [isAttendeePopup, showAttendeePopup] = useState<boolean>(false);
  console.log("I has been rendered", isAttendeePopup);

  useEffect(() => {
    showAttendeePopup(false);
  }, [visible]);

  const generateAttendeeTitle = (numberOfAttendees: number): string => {
    if (numberOfAttendees <= 4 && numberOfAttendees > 0) {
      return `${numberOfAttendees} účastníky`;
    } else {
      return `${numberOfAttendees} účastníků`;
    }
  };

  return (
    <>
      <Icon name="users" />
      <WrapperDetail
        hover
        onClick={() => showAttendeePopup(true)}
        onMouseLeave={() => showAttendeePopup(false)}
      >
        {generateAttendeeTitle(attendees!.length)}
        {isAttendeePopup && visible ? (
          <AttendeesPopup attendees={attendees} />
        ) : null}
      </WrapperDetail>
    </>
  );
};

export default Attendees;
