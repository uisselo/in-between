import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

const Finish = () => {
  const location = useLocation();
  const { totalScore } = location.state;
  return (
    <Card title="Done!">
      <p>
        Thank you for playing! Your total score:{" "}
        <b class="text-white fw-normal fs-5">{totalScore}</b>
      </p>
      <Link
        to="/"
        type="button"
        class="btn btn-lg rounded-0 text-white text-uppercase"
      >
        Play Again →
      </Link>
      <p class="mb-0 mt-3 text-end text-uppercase creators">
        Designed by Louisse Evale and Devdan Romulo
        <br />
        4ITC - UST CICS
      </p>
    </Card>
  );
};

export default Finish;
