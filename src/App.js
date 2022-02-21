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

  const handleIncreament = (counter) => {
    counter.value++;
    setCounters([...counters]);
  };
  const handleDecreament = (counter) => {
    if (counter.value > 0) {
      counter.value--;
      setCounters([...counters]);
    }
  };
  // handleIncreament = (counter) => {
  //     const counters = [ ...counters ];
  //     const Index = counters.indexOf(counter);
  //     counters[Index] = { ...counter };
  //     counters[Index].value++;
  //     setCounters(counters);
  // }

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
