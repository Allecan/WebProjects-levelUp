import { useState } from "react";
import "../css/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function verifyCounter(count) {
    if (count < 0) {
      setColor("negative");
    } else if (count > 0) {
      setColor("positive");
    } else {
      setColor("neutro");
    }
  }
  return (
    <div className="flex flex-col mx-[156px] gap-[96px] min-h-screen">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="flex flex-col items-center gap-4 mt-[16%]">
        <h2>Counter</h2>
        <h1 className={`text-[119.66px] ${color}`}>{count}</h1>
      </div>
      <div className="flex flex-row gap-[72px] justify-center items-center">
        <button
          onClick={() => {
            setCount(count - 1);
            verifyCounter(count - 1);
          }}
          className="w-[200px] h-[72px]"
        >
          <h2>Decrease</h2>
        </button>
        <button
          onClick={() => {
            setCount(0);
            verifyCounter(0);
          }}
          className="w-[144px] h-[72px] reset-button"
        >
          <h2>Reset</h2>
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            verifyCounter(count + 1);
          }}
          className="w-[200px] h-[72px]"
        >
          <h2>Increase</h2>
        </button>
      </div>
    </div>
  );
}

export default Counter;
