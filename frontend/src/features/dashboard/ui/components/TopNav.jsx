import React from "react";
import { Bell, Menu, Search } from "lucide-react";
const TopNav = () => {
  return (
    <div className="flex justify-between bg-[--bg-card] items-center">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[-var(--bg-surface)] border border-gray-400">
        <Search size={23} />
        <input
          className="outline-0 w-full"
          type="text"
          placeholder="Search workspace.."
        />
      </div>
      <div className="flex gap-4">
        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  );
};

export default TopNav;
