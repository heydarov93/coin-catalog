import SearchInput from "../SearchInput/SearchInput";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import "./SearchForm.css";
import { useState } from "react";
import { useNavigate } from "react-router";
const SearchForm = ({ showFilter, onClickFilter }) => {
  const [formData, setFormData] = useState({ searchInput: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const queryString = formData.searchInput;

    navigate("/coins", { replace: true, state: { qString: queryString } });
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
      {showFilter && <AdvancedFilter />}
    </form>
  );
};

export default SearchForm;
