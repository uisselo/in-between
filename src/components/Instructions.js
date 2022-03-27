import Card from "./Card";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <Card title="In Between">
    <p>The game has 5 rounds. Per round, there will be two numbers. You will guess if it's in the middle of the two first drawn numbers.</p>

    <p>If the two cards are not identical, you will earn one (1) point if you chose "DEAL" and the third number is in between, otherwise you will lose a point. Deduction of 0.5 point for choosing "NO DEAL"</p>
    <p>If the two cards are identical, you will earn one (1) point if you chose "HIGHER" and the third number is in higher, otherwise you will lose a point. The same goes if you chose "LOWER" where the third number needs to be lower to earn the point.</p>

      <Link
        to="/game"
        type="button"
        class="btn btn-lg rounded-0 text-white text-uppercase"
      >
        Start →
    
      </Link>
    </Card>
  );
};

export default Instructions;
