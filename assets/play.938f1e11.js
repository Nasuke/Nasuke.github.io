import { useState } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const styles = "";
function Square({
  value,
  onSquareClick
}) {
  return /* @__PURE__ */ jsx("button", {
    className: "square",
    onClick: onSquareClick,
    children: value
  });
}
function Board({
  xIsNext,
  squares,
  onPlay
}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "status",
      children: status
    }), /* @__PURE__ */ jsxs("div", {
      className: "board-row",
      children: [/* @__PURE__ */ jsx(Square, {
        value: squares[0],
        onSquareClick: () => handleClick(0)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[1],
        onSquareClick: () => handleClick(1)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[2],
        onSquareClick: () => handleClick(2)
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "board-row",
      children: [/* @__PURE__ */ jsx(Square, {
        value: squares[3],
        onSquareClick: () => handleClick(3)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[4],
        onSquareClick: () => handleClick(4)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[5],
        onSquareClick: () => handleClick(5)
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "board-row",
      children: [/* @__PURE__ */ jsx(Square, {
        value: squares[6],
        onSquareClick: () => handleClick(6)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[7],
        onSquareClick: () => handleClick(7)
      }), /* @__PURE__ */ jsx(Square, {
        value: squares[8],
        onSquareClick: () => handleClick(8)
      })]
    })]
  });
}
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return /* @__PURE__ */ jsx("li", {
      children: /* @__PURE__ */ jsx("button", {
        onClick: () => jumpTo(move),
        children: description
      })
    }, move);
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "game",
    children: [/* @__PURE__ */ jsx("div", {
      className: "game-board",
      children: /* @__PURE__ */ jsx(Board, {
        xIsNext,
        squares: currentSquares,
        onPlay: handlePlay
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "game-info",
      children: /* @__PURE__ */ jsx("ol", {
        children: moves
      })
    })]
  });
}
function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export {
  Game as default
};
