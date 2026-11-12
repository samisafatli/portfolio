import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("shows the introduction and opens the requested portfolio panel", () => {
    const onNavigate = vi.fn();
    render(<Header onNavigate={onNavigate} />);
    expect(screen.getByRole("heading", { level: 1, name: /Thoughtful code/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sami safatli/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: "Let's talk ↗" }));
    expect(onNavigate).toHaveBeenCalledWith("contact");
  });
});
