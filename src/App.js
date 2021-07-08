// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  }
  handleIncreament = (counter) => {
          const counters = this.state.counters;
          counter.value++;
          this.setState({ counters });
  }
  handleDecreament = (counter) => {
      const counters = this.state.counters;
      counter.value--;
      this.setState({ counters });
  }
  // handleIncreament = (counter) => {
  //     const counters = [ ...this.state.counters ];
  //     const Index = counters.indexOf(counter);
  //     counters[Index] = { ...counter };
  //     counters[Index].value++;
  //     this.setState({ counters });
  // }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c
      })
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  }

  render() { 
    return ( 
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters onDelete={this.handleDelete} onIncreament={this.handleIncreament} onDecreament={this.handleDecreament} onReset={this.handleReset} counters={this.state.counters}/>
      </main>
    </React.Fragment> 
    );
  }
}

export default App;
