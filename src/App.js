// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncreament = (counter, amount, e) => {
    console.log(e);
    if (counter.value + 1 * +amount.current.value <= 10) {
      counter.value = counter.value + 1 * +amount.current.value;
      setCounters([...counters]);
    }
  };
  
  const handleDecreament = (counter, amount, e) => {
    console.log(e.target.getBoundingClientRect().left);
    if (counter.value - 1 * +amount.current.value >= 0) {
      counter.value = counter.value - 1 * +amount.current.value;
      setCounters([...counters]);
    }
  };

  const handleReset = () => {
    const myArry = counters.map((c) => {
      c.value = 0;
      return c;
    });

    setCounters(myArry);
  };

  const handleDelete = (counterId) => {
    setCounters([...counters.filter((c) => c.id !== counterId)]);
  };

  return (
    <React.Fragment>
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onDelete={handleDelete}
          onIncreament={handleIncreament}
          onDecreament={handleDecreament}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
