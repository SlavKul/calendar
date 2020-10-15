import React, { useState, useEffect } from "react";
import {
  EventDetailsStyled,
  Header,
  Body,
  Footer,
} from "./EventDetails.styles";
import CustomTitle from "./CustomTitle/CustomTitle";
import Time from "./Time/Time";
import Location from "./Location/Location";
import Attendees from "./Attendees/Attendees";
import {
  MyFlowedIcon,
  MyRotatedIcon,
  MyHiddenFlowedIcon,
} from "../../../../myComponents/Icon/MyIcon.styles";
import { Wrapper } from "../../../../myComponents/Wrapper/Wrapper.styles";
import { Announcer } from "../../../../myComponents/Announcer/Announcer.styles";
import { EventModel } from "../../../../App.definitions";

interface EventDetailsProps {
  event: EventModel;
  isIconVisible: boolean;
  isNoteVisible: boolean;
  showNotes(): void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  isIconVisible,
  isNoteVisible,
  showNotes,
  event,
}) => {
  const [settingsIcons, handleSettingsIcons] = useState({
    exist: false,
    shown: false,
  });
  const [test, setTest] = useState(false);

  useEffect(() => handleSettingsIcons({ ...settingsIcons, shown: false }), [
    isIconVisible,
  ]);
  return (
    <EventDetailsStyled>
      <Header>
        <CustomTitle title={event.title} />
        <Announcer />
        <Wrapper>
          <>
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="info circle"
            />
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="pencil alternate"
            />
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="trash alternate"
            />
          </>
          <MyFlowedIcon
            hoverdirection="down"
            name="ellipsis vertical"
            className={settingsIcons.shown && "expanded"}
            onMouseOver={() =>
              handleSettingsIcons({
                ...settingsIcons,
                exist: true,
              })
            }
            onMouseLeave={() => {
              if (!settingsIcons.shown)
                handleSettingsIcons({
                  ...settingsIcons,
                  exist: false,
                });
            }}
            onClick={() => {
              handleSettingsIcons({
                ...settingsIcons,
                shown: !settingsIcons.shown,
              });
            }}
          />
        </Wrapper>
      </Header>
      <Body>
        <Time />
        {event.location ? <Location location={event.location} /> : null}
        <Attendees visible={isIconVisible} attendees={event.attendees} />
      </Body>

      {event.notes ? (
        <Footer>
          <MyRotatedIcon
            className={test ? "clicked" : ""}
            visible
            hoverdirection="up"
            name="chevron down"
            onClick={() => {
              setTest(!test);
              showNotes();
            }}
          />
        </Footer>
      ) : null}
    </EventDetailsStyled>
  );
};

export default EventDetails;
