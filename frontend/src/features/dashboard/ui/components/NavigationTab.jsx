import React from "react";
import { NavLink } from "react-router";
import { ChartArea } from "lucide-react";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink className={"flex gap-3 pl-4"} to={path}>
      <ChartArea size={23} />
      {title}
    </NavLink>
  );
};

export default NavigationTab;
