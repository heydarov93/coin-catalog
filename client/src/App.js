import "./App.css";
import Home from "./components/Home/Home";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import ListOfCoins from "./components/ListOfTheCoins/ListOfCoins";
import { Routes, Route } from "react-router";
import { useState } from "react";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AddEditCoin from "./components/AdminPanel/AddEditCoin";

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const onClickFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  return (
    <div className="App">
      <Routes>
        {/* Home route */}
        <Route path="/">
          <Route
            index
            element={
              <Home onClickFilter={onClickFilter} showFilter={showFilter} />
            }
          />
          {/* Admin Route  */}
          <Route path="admin">
            <Route index element={<AdminPanel />} />
            <Route path="add" element={<AddEditCoin />} />
            <Route path="edit" element={<AddEditCoin />} />
          </Route>
          {/* Coins route  */}
          <Route path="/coins">
            <Route
              index
              element={
                <ListOfCoins
                  onClickFilter={onClickFilter}
                  showFilter={showFilter}
                />
              }
            />
            <Route path=":id" element={<CoinDetails />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Error 404 Not Found !!!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
