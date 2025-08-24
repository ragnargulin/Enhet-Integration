import { describe, it, vi, expect } from "vitest";
import ReactDOM from "react-dom/client";

describe("main.tsx", () => {
  it("renders App into root element", async () => {
    const rootDiv = document.createElement("div");
    rootDiv.id = "root";
    document.body.appendChild(rootDiv);

    const createRootSpy = vi.spyOn(ReactDOM, "createRoot");

    await import("./main");

    expect(createRootSpy).toHaveBeenCalledWith(rootDiv);

    document.body.removeChild(rootDiv);
    createRootSpy.mockRestore();
  });
});

