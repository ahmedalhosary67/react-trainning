import React, { useEffect, useRef } from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onReset, onDelete, onDecreament, onIncreament, counters } = props; // INSTEAD of repeating this.props with every event
  const inputv = useRef();
  

  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <input type="number" ref={inputv} defaultValue="1" min={0} />
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncreament={onIncreament}
          onDecreament={onDecreament}
          counter={counter}
          counters={counters}
          amount={inputv}
        />
      ))}
    </div>
  );
};

export default Counters;
