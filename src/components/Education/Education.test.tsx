import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Education from "./Education";
import { EDUCATION_CONSTANTS } from "./constants";

describe("Education", () => {
  it("renders section title and education items", () => {
    render(<Education />);
    expect(
      screen.getByText(EDUCATION_CONSTANTS.sectionTitle),
    ).toBeInTheDocument();
    expect(
      screen.getByText(EDUCATION_CONSTANTS.education[0].degree),
    ).toBeInTheDocument();
  });
});
