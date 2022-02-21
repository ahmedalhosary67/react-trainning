import React, { useEffect } from "react";

const Counter = (props) => {
  const { onIncreament, onDecreament, onDelete, counter } = props;
  useEffect(() => {
    console.log("hello 2");
    document.title = `counter app ${counter}`;
    return () => {
        setTimeout(() => {
            console.log("clear");
        }, 1000);
    }
  }, [counter.value]);
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <span className={getBadgeClasses(counter)}>
            {FormatCount(counter)}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncreament(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecreament(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm "
          >
            x
          </button>
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
