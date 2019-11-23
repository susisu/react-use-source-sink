import { renderHook } from "@testing-library/react-hooks";
import { useSourceSink } from ".";

describe("useSourceSink", () => {
  it("should create a pair of source and sink", () => {
    const t = renderHook(() => useSourceSink("foo"));
    const [source, sink, ref] = t.result.current;
    expect(source()).toBe("foo");
    expect(ref).toEqual({ current: "foo" });

    sink("bar");

    expect(source()).toBe("bar");
    expect(ref).toEqual({ current: "bar" });
  });

  it("should provide stable references to functions", () => {
    const t = renderHook(() => useSourceSink("foo"));
    const [source1, sink1, ref1] = t.result.current;
    t.rerender();
    const [source2, sink2, ref2] = t.result.current;
    expect(source1).toBe(source2);
    expect(sink1).toBe(sink2);
    expect(ref1).toBe(ref2);
  });
});
