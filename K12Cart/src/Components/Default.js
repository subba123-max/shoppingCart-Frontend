import React, { Component } from "react";

 class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
      <h1 className='text-danger'> this page is under development or may be  page not found 404</h1>
      <marquee className='text-info'>sorry for your inconvinence</marquee>
      </div>
    );
  }
}

export default Default;