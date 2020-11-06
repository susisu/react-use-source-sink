import React, { useRef } from "react";

export type Souce<T> = () => T;

export type Sink<T> = (val: T) => void;

/**
 * Creates a pair of souce and sink.
 */
export function useSourceSink<T>(val: T): [Souce<T>, Sink<T>, React.MutableRefObject<T>] {
  const ref = useRef(val);
  const sourceRef = useRef((): T => ref.current);
  const sinkRef = useRef((val: T): void => { ref.current = val; });
  return [sourceRef.current, sinkRef.current, ref];
}
