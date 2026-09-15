import React from "react";
import { NavLink } from "react-router";

const AsideNav = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold text-[#CAB8F9]">team-sync</h1>
        <p className="text-sm text-(--text-secondary)">Enterprise Workspace</p>
      </div>
      <div>
        <NavLink to={"/home/department"}>Department</NavLink>
      </div>
    </div>
  );
};

export default AsideNav;
