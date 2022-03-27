import { Link } from "react-router-dom";
import Card from "./Card";

const Finish = () => {
  return (
    <Card title="Done!">
      <p>Thank you for playing! Your total score is</p>
      <Link
        to="/"
        type="button"
        class="btn btn-lg rounded-0 text-white text-uppercase"
      >
        Play Again →
      </Link>
    </Card>
  );
};

export default Finish;
