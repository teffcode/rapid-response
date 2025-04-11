import React from 'react';

type Row = {
  id: number;
  name: string;
  status: 'Active' | 'Eliminated';
  isEditing: boolean;
};

type ProductRowProps = {
  row: Row;
  onEditToggle: (id: number) => void;
  onNameChange: (id: number, newName: string) => void;
  onSave: (id: number) => void;
  onDelete: (id: number) => void;
};

const ProductRow: React.FC<ProductRowProps> = ({
  row,
  onEditToggle,
  onNameChange,
  onSave,
  onDelete
}) => {
  return (
    <tr
      className={`border-t ${
        row.status === 'Eliminated' ? 'bg-gray-200 text-gray-500 italic' : ''
      }`}
    >
      <td className="p-2">
        {row.isEditing && row.status !== 'Eliminated' ? (
          <input
            type="text"
            value={row.name}
            onChange={(e) => onNameChange(row.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSave(row.id);
            }}
            className="border p-1 w-full"
            autoFocus
          />
        ) : (
          row.name
        )}
      </td>
      <td className="p-2">{row.status}</td>
      <td className="p-2 text-center space-x-2">
        {row.status !== 'Eliminated' && (
          <>
            <button
              className="text-blue-600 underline"
              onClick={() => (row.isEditing ? onSave(row.id) : onEditToggle(row.id))}
            >
              {row.isEditing ? 'Save Name' : 'Edit Name'}
            </button>
            <button
              className="text-red-600 underline"
              onClick={() => onDelete(row.id)}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
