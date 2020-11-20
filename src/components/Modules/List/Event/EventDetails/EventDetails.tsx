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
import {
  FlexWrapper,
  Wrapper,
} from "../../../../myComponents/Wrapper/Wrapper.styles";
import { Announcer } from "../../../../myComponents/Announcer/Announcer.styles";
import { EventModel } from "../../../../App.definitions";
import { useCalendarContext } from "../../../../App.definitions";
import { Icon } from "semantic-ui-react";
import Creator from "./Creator/Creator";
import dictionary from "../../../../../utilities/dictionary";

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
  const {
    deleteEvent,
    openAddEditModal,
    handleConfirmModal,
  } = useCalendarContext();
  const [settingsIcons, handleSettingsIcons] = useState({
    exist: false,
    shown: false,
  });
  const [isCreatorVisible, handleCreatorVisibility] = useState(false);
  const [test, setTest] = useState(false);

  useEffect(() => {
    handleSettingsIcons({ ...settingsIcons, shown: false });
    handleCreatorVisibility(false);
  }, [isIconVisible]);
  return (
    <EventDetailsStyled>
      <Header>
        <CustomTitle title={event.title} />
        <Announcer />
        <Wrapper>
          <>
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist ? 1 : 0}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="info circle"
              onClick={() => handleCreatorVisibility(!isCreatorVisible)}
            />
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist ? 1 : 0}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="edit"
              onClick={() => {
                console.log(event, "CLICK HERE");
                openAddEditModal!(true, event);
              }}
            />
            <MyHiddenFlowedIcon
              visible={settingsIcons.exist ? 1 : 0}
              className={settingsIcons.shown && "visible"}
              hoverdirection="down"
              name="trash alternate"
              onClick={() =>
                handleConfirmModal!({
                  isVisible: true,
                  onConfirm: () => deleteEvent!(event.id),
                  onCancel: () => handleConfirmModal!({ isVisible: false }),
                  header: "Smazat udalost",
                  content: `Opravdu chcete smazat ${event.title}?`,
                })
              }
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
        <Time start={event.start} end={event.end} />
        {event.location ? <Location location={event.location} /> : null}
        <Attendees visible={isIconVisible} attendees={event.attendees} />
      </Body>
      <Footer>
        <FlexWrapper>
          {event.notes ? (
            <>
              <Icon name="sticky note outline" />
              <p style={{ marginRight: "5px" }}>
                {dictionary.addEditForm.notes}
              </p>
              <MyRotatedIcon
                className={test ? "clicked" : ""}
                visible={1}
                hoverdirection="up"
                name="chevron down"
                onClick={() => {
                  setTest(!test);
                  showNotes();
                }}
              />
            </>
          ) : null}
        </FlexWrapper>
        <Wrapper>
          {isCreatorVisible && (
            <Creator creator={event.creator} creatingDate={event.created} />
          )}
        </Wrapper>
      </Footer>
    </EventDetailsStyled>
  );
};

export default EventDetails;
