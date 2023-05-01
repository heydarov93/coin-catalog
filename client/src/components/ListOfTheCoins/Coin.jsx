import { Link } from "react-router-dom";

const Coin = () => {
  return (
    <div className="Coin">
      <Link to="/coins/:id">
        <div className="Coin_ImgWrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Canadian%20Beaver_1.png?alt=media&token=afbc2d60-686f-4b1f-b84a-91271b7ea863"
            alt=""
          />
        </div>
      </Link>
      <Link to="/coins/:id">
        <div className="CoinInfo">
          <h5>Canadian Beaver</h5>
          <p>
            "Canadian beaver". Unique coin with the image of a beaver. Face
            value - 5 cents. Created under Elizabeth II.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Coin;
