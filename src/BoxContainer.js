import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    colors: ['purple', 'orange', 'red', 'blue', 'green', 'yellow', 'teal', 'indigo', 'coral']
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => <Box colors={this.props.colors} />);
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;