import React from "react";
import Tab from "./Tab/Tab";
import { Button } from "semantic-ui-react";

const tabs = [
  { label: "List", href: "/list" },
  { label: "Calendar", href: "/calendar" },
  { label: "History", href: "/history" },
];

const Header = ({ openModal, children }) => {
  console.log("RENDER HEADER");
  const listOfTabs = tabs.map((tab, index) => (
    <Tab key={index} href={tab.href} name={tab.label} />
  ));
  return (
    <>
      <div className="ui top attached tabular menu">
        {listOfTabs}
        <div className="right menu">
          <div className="item">
            <Button floated="right" onClick={openModal} type="button">
              Add event
            </Button>
          </div>
        </div>
      </div>
      <div className="ui bottom attached active tab segment" style={{margin: '0'}}>{children}</div>
    </>
  );
};

export default Header;
