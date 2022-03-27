import Card from "./Card";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <Card title="In Between">
      <p>The game has 5 rounds. Two (2) numbers will be</p>
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