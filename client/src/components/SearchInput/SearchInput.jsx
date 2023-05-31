import "./SearchInput.css";

const SearchInput = ({ onClickFilter, showFilter, name, value, onChange }) => {
  const filterArrow = showFilter ? (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 7L7 0.999999L1 7" stroke="black" />
    </svg>
  ) : (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7 7L13 1" stroke="black" />
    </svg>
  );

  return (
    <div className="SearchInput">
      <label htmlFor="">Input field</label>
      <div className="SearchBar">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </div>
      <button className="ShowFilter" onClick={onClickFilter}>
        <a href="#">Advanced Filter {filterArrow}</a>
      </button>
    </div>
  );
};

export default SearchInput;
