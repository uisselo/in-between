import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Scoring from "./Scoring";

const Instructions = () => {
  const [showScoring, setShowScoring] = useState(false);
  return (
    <>
      {showScoring ? <Scoring /> : null}
      <Card title="In Between">
        <p>
          The game has five rounds. Three numbers are randomly drawn each round
          but one number is hidden. The player has to guess if the hidden number
          is in between the first two drawn numbers by choosing{" "}
          <b class="text-white fw-normal">deal</b> or{" "}
          <b class="text-white fw-normal">no deal</b>.
        </p>
        <p>
          Player only wins if the hidden number is{" "}
          <b class="text-white fw-normal">in between</b> the first two numbers
          otherwise the player loses. Click{" "}
          <b
            class="text-white fw-normal"
            type="button"
            onClick={() => setShowScoring(!showScoring)}
          >
            this
          </b>{" "}
          to view scoring.
        </p>
        <p>
          If the two numbers are identical, the player has to guess if the
          hidden number is <b class="text-white fw-normal">higher</b> or{" "}
          <b class="text-white fw-normal">lower</b> than the identical numbers
          instead. Have fun playing!
        </p>
        <Link
          to="/game"
          type="button"
          class="btn btn-lg rounded-0 text-white text-uppercase"
        >
          Start →
        </Link>
        <p class="mb-0 mt-3 text-end text-uppercase creators">
          Designed by Louisse Evale and Devdan Romulo
          <br />
          4ITC - UST CICS
        </p>
      </Card>
    </>
  );
};

export default Instructions;
