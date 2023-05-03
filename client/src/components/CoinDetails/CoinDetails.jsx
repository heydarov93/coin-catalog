import ImgCoin from "./ImgCoin";
import InfoCoin from "./InfoCoin";
import "./CoinDetails.css";
import { useEffect, useState } from "react";
import { fetchCoinById } from "../../api/fetchData";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  useEffect(() => {
    fetchCoinById(id).then((data) => setCoin(...data));
  }, []);

  return (
    <section className="CoinDetails">
      <div className="ImgWrapper">
        <ImgCoin img={coin.coin_img1} />
        <ImgCoin img={coin.coin_img2} />
      </div>
      <div className="InfoWrapper">
        <InfoCoin
          name={coin.coin_name}
          desc={coin.coin_shortDesc}
          textContent={coin.descriptions}
          country={coin.coin_country}
          composition={coin.coin_composition}
          quality={coin.coin_quality}
          denomination={coin.coin_denomination}
          year={coin.coin_year}
          weight={coin.coin_weight}
          price={coin.coin_price}
          backPath={searchParams.get("back_path")}
        />
      </div>
    </section>
  );
};

export default CoinDetails;
