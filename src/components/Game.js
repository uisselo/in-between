import { useState } from "react";
import Card from "./Card";

const Game = () => {
  // states
  const [round, setRound] = useState(1)
  const [num1, setNum1] = useState(Math.floor(Math.random() * 13 + 1));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 13 + 1));
  const [num3, setNum3] = useState(Math.floor(Math.random() * 13 + 1));
  
  // variables
  let numbers = [num1, num2].sort((a, b) => a - b);
  let score = 10;

  return (
    <Card title={<>Round {round}</>} score={score}>
      <div class="d-flex justify-content-between">
        {[10, 9, 5].map((e) => {
          return (
            <div class="number">
              <h1>{e}</h1>
            </div>
          );
        })}
      </div>
      <div class="d-flex justify-content-between mt-2">
        <button
          type="button"
          class="btn btn-lg rounded-0 text-white text-uppercase w-100 me-2"
        >
          No Deal
        </button>
        <button
          type="button"
          class="btn btn-lg rounded-0 text-white text-uppercase w-100 ms-2"
        >
          Deal
        </button>
      </div>
    </Card>
  );
};

export default Game;
