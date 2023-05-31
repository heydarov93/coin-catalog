import { useEffect, useState } from "react";
import "./AdminPanel.css";
import Coin from "../ListOfTheCoins/Coin";
import { fetchCoinsBySearch } from "../../api/fetchData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const AdminPanel = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listCoins, setListCoins] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ searchInput });
    setSearchInput("");
  };

  const addCoin = (e) => {
    if (e.target.id !== "AddCoin") {
      navigate("/admin/add");
    }
  };

  const editCoin = (e) => {
    e.preventDefault();
    const { id } = e.target;
    navigate(`/admin/edit?id=${id}`);
  };

  useEffect(() => {
    const searchValue = Object.fromEntries(searchParams);
    const sizeOfSearchValue = Object.keys(searchValue).length;

    if (sizeOfSearchValue) {
      fetchCoinsBySearch(searchValue).then((data) => setListCoins(data));
    }
  }, [searchParams]);

  return (
    <div className="Container AdminPanel">
      <h1 className="Title">Admin Panel</h1>
      <div className="SearchInput">
        <label htmlFor="">Input field</label>
        <form action="" onSubmit={onSubmit}>
          <div className="SearchBar">
            <input
              type="text"
              name="searchInput"
              value={searchInput}
              onChange={onChange}
              autoComplete="off"
            />
            <button type="submit" className="SearchButton">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="Admin_Coins">
        {listCoins &&
          listCoins.map((item) => {
            return (
              <div className="Coin_Container" key={item.id}>
                <Coin
                  id={item.id}
                  img={item.coin_img1}
                  coinName={item.coin_name}
                  coinDesc={item.coin_shortDesc}
                  // queryString={queryParams}
                />
                <button onClick={editCoin} id={item.id} className="Coin_Edit">
                  Edit
                </button>
                <button id={item.id} className="Coin_Delete">
                  Delete
                </button>
              </div>
            );
          })}
        <div id="AddCoin" className="Add_Coin" onClick={addCoin}>
          <i>+</i>
          <span>Add a new coin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
