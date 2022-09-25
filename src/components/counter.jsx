import React, { Component } from "react";
import { IoAddCircle,IoRemoveCircle } from "react-icons/io5";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Counter # {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn.sm"
        >
          <IoAddCircle />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <IoRemoveCircle/>
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
