import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductTable from "@/components/ProductTable/ProductTable";
import '@testing-library/jest-dom';

describe("ProductTable", () => {
  it("renders the title and buttons", () => {
    render(<ProductTable />);
    
    expect(screen.getByText("Rapid Response")).toBeInTheDocument();
    expect(screen.getByText("Signatures and templates")).toBeInTheDocument();
    expect(screen.getByText("New Rapid Response")).toBeInTheDocument();
  });

  it("renders the list of Rapid Responses", () => {
    render(<ProductTable />);
    
    const rows = screen.getAllByText("RapidR_name 01");
    expect(rows.length).toBeGreaterThan(0);
  });

  it("opens the modal when clicking 'New Rapid Response'", () => {
    render(<ProductTable />);
    
    const button = screen.getByText("New Rapid Response");
    fireEvent.click(button);

    expect(
      screen.getByText("Before creating a Rapid Response you must create a signature first")
    ).toBeInTheDocument();
  });

  it("closes the modal when clicking close button", () => {
    render(<ProductTable />);

    const button = screen.getByText("New Rapid Response");
    fireEvent.click(button);

    const closeButton = screen.getByRole("button", { name: "×" });
    fireEvent.click(closeButton);

    expect(
      screen.queryByText("Before creating a Rapid Response you must create a signature first")
    ).not.toBeInTheDocument();
  });
});
