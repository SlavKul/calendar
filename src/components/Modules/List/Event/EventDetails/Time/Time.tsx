import moment from "moment";
import React from "react";
import { Icon } from "semantic-ui-react";
import { WrapperDetail } from "../EventDetails.styles";

interface TimeProps {
  start: string | undefined;
  end: string | undefined;
}

const Time: React.FC<TimeProps> = ({ start, end }) => {
  const startDate = moment(start);
  const endDate = moment(end).utcOffset(120);
  return (
    <WrapperDetail>
      <Icon name="clock outline" />
      {`${startDate.format("hh:mm")} - ${endDate.format("hh:mm")}`}
    </WrapperDetail>
  );
};

export default Time;
