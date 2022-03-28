import { useState } from "react";

const Scoring = () => {
  const [showScoring, setShowScoring] = useState(false);
  return !showScoring ? (
    <div class="scoring">
      <div class="d-flex justify-content-between">
        <p class="m-0">Scoring</p>
        <div
          class="fs-5 text-end m-0"
          type="button"
          onClick={() => setShowScoring(!showScoring)}
        >
          &times;
        </div>
      </div>
      <table class="table table-borderless m-0">
        <tr>
          <td>WIN</td>
          <td class="text-end">+1</td>
        </tr>
        <tr>
          <td>LOSE</td>
          <td class="text-end">-1</td>
        </tr>
        <tr>
          <td>NO DEAL</td>
          <td class="text-end">-0.5</td>
        </tr>
      </table>
    </div>
  ) : null;
};

export default Scoring;
