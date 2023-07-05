import { useEffect, useState } from "react";
import "./AdminPanel.css";
import Coin from "../ListOfTheCoins/Coin";
import { deleteCoin, fetchCoinsBySearch } from "../../api/fetchData";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../config/firebase";

const AdminPanel = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listCoins, setListCoins] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState(null);
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

  const goToEditPage = (e) => {
    e.preventDefault();
    const id = e.target.name.split("goToEditPage")[1];
    navigate(`/admin/edit/${id}`);
  };

  const deleteCoinHandler = async (e) => {
    e.preventDefault();

    const id = e.target.name.split("deleteCoin")[1];
    const response = await deleteCoin(id);

    if (response.id) {
      const deletedCoin = listCoins.find((coin) => coin.id === +response.id);
      const updatedListCoins = listCoins.filter(
        (coin) => coin.id !== +response.id
      );

      setListCoins(updatedListCoins);

      // Delete img from storage bucket
      deleteObject(ref(storage, deletedCoin.coin_img1));
      deleteObject(ref(storage, deletedCoin.coin_img2));

      setMessage(`Coin \"${deletedCoin.coin_name}\" removed successfully!`);
      return;
    }

    if (!response.id) {
      setMessage(`The delete operation failed!`);
      return;
    }
  };

  useEffect(() => {
    const searchValue = Object.fromEntries(searchParams);
    const sizeOfSearchValue = Object.keys(searchValue).length;

    if (sizeOfSearchValue) {
      fetchCoinsBySearch(searchValue).then((data) => {
        setListCoins(data);
      });
    }
  }, [searchParams]);

  return (
    <div className="Container AdminPanel">
      <h1 className="Title">
        Admin Panel <small>{message}</small>
      </h1>
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
                <button
                  onClick={goToEditPage}
                  name={`goToEditPage${item.id}`}
                  className="Coin_Edit"
                >
                  Edit
                </button>
                <button
                  onClick={deleteCoinHandler}
                  name={`deleteCoin${item.id}`}
                  className="Coin_Delete"
                >
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
