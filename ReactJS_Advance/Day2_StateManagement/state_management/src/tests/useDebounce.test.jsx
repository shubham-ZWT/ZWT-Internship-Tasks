import { renderHook, act } from "@testing-library/react";
import useDebounce from "../hooks/useDebounce";
import { vi, describe, it, expect } from "vitest";

describe("useDebounce", () => {
  it("should update value only after delay", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "A", delay: 500 } },
    );

    expect(result.current).toBe("A");
    rerender({ value: "B", delay: 500 });
    expect(result.current).toBe("A");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("B");

    vi.useRealTimers();
  });
});
