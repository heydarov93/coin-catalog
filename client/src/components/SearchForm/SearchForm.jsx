import SearchInput from "../SearchInput/SearchInput";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";
import "./SearchForm.css";
const SearchForm = ({ showFilter, onClickFilter }) => {
  return (
    <form className="Form" action="">
      <SearchInput onClickFilter={onClickFilter} showFilter={showFilter} />
      {showFilter && <AdvancedFilter />}
    </form>
  );
};

export default SearchForm;
