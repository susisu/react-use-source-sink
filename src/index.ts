import { useRef, useCallback } from "react";

export type Souce<T> = () => T;

export type Sink<T> = (val: T) => void;

/**
 * Creates a pair of souce and sink.
 */
export function useSourceSink<T>(val: T): [Souce<T>, Sink<T>, React.MutableRefObject<T>] {
  const ref = useRef(val);
  const source = useCallback((): T => ref.current, []);
  const sink = useCallback((val: T): void => { ref.current = val; }, []);
  return [source, sink, ref];
}
