import React from "react";
import Tab from "./Tab/Tab";
import { Button } from "../../myComponents/Button/Button.styles";
import { useCalendarContext } from "../../App.definitions";

const tabs = [
  { label: "List", href: "/" },
  { label: "Calendar", href: "/calendar" },
  { label: "History", href: "/history" },
];

const Header = ({ children }) => {
  console.log("RENDER HEADER");
  const { handleAddEditModal, handleEditing } = useCalendarContext();
  const listOfTabs = tabs.map((tab, index) => (
    <Tab
      key={index}
      href={tab.href}
      name={tab.label}
      style={{ backgroundColor: "rgb(240 240 240)" }}
    />
  ));
  return (
    <>
      <div className="ui top attached menu">
        {listOfTabs}
        <div className="right menu">
          <div className="item">
            <Button
              //floated="right"
              onClick={() => {
                handleEditing(false);
                handleAddEditModal(true);
              }}
              //type="button"
            >
              Add event
            </Button>
          </div>
        </div>
      </div>
      <div
        className="ui bottom attached active tab segment"
        style={{ margin: "0", backgroundColor: "rgb(240 240 240)" }}
      >
        {children}
      </div>
    </>
  );
};

export default Header;
