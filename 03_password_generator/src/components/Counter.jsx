import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  let normalCount = 0;

  useEffect(() => {
    console.log("rendering..");
  })
  
  return (
    <div>
      <p>useState count: {count}</p>
      <p>useRef count: {refCount.current}</p>
      <p>Normal variable count: {normalCount}</p>

      <button onClick={() => setCount(count + 1)}>+ State</button>
      <button
        onClick={() => {
          refCount.current += 1;
          console.log("ref:", refCount.current);
        }}
      >
        + Ref
      </button>
      <button
        onClick={() => {
          normalCount += 1;
          console.log("normal:", normalCount);
        }}
      >
        + Normal Variable
      </button>
    </div>
  );
}
