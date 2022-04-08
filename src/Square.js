import React from 'react';

function Square(props) {
  const clickHandler = () =>
    props.onClick(props.cellNum, 'X');

  return (
    <button className="square" onClick={clickHandler}>
      {props.value}
    </button>
  )
}

export default Square;