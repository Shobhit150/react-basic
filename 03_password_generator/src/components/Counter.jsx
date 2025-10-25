import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  let normalCount = 0;

  useEffect(() => {
    console.log("rendering..");
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center space-y-4 w-72">
        
        <div className="space-y-1">
          <p className="font-semibold">useState</p>
          <p className="text-lg">{count}</p>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment State
          </button>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">useRef</p>
          <p className="text-lg">{refCount.current}</p>
          <button
            className="w-full bg-green-600 text-white py-2 rounded"
            onClick={() => {
              refCount.current += 1;
              console.log("ref:", refCount.current);
            }}
          >
            Increment Ref
          </button>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Normal Variable</p>
          <p className="text-lg">{normalCount}</p>
          <button
            className="w-full bg-red-600 text-white py-2 rounded"
            onClick={() => {
              normalCount += 1;
              console.log("normal:", normalCount);
            }}
          >
            Increment Variable
          </button>
        </div>

      </div>
    </div>
  );
}
