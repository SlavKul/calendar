import moment from "moment";
import React from "react";
import { Icon } from "semantic-ui-react";
import { FlexWrapper } from "../../../../../myComponents/Wrapper/Wrapper.styles";

interface CreatorProps {
  creator: string | undefined;
  creatingDate: string | undefined;
}

const Creator: React.FC<CreatorProps> = ({ creator, creatingDate }) => {
  const formattedDate = moment(creatingDate).format("DD.MM.YYYY HH:mm");

  return (
    <FlexWrapper>
      <Icon name="user" />
      <p style={{ margin: "0px" }}>{creator}</p>
      <Icon name="clock outline" />
      {formattedDate}
    </FlexWrapper>
  );
};

export default Creator;
