import React from "react";
import { Icon } from "semantic-ui-react";
import "./ApptDetails.css";
import Attendee from "../AddEditForm/Attendees/Attendee/Attendee";
import DateSection from "./DateSection/DateSection";
import moment from "moment";

const ApptDetails = (props) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-window">
          <div className="modal-header">
            <h3 className="header-title">All hands</h3>
            <Icon name="pencil alternate" className="edit-button" />
            <Icon name="trash alternate" className="remove-button" />
            <Icon name="close" className="close-button" />
          </div>
          <div className="modal-body">
            <div className="event-date-section">
              <DateSection type="starts" date={moment().locale("cz")} />
              <span className="divider"> </span>
              <DateSection
                type="ends"
                date={moment().locale("cz").add(1, "hour")}
              />
            </div>
            <div className="detail-section">
              <div className="eventType-indicator" />
              <p>General</p>
            </div>
            <div className="detail-section">
              <Icon name="map marker alternate" />
              <p>Brno</p>
            </div>
            <div className="detail-section">
              <Icon name="users" />
              <p>Attendees: 5</p>
              <Icon name="chevron down" />
              <Attendee name="First Attendee" />
              <Attendee name="Second Attendee" />
              <Attendee name="Third Attendee" />
            </div>
            <div id="notes">
              <Icon name="clipboard" />
              <p>Notes: </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApptDetails;
