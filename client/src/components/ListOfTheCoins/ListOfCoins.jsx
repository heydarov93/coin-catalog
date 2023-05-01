import SearchInput from "../SearchInput/SearchInput";
import Coin from "./Coin";
import "./ListOfCoins.css";
const ListOfCoins = () => {
  return (
    <section className="Container">
      <h1 className="Title">List Of The Coins</h1>
      <SearchInput />
      <div className="Coins">
        <Coin />
        <Coin />
        <Coin />
        <Coin />
        <Coin />
        <Coin />
      </div>
    </section>
  );
};

export default ListOfCoins;
