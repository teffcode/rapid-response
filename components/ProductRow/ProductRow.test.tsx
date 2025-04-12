import { render, screen, fireEvent } from "@testing-library/react";
import ProductRow from "./ProductRow";
import { Row } from "@/types/rapidResponse";

const mockRow: Row = {
  id: 1,
  name: "RapidR_name 01",
  lastDeploy: "01-15-2024",
  status: "Active",
  properties: 50,
  lastPropertyEntry: "01-15-2024",
  price: "$20.0",
  isEditing: false
};

const mockOnEditToggle = jest.fn();
const mockOnNameChange = jest.fn();
const mockOnSave = jest.fn();
const mockOnDelete = jest.fn();

describe("ProductRow", () => {
  it("renders correctly", () => {
    render(
      <table>
        <tbody>
          <ProductRow
            row={mockRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText("RapidR_name 01")).toBeInTheDocument();
    expect(screen.getByText("Last deploy 01-15-2024")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("$20.0")).toBeInTheDocument();
  });

  it("allows name to be edited", () => {
    const editedRow = { ...mockRow, isEditing: true };

    render(
      <table>
        <tbody>
          <ProductRow
            row={editedRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    const input = screen.getByDisplayValue("RapidR_name 01");
    expect(input).toBeInTheDocument();
  });

  it("triggers onNameChange when typing", () => {
    const editedRow = { ...mockRow, isEditing: true };

    render(
      <table>
        <tbody>
          <ProductRow
            row={editedRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    const input = screen.getByDisplayValue("RapidR_name 01");
    fireEvent.change(input, { target: { value: "New Name" } });
    expect(mockOnNameChange).toHaveBeenCalledWith(1, "New Name");
  });

  it("calls onSave when the Enter key is pressed", () => {
    const editedRow = { ...mockRow, isEditing: true };

    render(
      <table>
        <tbody>
          <ProductRow
            row={editedRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    const input = screen.getByDisplayValue("RapidR_name 01");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnSave).toHaveBeenCalledWith(1);
  });

  it("calls onDelete when the delete button is clicked", () => {
    render(
      <table>
        <tbody>
          <ProductRow
            row={mockRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it("calls onEditToggle when the edit button is clicked", () => {
    render(
      <table>
        <tbody>
          <ProductRow
            row={mockRow}
            onEditToggle={mockOnEditToggle}
            onNameChange={mockOnNameChange}
            onSave={mockOnSave}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>
    );

    const editButton = screen.getByRole("button", { name: /edit name/i });
    fireEvent.click(editButton);

    expect(mockOnEditToggle).toHaveBeenCalledWith(1);
  });
});

