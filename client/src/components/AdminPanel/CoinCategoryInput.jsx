const CoinCategoryInput = ({
  value,
  name,
  id,
  label,
  categories,
  onChange,
  className = "",
}) => {
  return (
    <div className={`Form_Control ${className}`}>
      <label className="Form_Label" htmlFor={id}>
        {label}
        {className === "Warning" && (
          <span style={{ color: "#ff0000" }}>Must be selected</span>
        )}
      </label>
      <div className="Form_InputBox SelectInput">
        <select
          className="Form_Input"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">Select category</option>
          {categories?.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
          <option value="0">None</option>
        </select>
      </div>
    </div>
  );
};

export default CoinCategoryInput;
