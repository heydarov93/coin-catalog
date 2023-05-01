import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/fetchData";
import "./Home.css";
import Category from "../Category/Category";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import SearchInput from "../SearchInput/SearchInput";
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const onClickFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="Container">
      <h1 className="Title">Home Page</h1>
      <SearchForm onClickFilter={onClickFilter} showFilter={showFilter} />
      {showFilter || (
        <div className="Home_Categories">
          {categories.map((item) => {
            return <Category key={item.id} name={item.name} img={item.img} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
