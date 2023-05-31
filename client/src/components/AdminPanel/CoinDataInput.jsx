const CoinDataInput = ({
  label,
  name,
  type,
  value,
  onChange,
  className = "",
  onFocus = null,
  onBlur = null,
}) => {
  return (
    <div className={`Form_Control ${className}`}>
      <label className="Form_Label" htmlFor={name}>
        {label}
      </label>
      <div className="Form_InputBox">
        <input
          className="Form_Input"
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default CoinDataInput;
