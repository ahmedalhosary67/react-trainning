import React, { useEffect } from "react";
import { Button } from "./button";

const Counter = (props) => {
  const { onIncreament, onDecreament, onDelete, counter, counters, amount } = props;

  useEffect(() => {
    document.title = `counter no(${counter.id}) = ${counter.value} `;
    setTimeout(() => {
      document.title = `counters = ${counters.length}`;
    }, 1000);
  }, [counter.value]);

  useEffect(() => {
    document.title = `counters = ${counters.length}`;
  }, [counters.length]);

  return (
    <div>
      <div className="row">
        <div className="col-1">
          <span className={getBadgeClasses(counter)}>
            {FormatCount(counter)}
          </span>
        </div>
        <div className="col">
          <Button countfn={(e) => onIncreament(counter, amount, e)} label="+" />
          <Button countfn={(e) => onDecreament(counter, amount, e)} label="-" disabled={counter.value === 0 ? "disabled" : ""} />
          <Button countfn={() => onDelete(counter.id)} label="x" />
        </div>
      </div>
    </div>
  );
};

const getBadgeClasses = (counter) => {
  let classess = "badge m-2 badge-";
  classess += counter.value === 0 ? "warning" : "primary";
  return classess;
};

const FormatCount = (counter) => {
  const { value: count } = counter;
  return count === 0 ? "Zero" : count;
};

export default Counter;
