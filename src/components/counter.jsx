import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        // tags: []
        // imageUrl: "https://picsum.photos/200"
    };
    
    handleIncrement = () => { // we use arrow function to bind (this) auto 
        
        this.setState({ value: this.state.value + 1 })
        
    }
    
    render() { 
        // console.log('props', this.props.children);
        
        return (
            <div> 
                <span className={this.getBadgeClasses()}>{this.FormatCount()}</span> 
                <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn=sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* { this.renderTags() } */}
            </div>
        );
    }
    getBadgeClasses() {
        let classess = "badge m-2 badge-";
        classess += (this.state.value === 0) ? "warning" : "primary";
        return classess;
    }
    
    FormatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
    
    // styles = {
    //     fontSize: 50,
    //     fontWeight: "bold"
    // }


    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }
    
    
    // constructor() {
        // super();
        // this.handleIncrement = this.handleIncrement.bind(this); // to allow to bind (this) inside the handle function => first step
        // }
    // handleIncrement() {
        //     console.log("Increment clicked", this);
        // } ==> second step

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
}
 
export default Counter;
