import SearchInput from "../SearchInput/SearchInput";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import "./SearchForm.css";
import { useState } from "react";
const SearchForm = ({ showFilter, onClickFilter }) => {
  const [formData, setFormData] = useState({ searchInput: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (!showFilter) {
    //   setFormData({ searchInput: formData.searchInput });
    // }
    console.log(formData);
    setFormData({ ...formData, searchInput: "" });
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
