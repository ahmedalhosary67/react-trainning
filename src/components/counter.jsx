import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
        // imageUrl: "https://picsum.photos/200"
    };


    // styles = {
    //     fontSize: 50,
    //     fontWeight: "bold"
    // }


    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    
    
    // constructor() {
        // super();
        // this.handleIncrement = this.handleIncrement.bind(this); // to allow to bind (this) inside the handle function => first step
        // }
        // handleIncrement() {
            //     console.log("Increment clicked", this);
            // } ==> second step
            
            
    handleIncrement = () => { // ti bind (this) auto we use arrow function 
        
        console.log("Increment clicked", this);
    }


    //render() { 
        // let classess = this.getBadgeClasses();
        // return (
            // <React.Fragment> --> to not show div element
            //     <span>{this.state.count}</span>
            //     <button>Increment</button>

            //     <img src={this.state.imageUrl} alt=""/> 
            
            //     <span style={this.styles} className="badge badge-primary m-2">{this.FormatCount()}</span>
            //     <button style={ { fontSize: 20 } } className="btn btn-secondary btn=sm">Increment</button>
            //     <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

            // </React.Fragment>
        
    //     );
    // }


    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.FormatCount()}</span> 
            <button onClick={this.handleIncrement} className="btn btn-secondary btn=sm">Increment</button>
            { this.renderTags() }
        </div>
        );
    }
    getBadgeClasses() {
        let classess = "badge m-2 badge-";
        classess += (this.state.count === 0) ? "warning" : "primary";
        return classess;
    }

    FormatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;