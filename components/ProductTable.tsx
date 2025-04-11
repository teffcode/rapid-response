import React, { useState } from 'react';
import ProductRow from './ProductRow';

type Row = {
  id: number;
  name: string;
  status: 'Active' | 'Eliminated';
  isEditing: boolean;
};

const initialRows: Row[] = [
  { id: 1, name: 'Item One', status: 'Active', isEditing: false },
  { id: 2, name: 'Item Two', status: 'Active', isEditing: false },
];

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
        row.id === id ? { ...row, status: 'Eliminated' } : row
      )
    );
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === 'Eliminated' ? 1 : -1;
  });

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-semibold mb-4">Rapid Response</h1>

        <div className="flex gap-6">
          <button
            className="mb-4 px-4 py-1 border rounded bg-white text-gray text-sm rounded"
            onClick={() => setModalOpen(true)}
          >
            Signatures and templates
          </button>

          <button
            className="mb-4 px-4 py-1 bg-blue-600 text-white text-sm rounded"
            onClick={() => setModalOpen(true)}
          >
            + New Rapid Response
          </button>
        </div>
      </div>

      <div className="w-full border border-light rounded-xl bg-white p-6">
        <div className="flex justify-between">
          <h2>Status</h2>
          <input
            type="text"
            placeholder="Search Rapid Response"
          />
        </div>

        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2">Actions</th>
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

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-lg"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">New Rapid Response</h2>
            <p>This is the second screen modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
