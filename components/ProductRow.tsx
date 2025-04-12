import React from 'react';
import Pill from "@/components/UI/Pill";

type Row = {
  id: number;
  name: string;
  lastDeploy: string;
  status: 'Active' | 'Eliminated';
  properties: number;
  lastPropertyEntry: string;
  price: string;
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
    <tr>
      <td className={`pl-4 py-4 border-lightGray border-l-2 border-y-2 rounded-l-2xl ${row.status === 'Eliminated' ? 'opacity-70' : ''}`}>
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
          <>
            <p className="font-semibold text-sm text-darkGray mb-1">{row.name}</p>
            <p className="font-regular text-xs text-gray">Last deploy {row.lastDeploy}</p>
          </>
        )}
      </td>
      <td className="py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray">
        <Pill status={row.status} />
      </td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray ${row.status === 'Eliminated' ? 'opacity-70' : ''}`}>{row.properties}</td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray ${row.status === 'Eliminated' ? 'opacity-70' : ''}`}>{row.lastPropertyEntry}</td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm text-active-text ${row.status === 'Eliminated' ? 'opacity-70' : ''}`}>{row.price}</td>
      <td className={`py-4 pr-4 text-right space-x-2 border-lightGray border-r-2 border-y-2 rounded-r-2xl ${row.status === 'Eliminated' ? 'opacity-70' : ''}`}>
        {row.status !== 'Eliminated' && (
          <>
            <button
              className="text-red-600 underline"
              onClick={() => onDelete(row.id)}
            >
              Delete
            </button>
            <button
              className="text-blue-600 underline"
              onClick={() => (row.isEditing ? onSave(row.id) : onEditToggle(row.id))}
            >
              {row.isEditing ? 'Save Name' : 'Edit Name'}
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
