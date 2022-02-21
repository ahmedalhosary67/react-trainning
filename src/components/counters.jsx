import React, { useEffect } from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onReset, onDelete, onDecreament, onIncreament, counters } = props; // INSTEAD of repeating this.props with every event
  useEffect(()=>{
      console.log("hello 1");
  }, [])
  
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncreament={onIncreament}
          onDecreament={onDecreament}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
