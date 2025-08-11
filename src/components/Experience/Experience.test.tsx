import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./Experience";
import { EXPERIENCE_CONSTANTS } from "./constants";

describe("Experience", () => {
  it("renders section title and experience items", () => {
    render(<Experience />);
    expect(
      screen.getByText(EXPERIENCE_CONSTANTS.sectionTitle),
    ).toBeInTheDocument();
    expect(
      screen.getByText(EXPERIENCE_CONSTANTS.experiences[0].company),
    ).toBeInTheDocument();
  });
});
