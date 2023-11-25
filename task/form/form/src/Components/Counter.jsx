import React, { useState } from "react";

function Counter() {
  let [data, setdata] = useState(0);

  const decrement = () => {
    if (data > 0) {
      setdata((data = data - 1));
    }
  };
  return (
    <>
      <div className="input">
        <button onClick={decrement} style={{ width: "10rem" }}>
          -
        </button>
        <input
          type="number"
          readOnly
          style={{ width: "10rem", textAlign: "center" }}
          value={data}
        />

        <button
          onClick={() => setdata((data = data + 1))}
          style={{ width: "10rem" }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
