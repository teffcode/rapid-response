import React, { useState } from "react";
import { PencilRuler, Plus, Search } from "lucide-react";
import ProductRow from "./ProductRow";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";
import { initialRows } from "@/data/rapidResponseRows";
import { Row } from "@/types/rapidResponse";

const ProductTable: React.FC = () => {
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditToggle = (id: number) => {
    setRows(rows =>
      rows.map(row =>
        row.id === id ? { ...row, isEditing: !row.isEditing } : row
      )
    );
  };

  const handleNameChange = (id: number, newName: string) => {
    setRows(rows =>
      rows.map(row =>
        row.id === id ? { ...row, name: newName } : row
      )
    );
  };

  const handleSave = (id: number) => {
    setRows(rows =>
      rows.map(row =>
        row.id === id ? { ...row, isEditing: false } : row
      )
    );
  };

  const handleDelete = (id: number) => {
    setRows(rows =>
      rows.map(row =>
        row.id === id ? { ...row, status: "Eliminated" } : row
      )
    );
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "Eliminated" ? 1 : -1;
  });

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6 w-full">
        <h1 className="text-xl font-semibold text-primary">Rapid Response</h1>

        <div className="flex gap-6">
          <Button
            variant="secondary"
            text="Signatures and templates"
            icon={PencilRuler}
          />

          <Button
            variant="primary"
            text="New Rapid Response"
            icon={Plus}
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>

      <div className="w-full border border-light rounded-xl bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-primary">Status</h2>
          <Input icon={Search} placeholder="Search Rapid Response" />
        </div>

        <table className="w-full bg-white border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-sm text-gray text-left font-normal pl-4 pb-4">Name</th>
              <th className="text-sm text-gray text-left font-normal pb-4">Status</th>
              <th className="text-sm text-gray text-left font-normal pb-4">Properties</th>
              <th className="text-sm text-gray text-left font-normal pb-4">Last property entry</th>
              <th className="text-sm text-gray text-left font-normal pb-4">Price</th>
              <th className="text-sm text-left font-normal text-white pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map(row => (
              <ProductRow
                key={row.id}
                row={row}
                onEditToggle={handleEditToggle}
                onNameChange={handleNameChange}
                onSave={handleSave}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ProductTable;
