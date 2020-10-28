import React, { useState } from "react";
import { EventTypeModel } from "../../App.definitions";
import {
  StyledInput,
  EventColor,
  StyledDropdown,
  DropdownMenu,
  MenuItem,
} from "./CustomDropdown.styles";
import { MyRotatedIcon, MyIcon } from "../Icon/MyIcon.styles";

interface DropdownProps {
  name: string;
  id: string;
  listOptions: EventTypeModel[] | undefined;
  value: EventTypeModel | undefined;
  onChange: (value: any) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  listOptions,
  value,
  onChange,
}) => {
  const [isOpen, handleOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    handleOpen(false);
    onChange(value);
  };

  const eventTypeList = listOptions?.map((type) => (
    <MenuItem key={type.id} onClick={onOptionClicked(type)}>
      <EventColor color={type.color} />
      {type.name}
    </MenuItem>
  ));
  return (
    <StyledDropdown>
      <StyledInput onClick={() => handleOpen(!isOpen)}>
        <div style={{ display: "flex" }}>
          <EventColor color={selectedOption!.color} />
          {selectedOption!.name}
        </div>
        <MyIcon visible hoverdirection="up" name="chevron down" />
      </StyledInput>
      {isOpen ? <DropdownMenu>{eventTypeList}</DropdownMenu> : null}
    </StyledDropdown>
  );
};

export default CustomDropdown;
