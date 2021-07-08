import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const {onReset, onDelete, onDecreament, onIncreament} = this.props; // INSTEAD of repeating this.props with every event
        return ( 
            <div>
                {/* <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button> */}
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button> 
                { this.props.counters.map(counter => 
                // <Counter key={counter.id} onDelete={this.props.onDelete} onIncreament={this.props.onIncreament} counter={counter}/>
                <Counter key={counter.id} onDelete={onDelete} onIncreament={onIncreament} onDecreament={onDecreament} counter={counter}/>
                )}
            </div>
         );
    }
}
 
export default Counters;