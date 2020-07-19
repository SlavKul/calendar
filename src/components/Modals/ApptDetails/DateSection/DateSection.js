import React from "react";
import { Icon } from "semantic-ui-react";
import "./DateSection.css";

const DateSection = ({ type, date }) => {
  return (
    <div className="event-date">
      <p className="date-title">{type}</p>
      <p className="date-body">
        <Icon name="calendar alternate" />
        {date.format("dddd, DD.MM.YYYY")}
      </p>
      <p className="date-body">
        <Icon name="clock outline" />
        {date.format("hh:mm")}
      </p>
    </div>
  );
};

export default DateSection;
