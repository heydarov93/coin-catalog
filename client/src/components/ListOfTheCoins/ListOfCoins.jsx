import { useEffect, useState } from "react";
import { fetchCoinsByCategory } from "../../api/fetchData";
import SearchForm from "../SearchForm/SearchForm";
import Coin from "./Coin";
import "./ListOfCoins.css";
import { useSearchParams } from "react-router-dom";
import NavigationPath from "../NavigationPath/NavigationPath";

const ListOfCoins = ({ onClickFilter, showFilter }) => {
  const [listCoins, setListCoins] = useState(null);
  const [queryParams, setQueryParams] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryString = `cat=${searchParams.get("cat")}`;
    setQueryParams(queryString);
    fetchCoinsByCategory(queryString).then((data) => setListCoins(data));
  }, []);

  return (
    <section className="Container">
      <h1 className="Title">List Of The Coins</h1>
      <NavigationPath onClick={onClickFilter} showFilter={showFilter} />
      <SearchForm onClickFilter={onClickFilter} showFilter={showFilter} />
      {showFilter || (
        <div className="Coins">
          {listCoins &&
            listCoins.map((item) => {
              return (
                <Coin
                  key={item.id}
                  id={item.id}
                  img={item.coin_img1}
                  coinName={item.coin_name}
                  coinDesc={item.coin_shortDesc}
                  queryString={queryParams}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default ListOfCoins;
