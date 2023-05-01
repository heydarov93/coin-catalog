import { useEffect, useState } from "react";
import { fetchCoinsByCategory } from "../../api/fetchData";
import SearchInput from "../SearchInput/SearchInput";
import Coin from "./Coin";
import "./ListOfCoins.css";
import { useSearchParams } from "react-router-dom";

const ListOfCoins = () => {
  const [listCoins, setListCoins] = useState(null);
  const [queryParams, setQueryParams] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryString = `cat=${searchParams.get("cat")}`;
    setQueryParams(queryString)
    fetchCoinsByCategory(queryString).then((data) => setListCoins(data));
  }, []);

  return (
    <section className="Container">
      <h1 className="Title">List Of The Coins</h1>
      <SearchInput />
      <div className="Coins">
        {listCoins &&
          listCoins.map((item) => {
            return <Coin
             key={item.id} 
             id={item.id} 
             img={item.coin_img1} 
             coinName={item.coin_name} 
             coinDesc={item.coin_shortDesc}
             queryString={queryParams}
             />;
          })}
      </div>
    </section>
  );
};

export default ListOfCoins;
