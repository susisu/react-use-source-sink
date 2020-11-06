# @susisu/react-use-source-sink

[![CI](https://github.com/susisu/react-use-source-sink/workflows/CI/badge.svg)](https://github.com/susisu/react-use-source-sink/actions?query=workflow%3ACI)

``` shell
npm i @susisu/react-use-source-sink
# or
yarn add @susisu/react-use-source-sink
```

## Usage

``` tsx
import React, { useEffect } from "react";
import { useSourceSink } from "@susisu/react-use-source-sink";

const Hello: React.FC = () => {
  const [source, sink] = useSourceSink<HTMLElement | null>(null);
  useEffect(() => {
    const elem = source();
    // ...
  });
  return (
    <p ref={sink}>Hello!</p>
  );
};
```

### Why?

The following code does not pass the type check.

``` tsx
import React, { useRef } from "react";

const Hello: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  return (
    <p ref={ref}>Hello!</p>
  );
};
```

This is because a reference created by `useRef` is both readable and writable, and basically *invariant* in terms of types, which means it cannot be up- nor down-casted. A reference to `HTMLElement` cannot be passed to the `ref` prop of a `p` element, which requires a reference to `HTMLParagraphElement`.

To pass the type check, we can use a *callback ref*, which is basically *contravariant* and can be safely passed to a concrete element.

``` tsx
import React, { useRef, useCallback } from "react";

const Hello: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const callbackRef = useCallback((elem: HTMLElement | null): void => {
    ref.current = elem;
  }, []);
  return (
    <p ref={callbackRef}>Hello!</p>
  );
};
```

`useSourceSink` simplifies this boilerplate.

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
