import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { reformatDate } from "../../../utilities/moment-locale";
import { EventModel, useCalendarContext } from "../../App.definitions";
import { Overlay } from "../AddEditForm/AddEditForm.styles";
import {
  ApptDetailsModal,
  ModalHeader,
  Header,
  FlexRow,
  FlexRight,
  ModalBody,
  ModalFooter,
  EventDateBlock,
  EventDate,
  DateTitle,
  DateBody,
  Divider,
  BackgroundImg,
} from "./ApptDetails.styles";
import logo from "../../../logo/logo_edited.png";
import CustomTitle from "../../Modules/List/Event/EventDetails/CustomTitle/CustomTitle";
import Location from "../../Modules/List/Event/EventDetails/Location/Location";
import { MyIcon } from "../../myComponents/Icon/MyIcon.styles";
import Dictionary from "../../../utilities/dictionary";
import moment from "moment";
import Creator from "../../Modules/List/Event/EventDetails/Creator/Creator";
import { textSpanContainsPosition } from "typescript";

interface ApptDetailsProps {
  event: EventModel | null;
  //onCancel: any | null;
}

const ApptDetails: React.FC<ApptDetailsProps> = ({ event }) => {
  const {
    start,
    end,
    title,
    location,
    eventType,
    notes,
    attendees,
    creator,
    created,
    id,
  } = event!;
  console.log(event);
  const {
    deleteEvent,
    openAddEditModal,
    handleConfirmModal,
    handleApptDetails,
  } = useCalendarContext();
  const startDate = moment(start);
  const endDate = moment(end);

  console.log(startDate.format());

  return (
    <Overlay>
      <ApptDetailsModal>
        <ModalHeader>
          <Header /*style={{ position: "absolute" }}*/>
            <FlexRow>
              <CustomTitle title={event!.title} />
              <FlexRight>
                <MyIcon
                  name="edit"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    openAddEditModal!(true, event!);
                    handleApptDetails!({ visible: false, event: null });
                  }}
                />
                <MyIcon
                  name="trash alternate"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    handleConfirmModal!({
                      isVisible: true,
                      onConfirm: () => {
                        deleteEvent!(id);
                        handleApptDetails!({ visible: false, event: null });
                      },
                      onCancel: () => handleConfirmModal!({ isVisible: false }),
                      header: "Smazat udalost",
                      content: `Opravdu chcete smazat ${title}?`,
                    });
                  }}
                />
                <MyIcon
                  name="close"
                  style={{ fontSize: "20px" }}
                  onClick={() =>
                    handleApptDetails!({ visible: false, event: null })
                  }
                />
              </FlexRight>
            </FlexRow>
            <FlexRow>
              <p>{eventType?.name}</p>
            </FlexRow>
            {location && (
              <FlexRow>
                <Location location={location} />
              </FlexRow>
            )}
            <FlexRow>
              <Creator creator={creator} creatingDate={created} />
            </FlexRow>
            <BackgroundImg></BackgroundImg>
          </Header>
          {/*
            <Image
              src={logo}
              alt="default img"
              style={{ opacity: "0.6", display: "block", margin: "0 auto" }}
            />
          */}
        </ModalHeader>
        <ModalBody>
          <div>Test</div>
        </ModalBody>
        <ModalFooter>
          <EventDateBlock>
            <EventDate>
              <DateTitle>{Dictionary.addEditForm.startTime}</DateTitle>
              <DateBody>
                <Icon name="calendar alternate" />
                {startDate.format("dddd, DD.MM.YYYY")}
              </DateBody>
              <DateBody>
                <Icon name="clock outline" />
                {startDate.format("HH:mm")}
              </DateBody>
            </EventDate>
            <Divider />
            <EventDate>
              <DateTitle>{Dictionary.addEditForm.endTime}</DateTitle>
              <DateBody>
                <Icon name="calendar alternate" />
                {endDate.format("dddd, DD.MM.YYYY")}
              </DateBody>
              <DateBody>
                <Icon name="clock outline" />
                {endDate.format("HH:mm")}
              </DateBody>
            </EventDate>
          </EventDateBlock>
        </ModalFooter>
      </ApptDetailsModal>
    </Overlay>
  );
};

export default ApptDetails;
