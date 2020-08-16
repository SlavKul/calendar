import React from "react";
import { Icon } from "semantic-ui-react";
import "./ApptDetails.css";
import Attendee from "../AddEditForm/Attendees/Attendee/Attendee";
import DateSection from "./DateSection/DateSection";
import moment from "moment";

const ApptDetails = (props) => {
  return (
    <>
      <div className="detail-modal-overlay">
        <div className="detail-modal-window">
          <div className="detail-modal-header">
            <div className="detail-modal-main-header">
              <h3 className="header-title">Long title for event</h3>
              <Icon name="pencil alternate" className="edit-button" />
              <Icon name="trash alternate" className="remove-button" />
              <Icon name="close" className="close-button" />
            </div>
            <div className="detail-modal-sub-header">
              <div className="sub-detail-section">
                <div className="eventType-indicator"/>
                <p style={{display: 'inline-block', margin: '0px'}}>General</p>
              </div>
              <div className="sub-detail-section">
                <Icon name="map marker alternate" style={{margin: '0px 0px 0px 10px'}}/>
                <p style={{display: 'inline-block', margin: '0px'}}>Brno</p>
              </div>
            </div>
          </div>
          <div className="detail-modal-body">
            <div className="event-date-section">
              <DateSection type="starts" date={moment().locale("cz")} />
              <span className="divider"> </span>
              <DateSection
                type="ends"
                date={moment().locale("cz").add(1, "hour")}
              />
            </div>
            <div className="detail-notes-section">
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
            <div className="detail-section">
              <Icon name="users" />
              <p>Attendees: 5</p>
              <Icon name="chevron down" />
              <Attendee name="First Attendee" />
              <Attendee name="Second Attendee" />
              <Attendee name="Third Attendee" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApptDetails;
