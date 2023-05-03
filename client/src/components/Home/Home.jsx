import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/fetchData";
import "./Home.css";
import Category from "../Category/Category";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import SearchInput from "../SearchInput/SearchInput";
import SearchForm from "../SearchForm/SearchForm";
import NavigationPath from "../NavigationPath/NavigationPath";

const Home = ({ onClickFilter, showFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="Container">
      <h1 className="Home_Title Title">HomePage</h1>
      <SearchForm onClickFilter={onClickFilter} showFilter={showFilter} />
      {showFilter || (
        <div className="Home_Categories">
          {categories.map((item) => {
            return (
              <Category
                key={item.id}
                name={item.name}
                img={item.img}
                id={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
