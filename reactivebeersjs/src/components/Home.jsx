import React, { Component } from "react";
import {Link} from "react-router-dom";
class Home extends Component {
  render() {
    return (
        <div className="background ">
          <div className="box" ><Link className="linktext"  to="/beers"><div> <p >Go Beers</p><div className="backgroundimage beers "></div></div></Link></div>
          <div className="box" ><Link className="linktext"  to="/random-beer"><div> <p >Go Random Beer</p><div className="backgroundimage randombeer "></div></div></Link></div>
          <div className="box" ><Link  className="linktext" to="/new-beer"><div> <p>Go New Beer</p><div className="backgroundimage newbeer "></div></div></Link></div>
      </div>
    );
  }
}

export default Home;
