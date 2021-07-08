import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-secondary badge-pill m-2">{totalCounters}</span>
            </a>
        </nav>
     );
}
 
export default Navbar;

// class Navbar extends Component {
//     // state = {  }
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar
//                     <span className="badge badge-secondary badge-pill m-2">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//          );
//     }
// }
 
// export default Navbar;