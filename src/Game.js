import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  render() {
    const onClickHandler = (i) => {
      const squares = [...this.state.history.at(-1).squares];

      // Prevent from double-clicking on the same square or if there is already a winner
      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : '0';

      this.setState({
        history: [...this.state.history, { squares }],
        xIsNext: !this.state.xIsNext
      });
    }

    // No need to show the last move in history
    const moves = this.state.history.slice(0, -1).map((_, moveNum) => {
      const description = moveNum ?
        'Go to #' + moveNum :
        'Back to start';

      return (
        <li key={moveNum}>
          <button onClick={() => this.jumpTo(moveNum)}>{description}</button>
        </li>
      );
    });

    const winner = this.state.history.length > 0 ?
      this.calculateWinner(this.state.history.at(-1).squares) :
      null;

    const status = winner ?
      `Player ${winner} won` :
      `Next player: ${this.state.xIsNext ? 'X' : '0'}`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.history.at(-1).squares}
            xIsNext={this.state.xIsNext}
            onClick={onClickHandler}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  jumpTo(moveNum) {
    this.setState({
      history: this.state.history.slice(0, moveNum + 1),
      xIsNext: moveNum % 2 === 0
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Game;