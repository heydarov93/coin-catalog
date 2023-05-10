import SearchInput from "../SearchInput/SearchInput";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import "./SearchForm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SearchForm = ({ showFilter, onClickFilter }) => {
  const [formData, setFormData] = useState({
    searchInput: "",
    coin_country: "",
    coin_price_min: "",
    coin_price_max: "",
    coin_composition: "",
    coin_year_min: "",
    coin_year_max: "",
    coin_quality: "",
  });

  useEffect(() => {
    if (!showFilter) {
      setFormData((prev) => ({
        ...prev,
        coin_country: "",
        coin_price_min: "",
        coin_price_max: "",
        coin_composition: "",
        coin_year_min: "",
        coin_year_max: "",
        coin_quality: "",
      }));
    }
  }, [showFilter]);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const queryString = `?s=${searchInput}&coin_composition=${coin_composition}&coin_price_min=${coin_price_min}&coin_price_max=${coin_price_max}&coin_year_min=${coin_year_min}&coin_year_max=${coin_year_max}&coin_country=${coin_country}&coin_quality=${coin_quality}`;
    navigate("/coins", { replace: true, state: { ...formData } });
  };

  return (
    <form className="Form" action="" onSubmit={onSubmit}>
      <SearchInput
        name="searchInput"
        value={formData.searchInput}
        onChange={onChange}
        onClickFilter={onClickFilter}
        showFilter={showFilter}
      />
      {showFilter && <AdvancedFilter onChange={onChange} value={formData} />}
    </form>
  );
};

export default SearchForm;
