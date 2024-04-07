import React from "react";
import "./App.css";

const BOARD_SIZE = 10;
const DEFAULT_CELLS_VALUE = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));
const AVAILABLE_MOVES = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
const SPEED = 500;

function App() {
  const [direction, setDirection] = React.useState(AVAILABLE_MOVES[0]);
  const [snake, setSnake] = React.useState([[1, 1]]);
  const [food, setFood] = React.useState([0, 0]);

  const handleKeyDown = (event) => {
    const index = AVAILABLE_MOVES.indexOf(event.key);
    if (index >= -1) {
      setDirection(AVAILABLE_MOVES[index]);
      console.log(AVAILABLE_MOVES[index]);
    }
  };

  const checkAvailableSlot = (position) => {
    switch (true) {
      case position >= BOARD_SIZE:
        return 0;
      case position < 0:
        return BOARD_SIZE - 1;

      default:
        return position;
    }
  };

  const gameLoop = () => {
    const timeId = setTimeout(() => {
      const newSnake = snake;
      let move: number[] = [];

      switch (direction) {
        case AVAILABLE_MOVES[0]:
          move = [1, 0];
          break;
        case AVAILABLE_MOVES[1]:
          move = [-1, 0];
          break;
        case AVAILABLE_MOVES[2]:
          move = [0, 1];
          break;
        case AVAILABLE_MOVES[3]:
          move = [0, -1];
          break;

        default:
          break;
      }
      const head = [
        checkAvailableSlot(newSnake[newSnake.length - 1][0] + move[0]),
        checkAvailableSlot(newSnake[newSnake.length - 1][1] + move[1]),
      ];
      newSnake.push(head);
      let spliceIndex = 1;
      if (head[0] === food[0] && head[1] === food[1]) {
        spliceIndex = 0;
      }

      setSnake(newSnake.slice(spliceIndex));
    }, SPEED);
    return timeId;
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  React.useEffect(() => {
    const interval = gameLoop();
    return () => clearInterval(interval);
  }, [snake]);

  return (
    <div>
      {DEFAULT_CELLS_VALUE.map((row, indexR) => (
        <div key={indexR} className="row">
          {row.map((cell, indexC) => {
            let type =
              snake.some((elem) => elem[0] === indexR && elem[1] === indexC) &&
              "snake";
            if (type !== "snake") {
              type = food[0] === indexR && food[1] === indexC && "food";
            }

            return <div className={`cell ${type}`} />;
          })}
        </div>
      ))}
      <div className="cell snake" />
      <div className="cell food" />
    </div>
  );
}

export default App;
