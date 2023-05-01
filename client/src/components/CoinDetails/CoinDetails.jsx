import ImgCoin from "./ImgCoin";
import InfoCoin from "./InfoCoin";
import "./CoinDetails.css";
const CoinDetails = () => {
  const img1 = `https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Canadian%20Beaver_1.png?alt=media&token=afbc2d60-686f-4b1f-b84a-91271b7ea863`;
  const img2 = `https://firebasestorage.googleapis.com/v0/b/coin-info-93.appspot.com/o/Canadian%20Beaver_2.png?alt=media&token=904a4789-a46e-4074-b7ff-1128e4818bc9`;

  return (
    <section className="CoinDetails">
      <div className="ImgWrapper">
        <ImgCoin img={img1} />
        <ImgCoin img={img2} />
      </div>
      <div className="InfoWrapper">
        <InfoCoin />
      </div>
    </section>
  );
};

export default CoinDetails;
