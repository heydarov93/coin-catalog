const ShortDescTextarea = ({
  id,
  label,
  name,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`Form_Control ${className}`}>
      <label className="Form_Label" htmlFor={id}>
        {label}
        {className === "Warning" && (
          <span style={{ color: "#ff0000" }}>Must be filled</span>
        )}
      </label>
      <div className="Form_InputBox">
        <textarea
          className="Form_Input Form_Textarea"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default ShortDescTextarea;
