import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";
import { CONTACT_CONSTANTS } from "./constants";

describe("Contact", () => {
  it("renders heading and contact links", () => {
    render(<Contact />);
    expect(screen.getByText(CONTACT_CONSTANTS.heading)).toBeInTheDocument();
    expect(screen.getByText(CONTACT_CONSTANTS.links[0].text)).toBeInTheDocument();
  });
});
