import "./App.css";
import Home from "./components/Home/Home";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import ListOfCoins from "./components/ListOfTheCoins/ListOfCoins";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/coins">
            <Route index element={<ListOfCoins />} />
            <Route path=":id" element={<CoinDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Error 404 Not Found !!!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
