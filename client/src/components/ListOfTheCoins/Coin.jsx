import { Link } from "react-router-dom";

const Coin = ({ id, img, coinName, coinDesc, queryString }) => {
  return (
    <div className="Coin">
      <Link to={`/coins/${id}?back_path=${queryString}`}>
        <div className="Coin_ImgWrapper">
          <img src={img} alt={coinName} />
        </div>
      </Link>
      <Link to={`/coins/${id}?back_path=${queryString}`}>
        <div className="CoinInfo">
          <h5>{coinName}</h5>
          <p>{coinDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default Coin;
