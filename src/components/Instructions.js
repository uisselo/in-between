import Card from "./Card";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <>
      <Card title="In Between">
        <p>
          The game has five rounds. Three numbers are provided each round but
          one number is hidden. The player has to guess if the hidden number is{" "}
          <b class="text-white fw-normal">in between</b> the two numbers by
          choosing <b class="text-white fw-normal">deal</b> or{" "}
          <b class="text-white fw-normal">no deal</b>.
        </p>
        <p>
          If the two numbers are identical, the player has to guess if the
          hidden number is <b class="text-white fw-normal">higher</b> or{" "}
          <b class="text-white fw-normal">lower</b> instead.
        </p>
        <p>
          You win by one point if you guessed right otherwise you lose half a
          point. Have fun playing!
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
