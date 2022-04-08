import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    const onClickHandler = () => {
      const squares = [...this.state.squares];
      squares[i] = this.state.xIsNext ? 'X' : '0';

      this.setState({
        squares,
        xIsNext: !this.state.xIsNext
      });
    }

    return (
      <Square
        cellNum={i}
        value={this.state.squares[i]}
        onClick={onClickHandler}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : '0'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;