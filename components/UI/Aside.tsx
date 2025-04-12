import React from "react";
import {
  FileChartColumn,
  Box,
  House,
  CircleDollarSign,
  Phone,
  SquareLibrary,
  Merge,
  Wrench,
  CreditCard,
} from "lucide-react";

const Aside: React.FC = () => {
  return (
    <aside className="w-64 bg-light text-white p-6 flex flex-col border-r border-borderGray">
      <h2 className="text-lg font-semibold text-gray mb-6">Company</h2>
      <nav className="flex flex-col gap-6">
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <FileChartColumn size={20} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <Box size={20} /> Buybox
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <House size={20} /> Properties
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <CircleDollarSign size={20} /> Buyers
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <Phone size={20} /> Skip trace
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <SquareLibrary size={20} /> Fulfillment
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <Merge size={20} /> Integrations
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <Wrench size={20} /> Tools
        </a>
        <a href="#" className="flex items-center gap-3 text-gray opacity-50">
          <CreditCard size={20} /> Payment
        </a>
      </nav>
    </aside>
  );
};

export default Aside;
