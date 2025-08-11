import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skills from "./Skills";
import { SKILLS_CONSTANTS } from "./constants";

describe("Skills", () => {
  it("renders section title and skill categories", () => {
    render(<Skills />);
    expect(screen.getByText(SKILLS_CONSTANTS.sectionTitle)).toBeInTheDocument();
    expect(
      screen.getByText(SKILLS_CONSTANTS.skillCategories[0].category),
    ).toBeInTheDocument();
  });
});
