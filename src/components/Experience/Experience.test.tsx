import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./Experience";
import { EXPERIENCE_CONSTANTS } from "./constants";

describe("Experience", () => {
  it("shows one company at a time and switches its details", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: EXPERIENCE_CONSTANTS.sectionTitle })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Zé Delivery" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "PayPal" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "PayPal" }));
    expect(screen.getByRole("heading", { name: "PayPal" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Zé Delivery" })).not.toBeInTheDocument();
    expect(screen.getByText(EXPERIENCE_CONSTANTS.experiences[2].description[0])).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PayPal" })).toHaveAttribute("aria-pressed", "true");
  });
});
