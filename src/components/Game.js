import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "./Card";
import Scoring from "./Scoring";

const Game = ({ totalScore }) => {
  // states
  const [round, setRound] = useState(1);
  const [nextRound, setNextRound] = useState(false);
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(Math.floor(Math.random() * 13 + 1));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 13 + 1));
  const [num3, setNum3] = useState(Math.floor(Math.random() * 13 + 1));
  const [num3Visible, setNum3Visible] = useState(false);
  const [showScoring, setShowScoring] = useState(false);

  // variables
  let numbers = [num1, num2].sort((a, b) => a - b);
  const navigate = useNavigate();

  // functions
  const handleDeal = () => {
    setNum3Visible(true);
    setNextRound(true);
    if (numbers[0] < num3 && num3 < numbers[1]) {
      toast.success("WIN");
      setScore(score + 1.0);
    } else {
      toast.error("LOSE");
      setScore(score - 1.0);
    }
  };

  const handleNoDeal = () => {
    setNum3Visible(true);
    setNextRound(true);
    setScore(score - 0.5);
    toast.warn("YOU CHOSE NO DEAL.");
    // if (num3 <= numbers[0] || numbers[1] <= num3) {
    //   toast.success("WIN");
    //   setScore(score - 0.5);
    // } else {
    //   toast.error("LOSE");
    //   setScore(score - 0.5);
    // }
  };

  const handleHigher = () => {
    setNum3Visible(true);
    setNextRound(true);
    if (num3 > num1) {
      toast.success("WIN");
      setScore(score + 1.0);
    } else {
      toast.error("LOSE");
      setScore(score - 1.0);
    }
  };

  const handleLower = () => {
    setNum3Visible(true);
    setNextRound(true);
    if (num3 < num1) {
      toast.success("WIN");
      setScore(score + 1.0);
    } else {
      toast.error("LOSE");
      setScore(score - 1.0);
    }
  };

  const handleNextRound = () => {
    setNum1(Math.floor(Math.random() * 13 + 1));
    setNum2(Math.floor(Math.random() * 13 + 1));
    setNum3(Math.floor(Math.random() * 13 + 1));
    setNum3Visible(false);
    setRound(round + 1);
    setNextRound(false);
    if (round === 5) {
      navigate("/finish", {
        state: { totalScore: score },
      });
    }
  };

  return (
    <>
      {showScoring ? <Scoring /> : null}
      <Card title={<>Round {round}</>} score={score === 0 ? "0" : score}>
        <div class="d-flex justify-content-between">
          <div class="number">
            <h1>{num1}</h1>
          </div>
          {num3Visible ? (
            <div class="number">
              <h1>{num3}</h1>
            </div>
          ) : (
            <div class="number-false">
              <h1>?</h1>
            </div>
          )}
          <div class="number">
            <h1>{num2}</h1>
          </div>
        </div>
        {nextRound ? (
          <button
            type="button"
            class="btn btn-lg rounded-0 text-white text-uppercase w-100 mt-2"
            onClick={() => handleNextRound()}
          >
            {round === 5 ? "Finish" : "Next Round"}
          </button>
        ) : (
          <div class="d-flex justify-content-between mt-2">
            <button
              type="button"
              class="btn btn-lg rounded-0 text-white text-uppercase w-100 me-1"
              onClick={
                num1 === num2 ? () => handleHigher() : () => handleDeal()
              }
            >
              {num1 === num2 ? "Higher" : "Deal"}
            </button>
            <button
              type="button"
              class="btn btn-lg rounded-0 text-white text-uppercase w-100 ms-1"
              onClick={
                num1 === num2 ? () => handleLower() : () => handleNoDeal()
              }
            >
              {num1 === num2 ? "Lower" : "No Deal"}
            </button>
          </div>
        )}
        <p class="mt-3 mb-0 creators text-uppercase">
          Click{" "}
          <b
            class="text-white fw-normal"
            type="button"
            onClick={() => setShowScoring(!showScoring)}
          >
            this
          </b>{" "}
          to view scoring
        </p>
      </Card>
    </>
  );
};

export default Game;
