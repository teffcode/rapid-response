import React from "react";
import { Trash, Pencil } from "lucide-react";
import Pill from "@/components/UI/Pill";
import Button from "@/components/UI/Button";
import { Row } from "@/types/rapidResponse";

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
      <td className={`px-4 border-lightGray border-l-2 border-y-2 rounded-l-2xl h-[76px] w-[250px] ${row.status === "Eliminated" ? "opacity-70" : ""}`}>
        {row.isEditing && row.status !== "Eliminated" ? (
          <input
            type="text"
            className="w-full text-sm"
            value={row.name}
            onChange={(e) => onNameChange(row.id, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSave(row.id);
            }}
            autoFocus
          />
        ) : (
          <p className="font-semibold text-sm text-darkGray mb-1">{row.name}</p>
        )}
        <p className="font-regular text-xs text-gray">Last deploy {row.lastDeploy}</p>
      </td>
      <td className="py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray w-[200px]">
        <Pill status={row.status} />
      </td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray w-[200px] ${row.status === "Eliminated" ? "opacity-70" : ""}`}>{row.properties}</td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm text-darkGray w-[200px] ${row.status === "Eliminated" ? "opacity-70" : ""}`}>{row.lastPropertyEntry}</td>
      <td className={`py-4 border-lightGray border-y-2 font-semibold text-sm w-[200px] ${row.status === "Eliminated" ? "opacity-70 text-darkGray" : "text-active-text"}`}>{row.price}</td>
      <td className={`py-4 pr-4 text-right space-x-2 border-lightGray border-r-2 border-y-2 rounded-r-2xl ${row.status === "Eliminated" ? "opacity-70" : ""}`}>
        {row.status !== "Eliminated" && (
          <>
            <Button
              variant="secondary"
              icon={Trash}
              size="sm"
              onClick={() => onDelete(row.id)}
            />

            <Button
              variant="secondary"
              icon={Pencil}
              text={row.isEditing ? "Save name" : "Edit name"}
              size="sm"
              onClick={() => (row.isEditing ? onSave(row.id) : onEditToggle(row.id))}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
