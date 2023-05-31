const CoinCategoryInput = ({
  value,
  name,
  id,
  label,
  categories,
  onChange,
}) => {
  return (
    <div className="Form_Control">
      <label className="Form_Label" htmlFor={id}>
        {label}
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
        </select>
      </div>
    </div>
  );
};

export default CoinCategoryInput;
