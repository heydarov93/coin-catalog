import "./App.css";
import Home from "./components/Home/Home";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import ListOfCoins from "./components/ListOfTheCoins/ListOfCoins";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const onClickFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home onClickFilter={onClickFilter} showFilter={showFilter} />
            }
          />
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
