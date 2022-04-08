import React from 'react';

class Square extends React.Component {
  render() {
    const clickHandler = () =>
      this.props.onClick(this.props.cellNum, 'X');

    return (
      <button
        className="square"
        onClick={clickHandler}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;