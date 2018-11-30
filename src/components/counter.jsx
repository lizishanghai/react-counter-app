import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style={ this.styles } className="badge badge-primary m-2"> */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>

        <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
