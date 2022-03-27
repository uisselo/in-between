const Card = ({ title, score, children }) => {
    return (
      <div class="card p-4 border-0 rounded-0">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            {title ? <h5 class="card-title text-white">{title}</h5> : null}
            {score ? (
              <p class="score text-white align-self-center">Score: {score}</p>
            ) : null}
          </div>
          <p class="card-text">{children}</p>
        </div>
      </div>
    );
  };
  
  export default Card;