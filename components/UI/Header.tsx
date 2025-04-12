import React from "react";
import { Calendar, Plus, Bell, Smile } from "lucide-react";
import Input from "./Input";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-light px-6 py-3 shadow-sm border-b border-borderGray">
      <div className="flex opacity-50">
        <Input placeholder="Property address" widthClass="w-[300px]" disabled />
        <Input
          icon={Calendar}
          placeholder="Search property address"
          widthClass="w-[300px]"
          disabled
        />
      </div>
      <div className="flex items-center gap-4 opacity-50">
        <button className="bg-active-text text-white text-sm font-semibold rounded-full flex items-center px-2 py-1 gap-2">
          $999.999
          <span className="bg-white text-active-text rounded-full">
            <Plus size={16} />
          </span>
        </button>
        <Bell size={18} className="text-gray" />
        <Smile size={18} className="text-gray" />
      </div>
    </header>
  );
};

export default Header;
